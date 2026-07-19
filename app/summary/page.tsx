"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Summary() {
  const pathname = usePathname();

  return (
    <main className="bg-stone-100 text-black min-h-screen">
      <p className="text-lg font-mono ml-10 mt-10">~{pathname}</p>

      <article className="max-w-3xl mx-auto px-6 py-10">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-3">The Whole Story</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Everything about Paulyn (JakeOJeff) in one place &mdash; where it started,
            what got built, and everything in between. From Roblox obbies on a potato
            laptop to compilers, physics engines, a full game universe, security tools,
            a Minecraft server, and a guitar that never stays in the case for long.
          </p>
          <div className="mt-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 duration-500"
            >
              &larr; back to the blog
            </Link>
          </div>
        </header>

        <div className="space-y-10 text-gray-800 leading-relaxed">
          {/* WHO */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Who is this?</h2>
            <p className="mb-3">
              Paulyn &mdash; better known online as <strong>JakeOJeff</strong> &mdash; is an
              18-year-old programmer, game developer and cyber-pentester based in{" "}
              <strong>Kochi, Kerala, India</strong>. If you had to compress the whole thing
              into one sentence: he&apos;s a maker. Games, tools, compilers, simulations,
              security utilities, a Minecraft server, an e-commerce store, a computer-vision
              spell-caster, a city transit app, original music, poetry &mdash; the medium
              changes, the instinct to build doesn&apos;t.
            </p>
            <p>
              His GitHub profile just says <em>&ldquo;I love lua so much ahhhhhh &lt;3
              &mdash; Systems, Web and Game Developer (you only have one life, learn it
              all).&rdquo;</em> His other self-description is &ldquo;I love guitars. Software
              Developer and Cyber-Pentester,&rdquo; and between the two that captures the
              split pretty well.
              Half of him lives in Lua, TypeScript, Ruby, Go, Python, Java and C; the
              other half lives on six strings at open gigs. He&apos;s the #1 contributor to{" "}
              <span className="font-mono text-sm">@trymimicode</span> (an AI coding agent) under
              the Curious Engine builder collective, is a bounty hunter for Hack Club, moderates
              the W3Schools Discord community, and mentors younger coders around Kochi.
            </p>
          </section>

          {/* ORIGINS */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Origins &mdash; a kid and a copy of Roblox Studio (~2019)</h2>
            <p className="mb-3">
              It started around age 11 with <strong>Roblox obbies</strong> &mdash; those
              obstacle-course games where you leap across platforms and dodge glitchy
              traps. He wasn&apos;t thinking &ldquo;I&apos;m programming&rdquo; at the time; he
              was just dragging blocks around Roblox Studio and poking at the Lua scripts
              whenever he needed something to move or open or kill the player. But that was
              the hook: the realization that he could <em>build a thing other people could
              play</em>. It never let go.
            </p>
            <p className="mb-3">
              And he wasn&apos;t small on Roblox &mdash; he was genuinely good at it. He joined
              in <strong>May 2019</strong>, listed himself as &ldquo;Scripter, Game Musician,
              UI Designer,&rdquo; and ended up <strong>creating an entire obby sub-genre</strong>:
              the <em>Glitch Per Difficulty Chart</em>, where you clear sections by abusing
              in-game glitches instead of normal jumps. Other creators started making their own
              charts in the format he invented. His games pulled serious numbers &mdash; the
              main <strong>Glitch Per Difficulty Chart passed 160,000+ visits</strong> and a
              Halo-crates skill-jump speedrun cleared <strong>117,000+</strong> &mdash; and he
              founded and still owns the <strong>&ldquo;JakO Obbyist Community&rdquo;</strong>{" "}
              group, a few <strong>hundred members</strong> deep. A kid on a broken laptop
              quietly ran a hit game and its community.
            </p>
            <p className="mb-3">
              It wasn&apos;t just building, either &mdash; from roughly <strong>2020 to 2022</strong>{" "}
              he was a full-on content creator. He was part of a <strong>YouTuber obby
              group</strong>, playing and racing through courses together and{" "}
              <strong>collabing on the channel</strong>, and cranked out a stack of videos. That
              spilled into a genuine <strong>video-editing spree</strong> &mdash; cuts, timing,
              sound effects, syncing moments to a beat &mdash; the same &ldquo;fiddle until it
              clicks&rdquo; itch as code, just aimed at a clip. Roblox was where he first got to
              be <em>every</em> kind of maker at once: scripter, game musician, UI designer,
              community runner, and editor.
            </p>
            <p>
              The laptop he had back then was rough &mdash; 4GB of RAM, Windows 7, wheezing
              at too many Chrome tabs. As his ambitions outgrew Roblox, he found{" "}
              <strong>LÖVE (love2d)</strong>: a tiny, lightweight Lua framework that ran on
              basically anything. It was perfect for a potato laptop, and its community
              was welcoming. LÖVE is the true foundation of everything he does now &mdash;
              it turned &ldquo;kid who messes with Roblox&rdquo; into someone who actually
              writes every line.
            </p>
          </section>

          {/* MINECRAFT + GITHUB */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Running a world &mdash; MinersJoK (2020) &amp; a GitHub account (2021)</h2>
            <p className="mb-3">
              Around 2020 he spun up his own Minecraft server, <strong>MinersJoK</strong>{" "}
              &mdash; minigames, survival, bedwars, hosted through Aternos, open to both
              cracked and premium accounts so <em>everyone</em> could join. He learned that
              running a server is far more admin than code: land-claim and anti-grief
              plugins, endless permission configs, constant babysitting. But it was the
              first thing he ran that other people <em>depended on being up</em> &mdash; a
              little world that was his, that others lived inside.
            </p>
            <p>
              In July 2021 he created his <strong>GitHub account</strong> &mdash; finally
              somewhere to keep his code instead of losing it every time the laptop died. He
              found <strong>LÖVE</strong> around this era too. That account is the spine of
              the timeline that follows.
            </p>
          </section>

          {/* LOVE ERA */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">The LÖVE years &mdash; tools, libraries and engines (2022&ndash;2024)</h2>
            <p className="mb-3">
              His first real repository, <strong>JSRC-FRAMEWORK</strong> (June 2022), was a
              GUI library for LÖVE games &mdash; born from being tired of rebuilding the
              same buttons and menus in every project. It was the first time he thought
              &ldquo;other people could use this too,&rdquo; and building for other
              developers became a recurring theme.
            </p>
            <p className="mb-3">
              This is also when the work turned professional &mdash; as a teenager. In{" "}
              <strong>August 2022</strong> he took a remote job as a <strong>Software Tester
              at Suneflower</strong>, running manual and automated tests on web apps and
              writing GUI-based API reports &mdash; which quietly rewired how he sees
              software, as a pile of assumptions waiting to be broken. Barely half a year
              later, in <strong>2023</strong>, he leveled up to <strong>Lead Developer at
              LuminoByte Studios</strong>, where he built the game engine and core mechanics{" "}
              <em>and</em> managed the team &mdash; his first taste of leading rather than
              just building.
            </p>
            <p className="mb-3">
              In 2023 he also went on a tool-making spree: <strong>anim16</strong> (a quickie
              sprite-animation tool, &ldquo;so simple even grandma Alice could edit it&rdquo;)
              and <strong>seductivehood</strong> (a 2D car-physics library obsessed with
              <em> feel</em> over correctness). That September he began <strong>Rhythm</strong>,
              a rhythm game &mdash; the perfect fusion of his musician brain and his coder
              brain, and a brutal lesson in how unforgiving audio-visual timing is.
            </p>
            <p>
              2024 got deeper and more fundamental. He started building a{" "}
              <strong>2D physics engine from scratch</strong> &mdash; no Box2D, no
              shortcuts, just collision resolution, momentum and contact math that humbled
              him repeatedly. He also shipped the <strong>Oversmart Shuffle</strong>, a
              smarter song-shuffling algorithm that avoids repetition and clustering.
            </p>
          </section>

          {/* THE BIG YEAR */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">2025 &mdash; the year everything happened</h2>
            <p className="mb-3">
              2025 was, by a wide margin, his most prolific year. It opened with{" "}
              <strong>cozy-music-player</strong>, a warm little desktop music player in Lua
              (inspired by @Nashallery), and a proper <strong>personal website</strong> to
              show his growing pile of work.
            </p>
            <p className="mb-3">
              Then he leaned hard into security and web: <strong>OSSint</strong>, an open
              source intelligence tool for Google Dorking and defensive security (his Hack
              Club Summer of Making project), and <strong>Flowlog</strong>, a productivity
              Chrome extension to figure out where his hours actually disappear to. In July
              came <strong>Stacks Against You</strong> &mdash; a privacy-focused chat app
              with <em>zero database</em>, where nothing is stored and therefore nothing can
              leak. Privacy by architecture, not policy. That September he made the security
              side official too, earning his <strong>OCSP (Offenso Certified Security
              Professional)</strong> credential in Kochi &mdash; the paper behind years of
              machine, web and android pentesting.
            </p>
            <p className="mb-3">
              And then the big one: <strong>Tales of Orbis</strong>, his most ambitious game
              &mdash; a full RPG in LÖVE where you play as Orbis, formed from the ashes of a
              god, racing to the core before the Dawn Lights end you. It grew into an entire{" "}
              <strong>universe</strong>: <strong>Liora</strong> (a prequel, built in Godot to
              stretch into GDScript) and <strong>Nullborn Saga</strong> (a visual novel tying
              the worlds together, where his poetry and writing side finally paid off). Keeping
              lore consistent across three projects in different engines was the most
              &ldquo;author&rdquo; he&apos;s ever felt while coding.
            </p>
            <p className="mb-3">
              And that&apos;s only the headline projects &mdash; 2025 also overflowed with
              experiments that show his range. <strong>firespark</strong>, a computer-vision
              toy using OpenCV and MediaPipe to shoot fire particles from your fingertips
              like casting a spell. An <strong>emotional chatbot</strong> in LÖVE with typing
              simulation and flying-letter animations. <strong>luminzier</strong>, a drawing
              app where you define shapes with live <em>math expressions</em> instead of a
              mouse. <strong>levelisteria</strong>, a life-gamifying demo that&apos;s secretly
              a testbed for a <strong>React-like UI library he&apos;s building in Lua</strong>.{" "}
<strong>VeloraOS</strong>, a from-scratch <em>operating-system simulation</em> &mdash;
              desktop, windows and apps &mdash; built to understand the layer he uses every day.{" "}
              <strong>Winpedia</strong>, a winter-themed social app where you freeze if you
              don&apos;t post. A <strong>Minesweeper AI</strong> (lemines) that reasons and
              gambles like a human. <strong>Gratitude Quest</strong>, a game he made for his
              own birthday to thank everyone who helped him. Plus a steady stream of small,
              finished games &mdash; Coinage, FallClicker, Game Over (a reverse murder
              mystery), Pollocks, Pulse, Pongers and more.
            </p>
            <p>
              The back half of 2025 kept accelerating: <strong>Spellfluid</strong>, a
              hypnotic hybrid Euler-grid + particle fluid simulator (one of his most-starred
              repos); <strong>GoSpooks</strong>, a terminal horror game written to learn Go;{" "}
              <strong>Jengine</strong>, finally packaging years of physics experiments into a
              proper grid-based engine inspired by Box2D; and <strong>lat</strong> &mdash; a
              real, working <em>compiler</em> written in Ruby that transpiles a custom
              language (syntax drawn from Lua, Ruby, Python and Java) into Lua, complete with
              lexer, parser and code generator, published as a RubyGem. It&apos;s his
              most-starred project, and the one that taught him the most about how
              programming actually works. Notably, he used AI as a <em>tutor</em> for it, not
              an autopilot &mdash; the whole point was to understand compilers, not skip past
              the understanding.
            </p>
          </section>

          {/* 2026 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">2026 &mdash; systems, backends &amp; going low-level</h2>
            <p className="mb-3">
              The most recent chapter goes deep into the stack. <strong>seashell</strong>,
              a Unix shell written from scratch in C &mdash; the thing that finally
              demystified fork, exec, pipes and file descriptors. <strong>Mantis</strong>,
              a scaffolding CLI (<span className="font-mono text-sm">mantis new myapp</span>)
              that spins up a production-ready Rails 8 + Hotwire + React-islands +
              Pocketbase app on NixOS flakes &mdash; &ldquo;no Docker, no slop.&rdquo;{" "}
              <strong>memsnoop</strong>, a Python memory-introspection tool that pairs with
              his pentesting work. And <strong>logo-scraper</strong>, a Nix-based Playwright
              + BeautifulSoup4 pipeline that taught him reproducible environments.
            </p>
            <p>
              He also turned outward and local: <strong>KochiTransit</strong>, a React
              Native + Expo public-transit app for his own city (his first real dive into
              mobile), and <strong>jvpn</strong>, a WireGuard VPN wiring his own PC and
              laptop together over encrypted UDP, keys managed through WSL2 and NixOS.
              He&apos;s gone fully down the <strong>NixOS</strong> rabbit hole for
              reproducible, self-owned infrastructure. Game dev, full-stack, security,
              systems, mobile, civic tech &mdash; increasingly it&apos;s all one curiosity
              pointed at different problems.
            </p>
          </section>

          {/* 2026 PROFESSIONAL */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">2026 &mdash; building things other builders build with</h2>
            <p className="mb-3">
              2026 is also the year Paulyn stopped being purely a solo builder. He joined{" "}
              <strong>mimicode</strong> (<span className="font-mono text-sm">@trymimicode</span>),
              an AI coding-agent CLI &mdash; deliberately small, four tools, ripgrep-first,
              routing between Claude Haiku and Sonnet to stay 50&ndash;80% cheaper, with a
              memory that persists across sessions (&ldquo;not your coding partner&rdquo;).
              The project was started by Alvin Liju, but Paulyn became its{" "}
              <strong>#1 contributor</strong>, building essentially the <em>entire</em> terminal
              UI &mdash; the interactive TUI, the memory system with auto-compacting, slash
              commands and command palette, session history and restore, an interruption
              system, multiline paste, real-time stream rendering and switchable color
              palettes. When the tool outgrew Python, it was rewritten into a single
              zero-dependency <strong>Go</strong> binary, and there he stepped into a real{" "}
              <strong>maintainer role</strong>: reviewing and merging PRs, cutting releases,
              keeping a changelog. His first taste of shipping a reliable, auditable tool that
              real people run on real codebases.
            </p>
            <p className="mb-3">
              mimicode lives under <strong>Curious Engine</strong> (curiousengine.org), a
              Bangalore builder non-profit whose whole pitch is{" "}
              <em>&ldquo;Build Without Asking Permission&rdquo;</em> &mdash; it hands fuel to
              people who are actually shipping, no equity, no pitch deck, no TAM slide. Paulyn
              runs its <strong>web and infrastructure</strong> side: he built the site and set
              up <strong>DNS as code</strong> (a versioned source-of-truth zone applied to the
              registrar with validate / diff / backup / apply). It&apos;s the exact kind of
              org he wishes had existed when he was a kid with a weird idea and no way in.
            </p>
            <p>
              He&apos;s also been in the code on <strong>Plotter</strong> (plotter.so, &ldquo;a
              canvas for thinking with AI&rdquo;) &mdash; Affan Sajid&apos;s product that
              reorganizes AI chats as a branching <strong>tree</strong> instead of a flat list,
              so you can see the whole shape of your work and share it with full context.
              Serving someone else&apos;s vision instead of his own turned out to be its own
              discipline &mdash; and between that and mimicode, the solo maker quietly became
              someone other builders build alongside.
            </p>
            <p>
              And the newest thread (mid-2026) points at mobile: he started{" "}
              <strong>Zenvoq Labs</strong>, an Android-focused micro-SaaS studio, with its first
              app in progress &mdash; <strong>FramePDF</strong>, a scan / crop / sign-to-PDF tool
              that&apos;s deliberately <strong>fully offline, no account</strong>. Same
              privacy-by-architecture instinct as Stacks Against You, aimed this time at the
              documents on your phone. Nothing shipped to the store yet &mdash; it&apos;s a
              just-started venture &mdash; but it&apos;s him chasing the &ldquo;put it in front
              of real people&rdquo; goal one more step.
            </p>
          </section>

          {/* COMMUNITY + TEACHING */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Giving it back &mdash; teaching, mentoring &amp; running programs</h2>
            <p className="mb-3">
              For all the solo output, some of the work he&apos;s proudest of points outward,
              and most of it radiates from <strong>TinkerSpace</strong> in Kochi &mdash; the
              maker space that&apos;s become his second home. He <strong>ran what was, as far as
              he can tell, Kerala&apos;s first game jam of its size</strong> there (24 hours,
              students from across the state), and <strong>taught CS and Lua to children at
              Dharmagiri Vikas</strong>, an initiative aimed at getting young girls into STEM
              and proving that where you start doesn&apos;t decide where you end up &mdash;
              something he means literally, having learned everything on a 4GB laptop.
            </p>
            <p className="mb-3">
              The mentoring runs deep. He mentored at <strong>Tink-Her-Hack</strong> &mdash;
              TinkerHub&apos;s women&apos;s hackathon, one of the largest in the world, thousands
              of women building overnight across dozens of Kerala venues &mdash; working the
              floor across <strong>four different venues</strong> and earning a mention for it.
              He also mentored younger builders through <strong>Kerala Startup Mission</strong>,
              and even built a project (<strong>CraftConnect</strong>) <em>for</em> a student he
              was mentoring, because sometimes the best way to teach is to build alongside
              someone on something real.
            </p>
            <p>
              And in <strong>Hack Club</strong> he crossed from participant to organizer. He&apos;s
              an official Hack Club contributor, reviews other makers&apos; project submissions,
              did Summer of Making &mdash; and now <strong>designs and runs his own YSWS
              (&ldquo;you ship, we ship&rdquo;) programs</strong>: <strong>Orbit</strong> (build
              a gravity/space physics sim, earn a magnetic-levitation globe) and{" "}
              <strong>Pristine</strong> (games in pure HTML/CSS, earn a Logitech MX Master).
              Designing a good YSWS, he says, is a lot like designing a good game &mdash;
              crafting a constraint and an incentive that makes someone <em>want</em> to build.
            </p>
          </section>

          {/* MUSIC + CREATIVE */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">The other half &mdash; music, poetry &amp; life</h2>
            <p className="mb-3">
              Code is only half the story. He plays <strong>guitar</strong> &mdash; electric,
              acoustic and classical &mdash; performs at <strong>open gigs</strong>, and
              writes his own <strong>original compositions</strong>. For him the joy is
              identical whether it&apos;s a chord progression clicking into place or a physics
              engine finally behaving: &ldquo;finding or getting something to work is a joy I
              cannot get anywhere else.&rdquo;
            </p>
            <p>
              He also writes <strong>poetry</strong> (quieter and more private than his code,
              but pulling from the same place &mdash; structure, rhythm, that satisfying final
              line), reads self-help books, and travels when he can. Ask if he&apos;s a
              programmer or a musician and he&apos;ll refuse the question: he just likes making
              things.
            </p>
          </section>

          {/* ACCOMPLISHMENTS */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">What he&apos;s actually pulled off</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Became the <strong>#1 contributor to mimicode</strong>, an AI coding-agent
                CLI &mdash; built its entire terminal UI and memory system, and maintains the
                Go rewrite &mdash; under the <strong>Curious Engine</strong> builder non-profit,
                where he also runs the site and DNS-as-code infrastructure.
              </li>
              <li>
                Worked real dev jobs as a teenager &mdash; <strong>Software Tester at
                Suneflower</strong> (2022) and <strong>Lead Developer at LuminoByte
                Studios</strong> (2023, built the engine and led the team) &mdash; and earned
                an <strong>OCSP security certification</strong> (2025).
              </li>
              <li>
                <strong>Created his own Roblox obby genre</strong> (Glitch Per Difficulty
                Chart) with games past <strong>160K and 117K visits</strong>, and founded a{" "}
                <strong>Roblox community of a few hundred members</strong> &mdash; as a kid.
              </li>
              <li>
                <strong>Ran Kerala&apos;s first game jam of its size</strong> at TinkerSpace,
                Kochi (24-hour, students from across the state), and <strong>taught CS &amp;
                Lua to kids</strong> to bring young girls into STEM.
              </li>
              <li>
                Built <strong>lat / LatLang</strong>, a working Ruby-to-Lua compiler,
                published as a RubyGem &mdash; his most-starred solo project.
              </li>
              <li>
                Shipped <strong>88+ public repositories</strong> spanning Lua, TypeScript,
                JavaScript, Ruby, Go, Python, Java and C.
              </li>
              <li>
                Created an entire <strong>game universe</strong> (Tales of Orbis, Liora,
                Nullborn Saga) across two engines &mdash; playable in the browser on itch.io.
              </li>
              <li>
                Placed in the <strong>top 5 leaderboards</strong> at Hack Club for his
                physics-engine work, earning a set of RPG trading cards.
              </li>
              <li>
                Participated in <strong>Hack Club Summer of Making</strong> with OSSint, and
                is an ongoing <strong>bounty hunter</strong> for Hack Club.
              </li>
              <li>
                Moderates the <strong>W3Schools Discord</strong> community.
              </li>
              <li>
                Founded <strong>Vellapaper</strong> (2025), a real posters &amp;
                vintage-paintings business he ran end-to-end &mdash; a hard, valuable lesson in
                unit economics when shipping costs wouldn&apos;t let the numbers close &mdash;
                and started <strong>Zenvoq Labs</strong> (2026), an Android studio, with{" "}
                <strong>FramePDF</strong> (offline PDF scanner) in progress.
              </li>
              <li>
                In <strong>Hack Club</strong>: an official contributor and project reviewer who
                now <strong>designs and runs his own YSWS programs</strong> (Orbit, Pristine);
                mentored at <strong>Tink-Her-Hack</strong> across four venues and through{" "}
                <strong>Kerala Startup Mission</strong>.
              </li>
              <li>
                Founded and administered <strong>MinersJoK</strong>, his own Minecraft
                server.
              </li>
              <li>
                Built and released a stack of tools &amp; libraries used by other developers
                &mdash; JSRC-FRAMEWORK, seductivehood, anim16, tiled-wakatime and more &mdash;
                and is building a <strong>React-like declarative UI library in Lua</strong>.
              </li>
              <li>
                Ranges across <strong>computer vision</strong> (firespark, hand-tracked AR),{" "}
                <strong>AI/algorithms</strong> (a human-like Minesweeper solver),{" "}
                <strong>mobile</strong> (a React Native transit app for Kochi), and{" "}
                <strong>self-hosted infrastructure</strong> (a personal WireGuard VPN on
                NixOS).
              </li>
              <li>
                Organized a community open source project (<strong>foss-flip</strong>) under
                <strong> Tinker-Foss</strong>, contributed to the <strong>Kerala Hack Club</strong>{" "}
                community and its website, and is active in the wider India FOSS scene.
              </li>
              <li>
                Ships <strong>tons of small finished games</strong> on itch.io &mdash; Game
                Over, Coinage, FallClicker, Pulse, Pongers, Subzero Floors, Beneath Me and
                more &mdash; alongside the big engine projects.
              </li>
              <li>
                Performs original guitar music at <strong>open gigs</strong>, and writes
                poetry on the side.
              </li>
            </ul>
          </section>

          {/* NOW */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Where things stand</h2>
            <p>
              From a kid making obbies on a 4GB laptop to someone who&apos;s shipped a
              compiler, multiple physics engines, a fluid simulator, an entire game
              universe, security tooling and a shell in C &mdash; the throughline was never a
              single specialty. It was consistency and curiosity: pick a project, learn
              whatever it needs, build it, ship it, repeat. He&apos;s not the most talented
              developer in any one room, by his own admission &mdash; he&apos;s just been
              relentlessly building for years, and it compounds. Whatever comes next, it&apos;ll
              almost certainly be something new he decided to figure out from scratch.
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-6 border-t border-gray-300 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-gray-900 duration-500">
            &larr; back to the blog
          </Link>
          <span className="mx-2">&middot;</span>
          <a
            href="https://github.com/JakeOJeff"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 duration-500"
          >
            github.com/JakeOJeff
          </a>
        </footer>
      </article>
    </main>
  );
}
