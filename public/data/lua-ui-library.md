# building a react-like ui library in lua - levelisteria

## Date : 17-08-2025

so this one is sneaky because on the surface levelisteria is a little demo about gamifying your life, turning daily tasks into an rpg-ish quest thing. but the REAL project hiding inside it is the thing im actually excited about, im building a react-like ui library in lua and love2d, for making mobile-style apps, and levelisteria is the testbed for it

heres the thing, ive been writing löve ui by hand for years with my JSRC framework, and its fine but its imperative and messy. i kept looking at how react does it, components, state, declarative rendering, and going "why cant i have that in lua?" so im building it. a component system where you describe what the ui should look like based on state and it figures out the rendering. levelisteria exists to stress test the concepts, component rendering, state handling, layout, before they go into the main library

its very much not production ready and thats on purpose, its a working demonstration of the principles first. but i love projects like this where the visible thing (a cute life-gamifying app) is really a trojan horse for the invisible thing (a whole ui architecture). its the same energy as building my own compiler, i keep wanting to rebuild the tools i use from the ground up so i actually understand them. plus a proper declarative ui lib for löve would be genuinely useful and i kind of cant believe i dont already have one

