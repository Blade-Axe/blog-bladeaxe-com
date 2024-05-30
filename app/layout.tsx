import type { Metadata } from 'next'
import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { Providers } from './components/Providers'


const inter = Gabarito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BladeAxe Official Blog',
  description: 'The homepage for all my random thoughts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${inter.className} bg-slate-100 text-black dark:bg-gray-900 dark:selection:bg-gray-700 dark:text-white h-full selection:bg-gray-300 selection:text-orange-700 dark:selection:text-orange-200`}>
        <Providers>
          <Navbar />
          <main className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
