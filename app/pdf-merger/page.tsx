'use client';

import { useState } from 'react';
import PDFMergerLib from 'pdf-merger-js/browser';

export default function PDFMergerComponent() {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      // Only accept PDF files
      const pdfFiles = newFiles.filter(file => file.type === 'application/pdf');
      setFiles(prevFiles => [...prevFiles, ...pdfFiles]);
    }
  };

  const handleMergePDFs = async () => {
    if (files.length < 2) return;

    try {
      setIsProcessing(true);
      const merger = new PDFMergerLib();

      // Add all PDFs to merger in order
      for (const file of files) {
        await merger.add(file);
      }

      // Generate merged PDF blob
      const mergedPdf = await merger.saveAsBlob();
      const url = URL.createObjectURL(mergedPdf);
      setMergedPdfUrl(url);
      setShowModal(true);
    } catch (error) {
      console.error('Error merging PDFs:', error);
      alert('Error merging PDFs. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!mergedPdfUrl) return;

    const link = document.createElement('a');
    link.href = mergedPdfUrl;
    link.download = `merged_${new Date().toISOString().slice(0, 10)}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Cleanup
    URL.revokeObjectURL(mergedPdfUrl);
    setMergedPdfUrl('');
    setShowModal(false);
    setFiles([]);
  };

  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 mb-16 animate-[fadeIn_1s_ease-in,slideUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards]">
        Bindly
        <span className="block text-2xl md:text-3xl mt-2 text-gray-600 dark:text-gray-400">Merge PDFs with Ease</span>
      </h1>
      
      <main className="max-w-3xl mx-auto space-y-8">
        <div className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg border border-black/10 dark:border-white/10">
          <div className="space-y-6">
            {/* File Upload Area */}
            <div 
              className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center"
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const droppedFiles = Array.from(e.dataTransfer.files);
                const pdfFiles = droppedFiles.filter(file => file.type === 'application/pdf');
                setFiles(prevFiles => [...prevFiles, ...pdfFiles]);
              }}
            >
              <input
                type="file"
                id="pdf-files"
                multiple
                accept=".pdf,application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="pdf-files"
                className="block cursor-pointer space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-600 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  Click to upload PDFs
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  or drag and drop your files here
                </div>
              </label>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Selected Files ({files.length})
                </h3>
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {index + 1}.
                        </span>
                        <span className="text-gray-900 dark:text-white truncate">
                          {file.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {index > 0 && (
                          <button
                            onClick={() => {
                              const newFiles = [...files];
                              [newFiles[index], newFiles[index - 1]] = [newFiles[index - 1], newFiles[index]];
                              setFiles(newFiles);
                            }}
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                            title="Move up"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          </button>
                        )}
                        {index < files.length - 1 && (
                          <button
                            onClick={() => {
                              const newFiles = [...files];
                              [newFiles[index], newFiles[index + 1]] = [newFiles[index + 1], newFiles[index]];
                              setFiles(newFiles);
                            }}
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                            title="Move down"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        )}
                        <button
                          onClick={() => setFiles(files.filter((_, i) => i !== index))}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          title="Remove"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Merge Button */}
            <button
              onClick={handleMergePDFs}
              disabled={files.length < 2 || isProcessing}
              className={`w-full py-4 px-6 rounded-xl font-semibold transition-colors duration-200 ${files.length < 2 || isProcessing ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed' : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'}`}
            >
              {isProcessing ? 'Merging PDFs...' : 'Merge PDFs'}
            </button>
          </div>
        </div>
      </main>

      {/* Download Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl max-w-md w-full mx-4 space-y-6 text-center shadow-xl">
            <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">PDFs Merged Successfully!</h3>
            <p className="text-gray-600 dark:text-gray-400">Your PDFs have been combined into a single file.</p>
            <button
              onClick={handleDownload}
              className="w-full py-3 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              Download Merged PDF
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400 pt-4">Thank you for using our PDF Merger!</p>
          </div>
        </div>
      )}
    </div>
  );
}
