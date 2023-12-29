import Image from 'next/image'
import Laptop from './laptop.js'
import Typewriter from 'typewriter-effect'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-50 dark:bg-slate-950">
			<div className="flex flex-row w-full h-96 items-center justify-evenly">
				<Laptop className="aspect-square h-full" />
				<Typewriter
				  options={{
				    strings: ['Wyatt', 'Radkiewicz'],
				    autoStart: true,
				    loop: false,
				  }}
				/>
			</div>
    </main>
  )
}
