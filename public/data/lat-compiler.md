# i built a compiler. an actual compiler. - lat

## Date : 20-11-2025

okay i think this might be the most technically ambitious thing ive ever done. i built lat, a ruby-based compiler that turns a custom language into lua. like a REAL compiler, lexer, parser, code generator, the whole pipeline. i learned ruby basically to build this and even shipped it as a rubygem

the why is very me, i write so much lua for löve and i kept wishing i had nicer syntax and features, so instead of just complaining i built a language that compiles down to the lua i already know and love. the process was humbling. the lexer turns your source into tokens, the parser builds a syntax tree out of those tokens following grammar rules, and the code generator walks that tree and spits out valid lua. every stage is precise and unforgiving and one wrong assumption breaks everything downstream

and then the moment i wrote code in my own language and watched it compile into working lua? i just sat there. i BUILT a compiler. that used to feel like deep wizard magic reserved for people way smarter than me, and turns out its just applied logic and a lot of patience. this one hit 8 stars, my most starred repo, and honestly it deserves it, it taught me more about how programming actually works than almost anything else ive made. once you understand compilers you kind of understand everything is just structured transformation

