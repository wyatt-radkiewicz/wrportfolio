import { Fira_Code } from 'next/font/google'
import './globals.css'

const firacode = Fira_Code({ subsets: ['latin'] })

export const metadata = {
  title: 'Wyatt Radkiewicz',
  description: 'Next level programmer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firacode.className}>
				<div>
				</div>
				{children}
			</body>
    </html>
  )
}
