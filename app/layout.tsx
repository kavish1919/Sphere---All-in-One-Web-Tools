import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'
import { Menu } from 'lucide-react'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SPHERE',
  description: 'SPHERE is your all-in-one online toolkit offering free AI tools, Color Palette Generator, PDF Merger, QR Code Generator, Audio to Text Converter, Chatbots, Data Analysis tools, and more—designed to boost productivity and creativity.',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-4px_rgba(255,255,255,0.1)] backdrop-blur-lg bg-white/30 dark:bg-black/30">
            <div>
              <h1 className="text-2xl font-bold tracking-tighter">SPHERE</h1>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Dialog>
                <DialogTrigger className="text-sm font-medium hover:text-gray-600 transition-colors">
                  About
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-slate-900 text-gray-800 dark:text-gray-200">
                  <DialogTitle className="text-xl font-semibold mb-4">About SPHERE</DialogTitle>
                  <div className="text-justify space-y-4 py-4">
                    <p>
                      Sphere is a tech-driven initiative, focused on delivering innovative online software tools that streamline and enhance everyday digital experiences. As we grow, our vision extends beyond software &mdash; with future ventures planned in online data analysis, intelligent automation, and a range of cutting-edge digital services.
                    </p>
                    <p>
                      The name &ldquo;Sphere&rdquo; reflects our core philosophy &mdash; just like a sphere has infinite tangents in every direction, our company aims to create meaningful impact across diverse domains of technology and business. We believe in expanding our reach, evolving continuously, and driving innovation wherever opportunity arises.
                    </p>
                    <p>
                      At Sphere, we&apos;re not just building tools &mdash; we&apos;re building a connected digital future.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-sm font-medium hover:text-gray-600 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-4">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <Dialog>
                <DialogTrigger className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <Menu className="w-6 h-6" />
                </DialogTrigger>
                <DialogContent className="w-[280px] p-6 bg-white text-black [&>*]:text-black border-0 shadow-none">
                  <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                  <nav className="flex flex-col gap-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="text-left text-sm font-medium hover:text-gray-600 transition-colors">
                          About
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-slate-900 text-gray-800 dark:text-gray-200">
                        <DialogTitle className="text-xl font-semibold mb-4">About SPHERE</DialogTitle>
                        <div className="text-justify space-y-4 py-4">
                          <p>
                            Sphere is a tech-driven initiative, focused on delivering innovative online software tools that streamline and enhance everyday digital experiences. As we grow, our vision extends beyond software &mdash; with future ventures planned in online data analysis, intelligent automation, and a range of cutting-edge digital services.
                          </p>
                          <p>
                            The name &ldquo;Sphere&rdquo; reflects our core philosophy &mdash; just like a sphere has infinite tangents in every direction, our company aims to create meaningful impact across diverse domains of technology and business. We believe in expanding our reach, evolving continuously, and driving innovation wherever opportunity arises.
                          </p>
                          <p>
                            At Sphere, we&apos;re not just building tools &mdash; we&apos;re building a connected digital future.
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <SignedOut>
                      <SignInButton mode="modal">
                        <button className="text-left text-sm font-medium hover:text-gray-600 transition-colors">
                          Sign In
                        </button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <button className="text-left px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors w-full">
                          Sign Up
                        </button>
                      </SignUpButton>
                    </SignedOut>
                  </nav>
                </DialogContent>
              </Dialog>
            </div>
          </header>
          {children}
          <footer className="mt-auto py-8 px-6 bg-white/30 dark:bg-black/30 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto text-center">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <p className="text-sm text-gray-600 dark:text-gray-700">
                  For any queries, please reach out to us at{' '}
                  <a 
                    href="mailto:sphere.queries@gmail.com" 
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    sphere.queries@gmail.com
                  </a>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  We aim to respond to all inquiries within 48 business hours.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Developed through Vibe Coding by Kavish Bishnoi. 
                </p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  )
}


