# building a 2d physics engine from scratch

## Date : 15-02-2024

okay physics engines have been on my todo list forever and i finally started the physics repo. the goal is a proper 2d physics engine, built from scratch, no box2d, no shortcuts. just me and the math

and the math is HUMBLING lmao. collision detection is one thing but actually resolving collisions properly, making objects push apart the right amount, conserving momentum, handling multiple contact points at once, thats a whole different beast. i keep getting objects that either phase through each other or explode off the screen at the speed of light for no reason. debugging physics is uniquely painful because when its wrong its VISUALLY wrong and kind of hilarious

but every time i fix one piece it feels incredible. got objects stacking without jittering, got them bouncing with actual restitution, got gravity feeling natural. theres something addictive about building the fundamental systems that everything else sits on top of. you understand games SO much better once youve built the physics yourself instead of just calling someone elses library. slow going but im loving it

