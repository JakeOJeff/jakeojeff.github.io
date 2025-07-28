import Link from 'next/link';

export default function Projects() {
    let pageLinkValues = "flex items-center gap-1 m-1 text-[20px] text-gray-400 hover:text-gray-100 duration-500"
    return (<div>
        <main>
            <header>
                <Link href={"/projects"} className={pageLinkValues}>projects<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                </svg></Link>
            </header>
        </main>
    </div>)

}
