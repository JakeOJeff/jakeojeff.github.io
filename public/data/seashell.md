# wrote a unix shell from scratch in c - seashell

## Date : 23-02-2026

decided i wanted to actually understand what happens when i type a command into a terminal and hit enter, so i built seashell, my own unix shell, from scratch, in c. command parsing, piping, running processes, the whole deal. nothing quite forces you to learn how an operating system works like building the thing that sits on top of it

c is BRUTAL and i mean that lovingly. theres no safety net at all, you manage your own memory, and one mistake doesnt give you a nice error message, it just corrupts something and breaks in a mysterious way three functions later. but thats also exactly why its such a good teacher. you cannot hand-wave anything. you have to actually understand fork and exec and pipes and file descriptors because the language gives you nothing for free

coming from lua and löve where so much is handled for you, dropping down to c and syscalls really showed me how much magic ive been standing on top of this whole time. every high level thing i do rests on layers like this. building seashell made me appreciate all of it way more, and honestly demystified a bunch of stuff i used to think of as "too low level for me." turns out nothings too low level, its just c being c

