'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, Search, X } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { LiquidButton } from '@/components/animate-ui/components/buttons/liquid';
import { gsap } from 'gsap';

/* -------------------- ICON -------------------- */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579v-2.04c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.123-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6.009 0c2.29-1.552 3.296-1.23 3.296-1.23.654 1.649.242 2.872.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.803 5.624-5.475 5.921.43.37.814 1.102.814 2.222v3.293c0 .321.216.694.825.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

/* -------------------- SEARCH -------------------- */
const SearchBar = ({ isMobile = false }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();

  const searchableContent = [
    { title: 'Home', url: '/', description: 'Welcome to Bit-links' },
    { title: 'About', url: '/about', description: 'Learn more about our URL shortening service' },
    { title: 'Shorten', url: '/shorten', description: 'Shorten your long URLs quickly' },
    { title: 'Contact', url: '/contact', description: 'Get in touch with us' },
    { title: 'GitHub', url: 'https://github.com/Saim-Ali-Awan/bit-links', description: 'View source code' },
  ];

  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    if (!query.trim()) return setResults([]);
    const q = query.toLowerCase();
    setResults(
      searchableContent.filter(
        (i) => i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)
      )
    );
  }, [query]);

  useEffect(() => {
    if (open && inputRef.current) {
      gsap.fromTo(inputRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.25 });
    }
  }, [open]);

  const go = (url) => {
    setOpen(false);
    url.startsWith('http') ? window.open(url, '_blank') : router.push(url);
    setQuery('');
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm border border-white/40 transition-all"
      >
        <Search className="h-5 w-5 text-black" />
      </button>

      {open && (
        <div
          ref={inputRef}
          className={`${isMobile ? 'fixed inset-x-4 top-20 z-50' : 'absolute right-0 w-96 mt-3 z-50'}`}
        >
          <div className="relative">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages..."
              className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-gray-200 shadow-lg focus:outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-gray-100 rounded-full"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          {results.length > 0 && (
            <div className="mt-3 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              {results.map((r, i) => (
                <button
                  key={i}
                  onClick={() => go(r.url)}
                  className="w-full px-6 py-4 text-left hover:bg-purple-50 border-b last:border-0"
                >
                  <p className="font-semibold">{r.title}</p>
                  <p className="text-sm text-gray-500">{r.description}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* -------------------- NAVBAR -------------------- */
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="sticky top-6 z-50 hidden md:block">
        <div className="mx-auto w-[90%] max-w-6xl rounded-full bg-white/40 backdrop-blur-xl border border-white/30 shadow-lg px-6 py-3 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-black">
            Bit-links
          </Link>

          <nav className="flex gap-6 font-medium text-black">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/shorten">Shorten</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <SearchBar />
            <Link href="/shorten">
              <LiquidButton size="lg">Try Now</LiquidButton>
            </Link>
            <Link href="https://github.com/Saim-Ali-Awan/bit-links" target="_blank">
              <LiquidButton size="lg" className="flex gap-2">
                <GitHubIcon /> GitHub
              </LiquidButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <div className="sticky top-4 z-50 md:hidden">
          <div className="mx-auto w-[90%] rounded-full bg-white/40 backdrop-blur-xl border border-white/30 shadow-lg px-5 py-3 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold text-black">
              Bit-links
            </Link>

            <div className="flex items-center gap-2">
              <SearchBar isMobile />
              <SheetTrigger asChild>
                <button className="p-2 rounded-full bg-white/30 border border-white/40">
                  <Menu className="h-6 w-6 text-black" />
                </button>
              </SheetTrigger>
            </div>
          </div>
        </div>

        <SheetContent side="right" className="fixed top-0 right-0 h-screen w-[280px] bg-white p-5 flex flex-col">
          <div className="flex flex-col h-full">
            <Link href="/" className="text-xl font-bold mb-6">Bit-links</Link>

            <nav className="flex flex-col gap-4 text-lg font-medium mb-6">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/shorten">Shorten</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              <Link href="/shorten">
                <LiquidButton className="w-full">Try Now</LiquidButton>
              </Link>
              <Link href="https://github.com/Saim-Ali-Awan/bit-links" target="_blank">
                <LiquidButton className="w-full flex gap-2 justify-center">
                  <GitHubIcon /> GitHub
                </LiquidButton>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
