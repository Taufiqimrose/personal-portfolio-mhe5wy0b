import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'A portfolio website to showcase projects, provide personal information, and display a resume for a computer science student.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-aspekta">{children}</body>
    </html>
  )
}