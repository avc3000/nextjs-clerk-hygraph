import { ClerkProvider, SignIn } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SignedIn } from '@clerk/nextjs/app-beta'
import { SignedOut } from '@clerk/nextjs/app-beta/client'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (    
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>        
          <SignedIn>
            <NavBar />
            {children}
          </SignedIn>
          <SignedOut>
            <SignIn />
          </SignedOut>
        </body>
      </ClerkProvider>
    </html>
  )
}
