'use client';

import Image from "next/image";
import { TrendingUp } from 'lucide-react';
import TrendingSidebar from './TrendingSidebar';
import FearGreedIndex from './FearGreedIndex';
import LongShortRatio from './LongShortRatio';

interface NavbarProps {
  isTrendingOpen: boolean;
  setIsTrendingOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isTrendingOpen, setIsTrendingOpen }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#27272a] bg-[#18181b]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/mush.png"
              alt="MushNews"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-[#ffa07a] to-[#ff7f50] bg-clip-text text-transparent">
                MushNews
              </h1>
              <p className="text-xs text-[#71717a]">Web3 News Explorer</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-[#1f1f1f]/50 rounded-md border border-[#27272a] divide-x divide-[#27272a]">
              <FearGreedIndex />
              <LongShortRatio />
              <a
                href="https://github.com/mush-support/mush-news"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1.5 text-[#a1a1aa] hover:text-white hover:bg-[#2d2d2d] transition-colors duration-200"
                aria-label="GitHub Repository"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-4 h-4"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            {/* Trending Button */}
            <button
              data-trending-button
              onClick={() => setIsTrendingOpen(!isTrendingOpen)}
              className={`
                flex items-center gap-2 px-3 py-1.5 rounded-md
                border border-[#27272a]
                ${isTrendingOpen 
                  ? 'bg-[#1f1f1f] text-white border-[#323232]' 
                  : 'bg-[#1f1f1f]/50 text-[#a1a1aa] hover:bg-[#2d2d2d] hover:text-white hover:border-[#323232]'
                }
                transition-all duration-200
              `}
            >
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Trending</span>
            </button>
          </div>
        </div>
      </div>

      <TrendingSidebar 
        isOpen={isTrendingOpen} 
        onClose={() => setIsTrendingOpen(false)} 
      />
    </nav>
  );
} 