# going deeper on backend and security - mantis, memsnoop, logo-scraper

## Date : 28-04-2026

been on a real systems and backend kick these past couple months so lemme catch up on a few things at once. first there was mantis, a scaffolding cli that spins up a production-ready app in seconds, `mantis new myapp` and youre off. no docker, no slop. it wires up ruby on rails 8 with hotwire, react islands for the interactive bits, pocketbase for auth and database, and nixos flakes for the dev environment, so you write actual product code from line one instead of fighting your setup for a day. learning proper app architecture and ops stuff, because writing code is only half of it, getting it to actually run reliably is a whole separate skill

then memsnoop, which is back on my security side, a memory introspection tool in python that lets you peek at whats in a running process's memory. this is properly low-level, youre reading a program's actual memory space while its alive. it pairs really well with the pentesting work i do, and it keeps reinforcing this thing i keep learning, that understanding systems deeply is the real superpower, way more than knowing any single framework

and logo-scraper, a nix-based playwright scraper with a beautifulsoup4 parser. that one taught me about reproducible environments (nix is wild, once you get it your setup just works everywhere) and building clean data pipelines that dont hammer servers. looking at all three together, im clearly not just a game dev anymore. game dev, full-stack, security, systems, its all the same curiosity pointed at different problems. i just really like understanding how things work and then building my own version

