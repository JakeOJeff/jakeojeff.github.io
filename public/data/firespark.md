# casting spells with my webcam - firespark

## Date : 06-06-2025

okay this one is just pure fun. firespark is a little python thing that tracks your hand through your webcam and shoots fire-spark particles out of your fingertips in real time. basically it turns you into a wizard. you open your hand and sparks fly, you close it and they stop. i grinned like an idiot the first time it worked

under the hood its opencv for the webcam feed and mediapipe for the hand tracking, then i layered my own particle system on top to spawn the fire at each fingertip. the openness detection was the fun part, figuring out when your hand is open vs closed so the effect triggers naturally instead of you having to press a key. computer vision was a whole new area for me and its wild how accessible mediapipe makes hand tracking these days

its not a "product" or anything, its a toy, but those are honestly the projects i love most. small, weird, instantly magical to show someone. the whole "spell casting" vibe fits perfectly with all the magical fluid and energy stuff i keep gravitating toward. i think theres a theme in my work where i just want to make the screen feel a little bit enchanted

