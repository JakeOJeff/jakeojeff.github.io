# encoding, decoding and hashing as a service - signalizer

## Date : 17-10-2025

built Signalizer, a simple encoding and decoding tool that also exposes proper api endpoints so you can use it programmatically, not just through the web ui. you head to the create page, type your message, pick an encoder and go. most encoders are reversible so you can decode them right back, except SHA-256 which creates a one-way encrypted hash, because thats the whole point of a hash

this came out of my security brain wanting a clean little utility that i actually understood end to end. theres a million encoder/decoder sites out there but half of them are ad-riddled or sketchy, and i liked the idea of building my own clean one where i know exactly whats happening to the data. plus adding the api endpoints turned it from a toy webpage into something you could actually script against, which is way more useful, curl a string in, get the encoded value back.

its a small project but it sits right at the intersection of my web dev and security interests, which is a sweet spot i keep coming back to. understanding the difference between reversible encoding and a one-way hash is one of those fundamentals that matters a lot in security, and building the tool is how you really internalize it. same story as always with me, the fastest way to actually understand something is to build the thing yourself

