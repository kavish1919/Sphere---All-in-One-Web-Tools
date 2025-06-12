"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog } from '@/components/ui/dialog';


export default function WordoraPage() {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const topics = [
    "Tenses",
    "Reading",
    "Sentence Structure",
    "Subject-Verb Agreement",
    "Articles & Determiners",
    "Vocabulary",
    "Conversation Practice",
    "Error Correction"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-pink-600">Wordora</span>
        </h1>
        <p className="mt-3 text-2xl">
          Your Daily Dose of English Confidence
        </p>
        
        <button 
          onClick={() => setIsDialogOpen(true)}
          className="mt-8 px-8 py-4 rounded-lg bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold text-xl hover:opacity-90 transition-opacity shadow-lg"
        >
          Get Started
        </button>
        
        {isDialogOpen && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-opacity duration-300">
              <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4 relative animate-in fade-in zoom-in-95">
                <button 
                  onClick={() => setIsDialogOpen(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <h2 className="text-2xl font-bold text-pink-600 mb-6">Choose a Topic</h2>
                <ul className="space-y-4">
                  {topics.map((topic) => (
                    <li key={topic}>
                      <button 
                        className="w-full py-3 px-4 bg-pink-50 hover:bg-pink-100 rounded-lg text-left transition-colors"
                        onClick={() => {
                          if (topic === 'Tenses' || topic === 'Reading') {
                            router.push(`/wordora/${topic.toLowerCase().replace(/[^a-z]+/g, '-')}`);
                          }
                          setIsDialogOpen(false);
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <span>{topic}</span>
                          {topic !== 'Tenses' && topic !== 'Reading' && (
                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Dialog>
        )}
      </main>
    </div>
  );
}