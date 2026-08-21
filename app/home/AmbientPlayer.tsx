"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Ambient sound for the home page.
 *
 * Two modes, picked automatically:
 *
 *  1. FILE  — if `public/audio/ambient.mp3` exists it is streamed on loop.
 *  2. TONES — otherwise the browser generates the ambience itself with the
 *             Web Audio API: a slow drone plus sparse pentatonic notes drifting
 *             through a low-pass filter and a long feedback delay. No asset,
 *             no download, never repeats exactly the same way.
 *
 * Playback always waits for a click. Browsers block autoplay, and unasked-for
 * sound is rude anyway. The choice is remembered in localStorage.
 */

const AUDIO_FILE = "/audio/ambient.mp3";
const STORAGE_KEY = "home:ambient";

// A minor pentatonic, spread over two octaves. Any subset of these sounds
// consonant together, which is what lets the notes be scheduled at random.
const SCALE_HZ = [
  220.0, 261.63, 293.66, 329.63, 392.0,
  440.0, 523.25, 587.33, 659.25, 783.99,
];

const MASTER_LEVEL = 0.16;
const FADE_SECONDS = 4;

export default function AmbientPlayer() {
  const [on, setOn] = useState(false);
  const [ready, setReady] = useState(false);

  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);
  const elementRef = useRef<HTMLAudioElement | null>(null);
  const modeRef = useRef<"file" | "tones" | null>(null);

  // Does an ambient track actually ship with the site? Decides the mode.
  useEffect(() => {
    let cancelled = false;
    fetch(AUDIO_FILE, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) modeRef.current = res.ok ? "file" : "tones";
      })
      .catch(() => {
        if (!cancelled) modeRef.current = "tones";
      })
      .finally(() => {
        if (!cancelled) setReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  /** One note: two slightly detuned oscillators under a long swell. */
  const voice = useCallback((ctx: AudioContext, dest: AudioNode, hz: number, at: number) => {
    const attack = 1.6 + Math.random() * 1.4;
    const release = 4 + Math.random() * 4;
    const peak = 0.09 + Math.random() * 0.06;

    const env = ctx.createGain();
    env.gain.setValueAtTime(0.0001, at);
    env.gain.exponentialRampToValueAtTime(peak, at + attack);
    env.gain.exponentialRampToValueAtTime(0.0001, at + attack + release);
    env.connect(dest);

    for (const detune of [-4, 5]) {
      const osc = ctx.createOscillator();
      osc.type = Math.random() < 0.5 ? "sine" : "triangle";
      osc.frequency.value = hz;
      osc.detune.value = detune;
      osc.connect(env);
      osc.start(at);
      osc.stop(at + attack + release + 0.2);
    }
  }, []);

  const startTones = useCallback(() => {
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctor();
    ctxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.value = 0.0001;
    master.connect(ctx.destination);
    masterRef.current = master;

    // Shared colour: everything sits behind a soft low-pass that breathes.
    const tone = ctx.createBiquadFilter();
    tone.type = "lowpass";
    tone.frequency.value = 900;
    tone.Q.value = 0.6;
    tone.connect(master);

    const sweep = ctx.createOscillator();
    const sweepDepth = ctx.createGain();
    sweep.frequency.value = 0.045; // one slow open-and-close every ~22s
    sweepDepth.gain.value = 380;
    sweep.connect(sweepDepth).connect(tone.frequency);
    sweep.start();

    // A long feedback delay stands in for a reverb tail.
    const delay = ctx.createDelay(6);
    delay.delayTime.value = 2.7;
    const feedback = ctx.createGain();
    feedback.gain.value = 0.42;
    const wet = ctx.createGain();
    wet.gain.value = 0.32;
    delay.connect(feedback).connect(delay);
    delay.connect(wet).connect(master);

    const bus = ctx.createGain();
    bus.connect(tone);
    bus.connect(delay);

    // Drone: the root, two octaves down, always present.
    const droneEnv = ctx.createGain();
    droneEnv.gain.value = 0.05;
    droneEnv.connect(tone);
    for (const [hz, detune] of [[110, -6], [110, 7], [164.81, 3]] as const) {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = hz;
      osc.detune.value = detune;
      osc.connect(droneEnv);
      osc.start();
    }

    // Sparse notes, one every 2.5-7s.
    const schedule = () => {
      const hz = SCALE_HZ[Math.floor(Math.random() * SCALE_HZ.length)];
      voice(ctx, bus, hz, ctx.currentTime + 0.05);
      timerRef.current = window.setTimeout(schedule, 2500 + Math.random() * 4500);
    };
    schedule();

    master.gain.exponentialRampToValueAtTime(MASTER_LEVEL, ctx.currentTime + FADE_SECONDS);
  }, [voice]);

  const startFile = useCallback(() => {
    const el = new Audio(AUDIO_FILE);
    el.loop = true;
    el.volume = 0;
    elementRef.current = el;
    void el.play().catch(() => undefined);

    // Manual fade-in; the element has no ramp of its own.
    const started = performance.now();
    const step = () => {
      const t = Math.min(1, (performance.now() - started) / (FADE_SECONDS * 1000));
      el.volume = t * 0.5;
      if (t < 1 && elementRef.current === el) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  const stop = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    const ctx = ctxRef.current;
    const master = masterRef.current;
    if (ctx && master) {
      // Ease out before tearing the graph down, so it never clicks.
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), ctx.currentTime);
      master.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
      window.setTimeout(() => void ctx.close().catch(() => undefined), 1700);
      ctxRef.current = null;
      masterRef.current = null;
    }

    const el = elementRef.current;
    if (el) {
      elementRef.current = null;
      const from = el.volume;
      const started = performance.now();
      const step = () => {
        const t = Math.min(1, (performance.now() - started) / 1200);
        el.volume = from * (1 - t);
        if (t < 1) requestAnimationFrame(step);
        else el.pause();
      };
      requestAnimationFrame(step);
    }
  }, []);

  const toggle = useCallback(() => {
    setOn((wasOn) => {
      if (wasOn) {
        stop();
        try {
          localStorage.setItem(STORAGE_KEY, "off");
        } catch {}
        return false;
      }
      if (modeRef.current === "file") startFile();
      else startTones();
      try {
        localStorage.setItem(STORAGE_KEY, "on");
      } catch {}
      return true;
    });
  }, [startFile, startTones, stop]);

  // A previous "on" cannot resume by itself — autoplay policy needs a gesture —
  // so arm it and let the visitor's first click anywhere bring the sound back.
  useEffect(() => {
    if (!ready) return;
    let remembered = false;
    try {
      remembered = localStorage.getItem(STORAGE_KEY) === "on";
    } catch {}
    if (!remembered) return;

    const resume = () => {
      window.removeEventListener("pointerdown", resume);
      toggle();
    };
    window.addEventListener("pointerdown", resume, { once: true });
    return () => window.removeEventListener("pointerdown", resume);
  }, [ready, toggle]);

  useEffect(() => stop, [stop]);

  return (
    <button
      type="button"
      onClick={toggle}
      className={`ambient-toggle${on ? " is-on" : ""}`}
      aria-pressed={on}
      aria-label={on ? "Turn ambient sound off" : "Turn ambient sound on"}
    >
      <span className="ambient-bars" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      {on ? "sound on" : "sound off"}
    </button>
  );
}
