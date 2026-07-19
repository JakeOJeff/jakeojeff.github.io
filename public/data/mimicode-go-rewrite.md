# rewrote the whole thing in go - mimicode gets serious

## Date : 10-06-2026

mimicode outgrew python. the install dance (python 3.9+, a venv, pip, ripgrep) was friction, and shipping "curl this and also have the right runtime" isn't how a real tool should feel. so we rewrote it in go, and now it's a single binary with zero dependencies. no python, no node, no runtime, you download one file and run it. that alone makes it feel like a legit piece of software instead of a script you have to babysit. rewriting a thing you already built is weirdly clarifying too, you get to keep the good decisions and quietly delete all the dumb ones

i've slid more into a maintainer role on this one, which is new for me. it's not just me smashing out features, it's reviewing and merging PRs, reverting a providers change that broke things and then reapplying it properly, keeping a changelog across versions, adding a version number display, sorting out release stuff. today i also fixed the TUI to do realtime rendering as the model streams instead of waiting for the whole response and dumping it, plus a nasty repetition/color bug in the highlighting. small things but they're the difference between "feels laggy" and "feels alive"

the part i didn't expect to enjoy is the boring reliability work. merge, revert, re-apply, changelog, versioning. a year ago that would've bored me to tears, now i kinda get it, because when other people depend on the thing, "it works on my machine and i vaguely remember what changed" isn't good enough. go is also just a nice language for this, fast, boring in the good way, compiles to that one clean binary. i think this is the version people actually stick around for
