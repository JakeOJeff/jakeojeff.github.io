"use client";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col bg-gray-200 min-h-screen text-black" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      <p className=" text-lg font-mono ml-10 mt-10">~{pathname}</p>

      {/* Centered main content */}
      <div className="flex-grow flex justify-center items-center p-4">
        <main className="w-full max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            {/* <h1 className="text-6xl font-bold mb-4"> Who&apos;s Carolyn? </h1> */}
            <Image
              src="/images/carolyn.png"
              alt="Picture of Carolyn"
              width={1000}
              height={1000}
            />
            <div>           
              <p>Carolyn? You're asking me about Carolyn? In a world full of baddies, only one surfaces them all. I think you all would know who I am talking about. It's obviously Carolyn Neil Elamkulam! Her charm, her wit, her way of words and her ability to make reduction sauce from blackberries is indeed remarkable. I find her pursuit of beauty while not being self indulged quite soulful. She carries this friendly attitude to herself and to her peers which radiates to everyone around her. She taught me what it takes to be a man of my word even when the world feels too much. If I have anybody to be eternally grateful for, it has to be Carolyn. My Carolyn Neil Elamkulam, Trademarked, by Carolyn.💕</p>
            </div>
          </div>
        </main>
      </div>

    </div>
  );

}
