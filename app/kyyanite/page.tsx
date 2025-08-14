"use client";
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col bg-gray-200 min-h-screen text-black" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      <p className=" text-lg font-mono ml-10 mt-10">~{pathname}</p>

      {/* Centered main content */}
      <div className="flex-grow flex justify-center items-center p-4">
        <main className="w-full max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
           <h1 className="text-6xl font-bold mb-4"> Who&apos;s Kyyanite? </h1>
           <div>           <p>She wanted this page to be times new roman smh</p><br /><p>Honestly, when it comes to pure talent, wit, and overall cosmic brilliance, Kyyanite operates on a completely different plane of existence compared to me. It&apos;s like we&apos;re both running a race, but I’m still tying my shoelaces while Kyyanite is already halfway to the finish line, casually sipping a smoothie and waving at the crowd. Their creativity flows like a never-ending waterfall of genius, while mine occasionally drips out like a leaky faucet that needs fixing. Kyyanite doesn’t just think outside the box — they reinvent the box, patent it, and sell it in limited edition colors. Every word they speak feels like it’s been carefully polished, gift-wrapped, and delivered straight from the gods of eloquence, whereas mine sometimes sound like they’ve been run through a blender on “chaos” mode. If the universe had a scoreboard for charisma, intelligence, and effortless coolness, Kyyanite’s name would be flashing at the very top in neon lights, while I’d probably be struggling to even find my name on the list. Simply put, if life were a movie, Kyyanite would be the award-winning star everyone comes to see, and I’d be somewhere in the credits as “Person Who Briefly Walks Past in Scene 3.”</p></div>
          </div>
        </main>
      </div>

    </div>
  );

}
