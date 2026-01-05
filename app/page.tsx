"use client"

// import Image from "next/image";
import Link from "next/link";
import Stack from "./Stack";
import RotatingText from './RotatingText';
import { usePathname } from 'next/navigation';


const images = [
//   { id: 1, img: "/images/2.jpeg" },
  { id: 1, img: "/images/1.jpeg" },
];



export default function Home() {
  const name = "Paulyn {JakeOJeff}"
  const pathname = usePathname();

  const linkValues = " text-gray-700 hover:text-gray-800 duration-500 "

  const pageLinkValues = "flex items-center gap-1 m-1 text-[20px]  text-gray-500 hover:text-gray-800 duration-500 hover:animate-pulse"

  const desc = (
    <>

      <strong>12th grade programmer, game developer</strong> and <strong>cyber-pentester</strong>, created a no-database fully private online chatting app called {' '}
      <a
        href="https://github.com/jakeojeff/stacks-against-you"
        target="_blank"
        rel="noopener noreferrer"
        className={linkValues}
      >
        Stacks Against You
      </a>{' '}
      and{' '}
      <a
        href="https://github.com/jakeojeff/ossint"
        target="_blank"
        rel="noopener noreferrer"
        className={linkValues}
      >
        OSSint
      </a>, person behind{' '}
      <a
        href="https://vellapaper.com"
        target="_blank"
        rel="noopener noreferrer"
        className={linkValues}
      >
        Vellapaper
      </a>,  bounty hunter for Hackclub and mod @ W3Schools.
      <br />PS : bullies <a href="/kyyanite" className={linkValues}>Kyyanite</a>
      <div className="flex pr-3 text-[14px] text-gray-500 font-bold justify-center"> {/*<div>in dev -: </div>*/}
      </div>

    </>
  );

  return (
    <div className="flex flex-col bg-gray-200 min-h-screen text-black">
      <p className=" text-lg font-mono ml-10 mt-10">~{pathname}</p>

      {/* Centered main content */}
      <div className="flex-grow flex justify-center items-center p-4">
        <main className="w-full max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            {/* Left: Card Stack */}
            <div className="flex-1 flex justify-center">
              <Stack
                randomRotation={false}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 400, height: 400 }}
                cardsData={images}
              />
            </div>

            {/* Right: Text & Links */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start items-center font-bold mb-4">
                <div className="flex items-center gap-2">
                  <h1 className="text-4xl">{name}</h1>
                  <div className="w-2 h-2 animate-ping rounded-full bg-green-500"></div>
                  <a href="/contact" className="bg-gray-200/30  p-4 pt-2 pb-2 rounded-3xl text-black cursor-pointer  transition-all duration-300 hover:bg-black hover:text-white ">Get in touch</a>
                </div>
              </div>
              <h3 className="text-lg mb-6">{desc}</h3>

              <div className="flex flex-col justify-center items-center lg:items-start">
                <Link href={"/about"} className={pageLinkValues}>
                  about
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </Link>

                <Link href={"/projects"} className={pageLinkValues}>
                  projects
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                  </svg>
                </Link>
<Link href={"https://jakeojeff.itch.io"} className={pageLinkValues}>
  games
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="currentColor"
    className="size-4 ml-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 11.25h10.5
         a3.75 3.75 0 0 1 3.75 3.75v1.5
         a3 3 0 0 1-3 3
         c-.83 0-1.6-.34-2.15-.9l-1.1-1.1
         a1.5 1.5 0 0 0-2.12 0l-1.1 1.1
         a3 3 0 0 1-2.15.9
         a3 3 0 0 1-3-3V15
         a3.75 3.75 0 0 1 3.75-3.75Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25h.01M7.5 15.75h.01M10.5 15.75h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 14.25h.01M17.25 15.75h.01" />
  </svg>
</Link>

                <Link href={"/blog"} className={pageLinkValues}>
                  blogs
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom rotating text */}
      <div className="flex justify-center items-center pb-6">
        <a href="https://github.com/jakeojeff">
          <RotatingText
            texts={['Stacks Against You.', 'Flowlog.', 'Luminzier.', 'OSSint.', 'JKPhys.', "Tales of Orbis"]}
            mainClassName="ml-2 text-gray-500 hover:text-gray-800 duration-500"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </a>
      </div>
    </div>
  );

}
