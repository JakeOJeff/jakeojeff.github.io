# building a fake operating system that feels real - veloraos

## Date : 09-2025

new rabbit hole: i built VeloraOS, an operating system simulation. not a real kernel-on-bare-metal OS (that's a someday project), but a full simulation of one, the desktop, the windows, the apps, the little bits of UI and behavior that make a computer FEEL like a computer. it's the kind of thing that looks like a toy from the outside but forces you to think about a surprising amount of real systems design, window management, process-y state, how all these fake apps share one environment without stepping on each other

what pulled me into it is the same thing that pulls me into everything, i wanted to understand how the layer i use every single day actually holds together. you spend your whole life inside an OS and mostly never think about the choreography underneath, the windowing, the focus handling, the way everything's an app running inside one shell. rebuilding a simulated version of that from scratch is the fastest way to stop taking it for granted. you can't fake your way through a system you're reconstructing piece by piece

it also scratches an aesthetic itch i don't always get to indulge. an OS is basically the ultimate UI project, every interaction has to feel right or the illusion breaks instantly. all those years of building GUI libraries and obsessing over how a menu should open paid off here in a big way. it's playful and kind of ridiculous and i loved every second of it. this is peak "learn it by rebuilding it" energy, which is pretty much my entire personality at this point
