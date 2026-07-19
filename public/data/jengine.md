# jengine - packaging my physics knowledge into an engine

## Date : 06-11-2025

started Jengine this week, which is basically the culmination of all the physics stuff ive been messing with. its a grid-based physics simulator inspired by box2d, and this time the goal is to make it a proper reusable ENGINE, not just a demo or a one-off experiment. taking everything i learned building physics from scratch over the last couple years and turning it into something solid

the grid-based approach is a different take from my earlier physics work, using spatial partitioning so you can handle way more objects without everything grinding to a halt. collision detection gets expensive fast when everything checks against everything, so the grid lets you only check things that are actually near each other. these are the kind of optimizations you only really appreciate once youve felt your framerate die

its kind of a full circle moment. box2d was the thing that made me go "wait, i could build that myself" way back when, and now here i am building my own engine inspired by it, actually equipped to do it properly. all those exploded-off-screen debugging nights added up to this. gonna do a web version too so people can poke at it in the browser. feels good to see the scattered physics experiments finally become one real thing

