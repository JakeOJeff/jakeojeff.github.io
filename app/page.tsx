import Image from "next/image";
import Link from "next/link";
import Stack from "./Stack";
import RotatingText from './RotatingText';


const images = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
];



export default function Home() {
  let name = "Paulyn {JakeOJeff}"

  let linkValues = "font-bold text-gray-500 hover:text-gray-800 duration-500 "

  let pageLinkValues = "flex items-center gap-1 m-1 text-[20px]  text-gray-500 hover:text-gray-800 duration-500 hover:animate-pulse"

  const desc = (
    <>

      <strong>12th grade programmer</strong> and <strong>cyber-pentester</strong>, created a no-database fully private online chatting app called {' '}
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
      </a>
      <div className="flex pr-3 text-[14px] text-gray-500 font-bold justify-center"> {/*<div>in dev -: </div>*/}
      </div>

    </>
  );

  return (
 <div className="flex flex-col bg-gray-200 min-h-screen text-black">
    
    {/* Top Header Content */}
    <div className="px-4 py-2 text-lg font-mono">
      ~/
    </div>

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
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-4">{name}</h1>
            <h3 className="text-lg mb-6">{desc}</h3>

            <div className="flex flex-col items-center lg:items-start">
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

              <Link href={"/blogs"} className={pageLinkValues}>
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
          texts={['Stacks Against You.', 'Flowlog.', 'Luminzier.', 'OSSint.', 'JKPhys.']}
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
