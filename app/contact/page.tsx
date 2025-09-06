"use client";
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col bg-gray-200 min-h-screen text-black" >
      <p className=" text-lg font-mono ml-10 mt-10">~{pathname}</p>

      {/* Centered main content */}
      <div className="flex-grow flex justify-center items-center p-4">
        <main className="w-full max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
           <h1 className="text-6xl font-bold mb-4"> Contact Me </h1>
          </div>
        </main>
      </div>

    </div>
  );

}
