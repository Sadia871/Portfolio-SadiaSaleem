import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Website',
  description: 'Personal portfolio showcasing my work and skills',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}