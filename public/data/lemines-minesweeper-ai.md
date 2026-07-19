# a minesweeper AI that thinks like a person - lemines

## Date : 04-12-2025

built lemines, a minesweeper solving ai, and the thing im proud of is that it doesnt solve minesweeper like a cold brute-force machine, it solves it the way a HUMAN would. it starts by clicking a few random cells to get going, then works outward using the numbers to deduce which cells are safe and which to flag, expanding logically just like you would

the interesting part is what happens when logic runs out. in minesweeper you eventually hit spots where theres genuinely not enough information and you HAVE to guess, and most naive solvers either give up or cheat. lemines actually makes a choice in those moments, picks between the options like a real player taking a calculated risk. which means, just like a human, it does NOT have a 100% win rate, because sometimes you guess wrong and the board blows up. and honestly i wanted that, a solver that always wins would be less interesting than one that plays like us

this was a fun break from game dev and tools into more of an "algorithms and reasoning" headspace. modeling human-style deduction, where you flag what youre sure of, expand what you can, and gamble when youre stuck, taught me a lot about how we actually reason under uncertainty. i keep finding that the projects that teach me the most are the ones where i try to make a computer do something a person does intuitively

