# wiring my own machines together - jvpn + the nixos rabbit hole

## Date : 18-03-2026

built jvpn, my own little wireguard vpn setup to securely connect my machines, my windows pc and my laptop, over encrypted udp like theyre on the same private network no matter where they are. its a python cli orchestrating wireguard, with the keys managed through wsl2 and nixos. basically homelab tinkering, but the kind that teaches you how networking actually works at a level most people never touch

and yeah, ive fully gone down the nixos rabbit hole. its show up in a bunch of my recent stuff, jvpn, mantis, logo-scraper, all nix based. the appeal is reproducibility, you declare exactly what your environment is and it just... is that, everywhere, forever. no more "works on my machine" nonsense, no more spending an afternoon fixing a broken dev setup. it's a steep learning curve and the docs will make you cry but once it clicks its genuinely beautiful

this is the part of me thats less "game developer" and more "person who wants to understand and control their whole stack." theres a real joy in owning your infrastructure, knowing how your machines talk to each other, encrypting your own traffic, running your own setup instead of renting someone elses black box. same instinct as building a compiler or a shell from scratch honestly, i just really dont like magic i cant see inside of. if i use it, i want to understand it, and ideally rebuild a chunk of it myself

