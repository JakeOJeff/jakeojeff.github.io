
export default function Home() {
  const linkValues = "font-bold text-gray-500 hover:text-gray-800 duration-500 "

  return (
    <div className="flex flex-col bg-gray-200 min-h-screen text-black">


      {/* Centered main content */}
      <div className="flex-grow flex justify-center items-center p-4">
        <main className="w-full max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center ">
           <h1 className="text-4xl font-bold mb-4"> About me </h1>
           <div>
           <p>As they say, everything needs to begin to flourish, I began at the age of 11. Programming was always a passion and finding or getting something to work is a joy I cannot get anywhere else!</p>
           <br />
           <p>I started off by making roblox games, which helped me a give an insight on what I love to do, which is game development. I later moved to a programming framework called <a href="https://love2d.org" className={linkValues}>LÖVE</a> which then became the basis of my programming journey. It taught me everything I needed to know about input libraries, media libraries, etc. It helped me build my collection of items and projects with what it offered. I was also introduced to a loving community and it&apos;s something I&apos;ll never regret doing. You may ask, why LÖVE? I had a really bad laptop with 4GB ram and barely any space. It ran windows 7 and didnt even have a good GPU. No game engines would run what I wanted to make, until came LÖVE!</p>
           <br />
           <p>I also know other programming languages such as <a href="https://www.javascript.com/" className={linkValues}>Javascript</a>, <a href="https://www.ruby-lang.org/en/" className={linkValues}>Ruby</a>, <a href="https://www.java.com/en/" className={linkValues}>Java</a>, <a href="https://www.python.org/" className={linkValues}>Python</a> and a little bit of <a href="https://www.typescriptlang.org/" className={linkValues}>Typescript</a>! I am always open to learning new things, because they basically are new ports to my creativity. I also do cyber-pentesting for defensive and offensive on machines, web and android, and PCB making! I have recently started making android applications for fun as well :D</p>
           <br />
           <p>My other favourite thing to do, which has started to become a cliche for programmers, is to play the guitar and sing! I love doing open gigs and making my own music. I plan on expanding it as soon as I can. I have an electric, acoustic and a classical guitar hehe</p>
           <br />
           <p> In my free time, I write poetry, read books on self help or explore new music genres. I also moderate the official <a href="https://discord.gg/sjTKvXcsZ2" className={linkValues}>w3schools</a> discord server, or make something in hackclub. I love travelling and exploring new places or hanging out in the same old spots with my buds</p>

           </div>
          </div>
        </main>
      </div>

    </div>
  );

}
