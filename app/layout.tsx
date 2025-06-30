import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Profile Photo Editor - LinkedIn Profile Picture Generator',
  description: 'Create professional LinkedIn profile pictures with custom overlays, text, and Open to Work badges. Optimize your profile with our easy-to-use editor.',
  keywords: 'LinkedIn profile picture, profile photo editor, Open to Work badge, professional photo, PFP generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
} 