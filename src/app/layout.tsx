import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ejere David - Frontend Developer',
  description: 'Frontend Web Developer with 3+ years of experience building responsive, user-focused web applications using modern JavaScript frameworks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}