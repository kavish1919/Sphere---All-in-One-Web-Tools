'use client';

import { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QRGenerator() {
  const [url, setUrl] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [qrColor, setQrColor] = useState('#000000');

  const handleGenerate = () => {
    if (!url) return;
    setShowModal(true);
  };

  const downloadQR = (format: 'svg' | 'png') => {
    const svg = document.getElementById('qr-code')?.querySelector('svg');
    if (!svg) return;

    if (format === 'svg') {
      const svgData = new XMLSerializer().serializeToString(svg);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(svgBlob);
      link.download = 'qr-code.svg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = pngFile;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      img.src = 'data:image/svg+xml;base64,' + btoa(new XMLSerializer().serializeToString(svg));
    }
  };

  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 mb-16 animate-[fadeIn_1s_ease-in,slideUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards]">
        QReate
        <span className="block text-2xl md:text-3xl mt-2 text-gray-600 dark:text-gray-400">Transform Links into QR Codes Instantly</span>
      </h1>
      
      <main className="max-w-3xl mx-auto space-y-8">
        <div className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg border border-black/10 dark:border-white/10">
          <div className="space-y-6">
            <div className="space-y-4">
              <label htmlFor="url" className="block text-lg font-semibold text-gray-900 dark:text-white">
                Enter URL
              </label>
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
              />
            </div>

            <div className="space-y-4">
              <label htmlFor="color" className="block text-lg font-semibold text-gray-900 dark:text-white">
                QR Code Color
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  id="color"
                  value={qrColor}
                  onChange={(e) => setQrColor(e.target.value)}
                  className="w-12 h-12 rounded-lg cursor-pointer"
                />
                <input
                  type="text"
                  value={qrColor.toUpperCase()}
                  onChange={(e) => setQrColor(e.target.value)}
                  className="flex-1 p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
                  placeholder="#000000"
                />
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!url}
              className={`w-full py-4 px-6 rounded-xl font-semibold transition-colors duration-200 ${!url ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed' : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'}`}
            >
              Generate QR Code
            </button>
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-lg w-full space-y-8 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div id="qr-code" className="flex justify-center bg-white p-8 rounded-2xl">
              <QRCode
                value={url}
                size={256}
                fgColor={qrColor}
                style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                viewBox="0 0 256 256"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => downloadQR('svg')}
                className="flex-1 py-3 px-6 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                Download SVG
              </button>
              <button
                onClick={() => downloadQR('png')}
                className="flex-1 py-3 px-6 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
              >
                Download PNG
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Thank you for using our QR Code Generator! We hope it helps streamline your digital connections.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}