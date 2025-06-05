"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

interface Tool {
  name: string;
  path: string;
  status: 'active' | 'coming soon' | 'in the pipeline';
}

const allTools: Tool[] = [
  { name: 'Slimmage - Image Resize and Compress', path: '/image-resizer', status: 'active' },
  { name: 'Whispr - Audio to Text Converter', path: '#', status: 'coming soon' },
  { name: 'QReate - QR Code Generator', path: '/qr-generator', status: 'active' },
  { name: 'Tintella - Color Palette Generator', path: '/color-palette', status: 'active' },
  { name: 'Bindly - PDF Merger', path: '/pdf-merger', status: 'active' },
  { name: 'Datanaut - Personal Data Analyst', path: '#', status: 'in the pipeline' },
  { name: 'Talkie - Your Personalized Chatbot', path: '#', status: 'in the pipeline' },
  { name: 'Secrets are being coded', path: '#', status: 'in the pipeline' },
];

const ToolSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = allTools.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTools(results);
      setIsOpen(true);
    } else {
      setFilteredTools([]);
      setIsOpen(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search tools..."
          className="pl-10 pr-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => searchTerm.length > 0 && setIsOpen(true)}
        />
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <Link key={tool.name} href={tool.path} onClick={() => setIsOpen(false)}>
                <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex justify-between items-center">
                  <span className="text-gray-900 dark:text-white">{tool.name}</span>
                  {tool.status !== 'active' && (
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {tool.status === 'coming soon' ? 'Coming Soon' : 'In the Pipeline'}
                    </span>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500 dark:text-gray-400">
              No tools found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ToolSearch;