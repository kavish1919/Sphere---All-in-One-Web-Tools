'use client'

import { useState, useRef, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ImageResizer() {
  const [originalImage, setOriginalImage] = useState<string | null>(null)
  const [compressedImage, setCompressedImage] = useState<string | null>(null)
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [quality, setQuality] = useState<number>(80)
  const [showThankYou, setShowThankYou] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          setWidth(img.width)
          setHeight(img.height)
          setOriginalImage(e.target?.result as string)
          compressImage(e.target?.result as string)
        }
        img.src = e.target?.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  const compressImage = (imageSrc: string) => {
    const img = new Image()
    img.onload = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      // Set canvas dimensions
      canvas.width = width
      canvas.height = height

      // Draw image on canvas
      ctx.drawImage(img, 0, 0, width, height)

      // Get compressed image
      const compressed = canvas.toDataURL('image/jpeg', quality / 100)
      setCompressedImage(compressed)
    }
    img.src = imageSrc
  }

  useEffect(() => {
    if (originalImage) {
      compressImage(originalImage)
    }
  }, [width, height, quality])

  const handleDownload = () => {
    if (compressedImage) {
      const link = document.createElement('a')
      link.href = compressedImage
      link.download = 'compressed-image.jpg'
      link.click()
      setShowThankYou(true)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          setWidth(img.width)
          setHeight(img.height)
          setOriginalImage(e.target?.result as string)
          compressImage(e.target?.result as string)
        }
        img.src = e.target?.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">Slimmage</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Transform and optimize your images with ease</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Upload Image</h2>
            <label
              className="block border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer"
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                ref={fileInputRef}
              />
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">Drag and drop your image here, or click to select</p>
                <button
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Choose File
                </button>
              </div>
            </label>
          </div>

          {originalImage && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Original Image</h3>
                  <img src={originalImage} alt="Original" className="max-w-full rounded-lg shadow-md" />
                </div>
                <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Compressed Image</h3>
                  <img src={compressedImage || ''} alt="Compressed" className="max-w-full rounded-lg shadow-md" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Resize</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Width (px)</label>
                      <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(Number(e.target.value))}
                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Height (px)</label>
                      <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Quality</h3>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={quality}
                    onChange={(e) => setQuality(Number(e.target.value))}
                    className="w-full accent-blue-600 dark:accent-blue-400"
                  />
                  <div className="text-sm text-gray-600 dark:text-gray-400">{quality}%</div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 font-semibold shadow-lg"
                >
                  Download Compressed Image
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-gray-800 dark:text-gray-200">
              Thank You!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-4 text-gray-600 dark:text-gray-400">
            <p>Your image has been successfully downloaded.</p>
            <p className="mt-2">Feel free to process more images!</p>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setShowThankYou(false)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}