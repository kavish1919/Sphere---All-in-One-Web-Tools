'use client'
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SignedOut, SignUpButton } from '@clerk/nextjs';

export default function Home() {
  const [showNotificationDialog, setShowNotificationDialog] = useState(false);
  const [showAudioDialog, setShowAudioDialog] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotificationDialog(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 mb-16 animate-[fadeIn_1s_ease-in,slideUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards]">
        <span>SPHERE</span>
        <span className="block text-2xl md:text-3xl mt-2 text-gray-600 dark:text-gray-400">Where Ideas Take Off on Every Tangent</span>
      </h1>
      <main className="max-w-7xl mx-auto space-y-24">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          {/* Hero Product Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 col-span-full">

            <a href="/image-resizer" className="group p-8 rounded-2xl shadow-lg bg-gradient-to-r from-green-500 to-teal-600 border border-black/10 dark:border-white/10 hover:opacity-90 transition-opacity">
              <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-white/90 transition-colors">Slimmage - Image Resize and Compress</h2>
              <p className="text-lg text-white/90">One tool to shrink, resize, and optimize your images.</p>
            </a>

            <a href="/wordora" className="group p-8 rounded-2xl shadow-lg bg-gradient-to-r from-pink-500 to-rose-600 border border-black/10 dark:border-white/10 hover:opacity-90 transition-opacity">
              <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-white/90 transition-colors">Wordora</h2>
              <p className="text-lg text-white/90">Your Daily Dose of English Confidence.</p>
            </a>

            <div onClick={() => setShowAudioDialog(true)} className="group p-8 rounded-2xl shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 border border-black/10 dark:border-white/10 cursor-pointer hover:opacity-90 transition-opacity">
              <p className="inline-block px-3 py-1 rounded-full bg-yellow-400/10 text-sm font-semibold text-yellow-400 mb-2 backdrop-blur-sm">Hang Tight – Coming Soon</p>
              <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-white/90 transition-colors">Whispr - Audio to Text Converter</h2>
              <p className="text-lg text-white/90">Transform your audio recordings into accurate text transcriptions.</p>
            </div>

          </div>

          <Dialog open={showAudioDialog} onOpenChange={setShowAudioDialog}>
            <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-slate-900">
              <DialogTitle className="text-xl text-white font-semibold mb-4">Service Under Development</DialogTitle>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  We are currently fine-tuning our Audio to Text conversion service to ensure it meets our high standards for accuracy and reliability. This service will be available soon.
                </p>
                <div className="bg-blue-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Meanwhile, explore our other services:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Generate QR codes with QReate</li>
                    <li>Create color palettes using Tintella</li>
                    <li>Merge PDF files with Bindly</li>
                    <li>Resize and Compress images with Slimmage</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Thank you for your interest.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Active Services */}
          <a href="/qr-generator" className="group p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-black/10 dark:border-white/10 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
            <h2 className="text-xl font-semibold mb-2 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">QReate - QR Code Generator</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Generate QR codes for any URL instantly.</p>
          </a>

          <a href="/color-palette" className="group p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-black/10 dark:border-white/10 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
            <h2 className="text-xl font-semibold mb-2 text-black dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Tintella - Color Palette Generator</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Create beautiful and harmonious color combos.</p>
          </a>

          <a href="/pdf-merger" className="group p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-black/10 dark:border-white/10 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
            <h2 className="text-xl font-semibold mb-2 text-black dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Bindly - PDF Merger</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Combine multiple PDF files into a single document.</p>
          </a>

          {/* Row 2 - Coming Soon */}
          <div className="group p-8 rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-800/50 border border-black/10 dark:border-white/10">
            <p className="inline-block px-3 py-1 rounded-full bg-gray-400/10 dark:bg-gray-600/20 text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 backdrop-blur-sm">In the Pipeline</p>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Datanaut - Personal Data Analyst</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">A Powerful data analysis tool.</p>
          </div>

          <div className="group p-8 rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-800/50 border border-black/10 dark:border-white/10">
            <p className="inline-block px-3 py-1 rounded-full bg-gray-400/10 dark:bg-gray-600/20 text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 backdrop-blur-sm">In the Pipeline</p>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Talkie - Your Personalized Chatbot</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">An AI-powered chat assistance tool.</p>
          </div>

          <div className="group p-8 rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-800/50 border border-black/10 dark:border-white/10">
            <p className="inline-block px-3 py-1 rounded-full bg-gray-400/10 dark:bg-gray-600/20 text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 backdrop-blur-sm">In the Pipeline</p>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Secrets are being coded</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">Stay tuned for more exciting services.</p>
          </div>

          {/* Separator */}
          <div className="relative py-8 col-span-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gray-50 dark:bg-gray-900 px-6 py-2 text-lg font-semibold text-gray-900 dark:text-gray-100">How Our Services Work</span>
            </div>
          </div>

          {/* Service Demonstrations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 col-span-full">
            {/* Slimmage - Image Resize and Compress Demo */}
            <div className="group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg border border-black/10 dark:border-white/10 hover:shadow-xl transition-all duration-300 ease-in-out">
              <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">How Slimmage Works</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group/step hover:scale-[1.02] transition-transform duration-200">
                  <span className="flex-none w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg font-bold text-gray-900 dark:text-white">1</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Upload Your Image</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Select an image file from your device.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/step hover:scale-[1.02] transition-transform duration-200">
                  <span className="flex-none w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg font-bold text-gray-900 dark:text-white">2</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Adjust Settings</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Set your desired width, height, and quality for compression.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/step hover:scale-[1.02] transition-transform duration-200">
                  <span className="flex-none w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg font-bold text-gray-900 dark:text-white">3</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Download Optimized Image</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Get your resized and compressed image instantly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Generator Demo */}
            <div className="group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg border border-black/10 dark:border-white/10 hover:shadow-xl transition-all duration-300 ease-in-out">
              <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">How QR Generator Works</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group/step hover:scale-[1.02] transition-transform duration-200">
                  <span className="flex-none w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg font-bold text-gray-900 dark:text-white">1</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Enter Your URL</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Type or paste any URL, you want to convert into a QR code.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/step hover:scale-[1.02] transition-transform duration-200">
                  <span className="flex-none w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg font-bold text-gray-900 dark:text-white">2</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Customize Your QR Code</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Choose colors to match your needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/step hover:scale-[1.02] transition-transform duration-200">
                  <span className="flex-none w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg font-bold text-gray-900 dark:text-white">3</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Download & Share</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Get your QR code in PNG and SVG format ready to use anywhere.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Palette Generator Demo */}
            <div className="group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg border border-black/10 dark:border-white/10 hover:shadow-xl transition-all duration-300 ease-in-out">
              <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">How Color Palette Works</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group/step hover:scale-[1.02] transition-transform duration-200">
                  <span className="flex-none w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg font-bold text-gray-900 dark:text-white">1</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Pick Color</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Choose your base color to start with.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/step hover:scale-[1.02] transition-transform duration-200">
                  <span className="flex-none w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg font-bold text-gray-900 dark:text-white">2</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Select Harmony Type</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Select your preferred harmony type.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/step hover:scale-[1.02] transition-transform duration-200">
                  <span className="flex-none w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg font-bold text-gray-900 dark:text-white">3</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Export</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Download your perfect color palette.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PDF Merger Demo */}
            <div className="group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg border border-black/10 dark:border-white/10 hover:shadow-xl transition-all duration-300 ease-in-out">
              <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">How PDF Merger Works</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group/step hover:scale-[1.02] transition-transform duration-200">
                  <span className="flex-none w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg font-bold text-gray-900 dark:text-white">1</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Upload</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Add your PDF files to merge.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/step hover:scale-[1.02] transition-transform duration-200">
                  <span className="flex-none w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg font-bold text-gray-900 dark:text-white">2</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Order</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Arrange your PDFs as needed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/step hover:scale-[1.02] transition-transform duration-200">
                  <span className="flex-none w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg font-bold text-gray-900 dark:text-white">3</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Merge</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Download your combined PDF file.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Notification Signup Dialog - Only shown for signed out users */}
      <SignedOut>
        <Dialog open={showNotificationDialog} onOpenChange={setShowNotificationDialog}>
          <DialogContent className="sm:max-w-[425px] fixed bottom-4 right-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
            <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Stay Updated with the Latest Features
            </DialogTitle>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We&apos;re constantly improving to serve you better.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Sign up to receive timely notifications about new features, updates, and enhancements&mdash;directly to your inbox.
              </p>
              <div className="flex gap-3 mt-6">
                <SignUpButton mode="modal">
                  <button
                    className="flex-1 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Sign Up
                  </button>
                </SignUpButton>
                <button
                  onClick={() => setShowNotificationDialog(false)}
                  className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Maybe Later
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                We&apos;ll only hear from us when it matters.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </SignedOut>
    </div>
  );
}
