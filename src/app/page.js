import Image from 'next/image'
import Laptop from './laptop.js'
import WyattName from './wyatt.js'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-slate-50 dark:bg-slate-950 gap-6 xl:px-48 2xl:px-96">
			<div className="flex flex-col lg:flex-row w-full h-100vh lg:h-96 items-center justify-evenly">
				<Laptop className="aspect-square h-full" />
				<div className="w-full grow flex flex-col items-center">
					<WyattName />
				</div>
			</div>
			<p>
				I am a student at Boise State University and am currently working for a
				Computer Science degree with a minor in Cyber Security. I&apos;ve been coding
				since I could write and love doing it. I like lower-level programming in
				C, C++, Assembly, but I also can code in Javascript, Java, etc.
			</p>
    </main>
  )
}
