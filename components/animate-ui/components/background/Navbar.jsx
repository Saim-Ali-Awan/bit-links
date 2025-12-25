'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { LiquidButton } from '@/components/animate-ui/components/buttons/liquid';

/* -------------------- ICON -------------------- */
const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.123-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.649.242 2.872.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.803 5.624-5.475 5.921.43.37.814 1.102.814 2.222 0 1.606-.014 2.902-.014 3.293 0 .321.216.694.825.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

/* -------------------- LINKS -------------------- */
const NavLinks = () => (
  <>
    <Link href="/" className="hover:opacity-70 transition">Home</Link>
    <Link href="/about" className="hover:opacity-70 transition">About</Link>
    <Link href="/shorten" className="hover:opacity-70 transition">Shorten</Link>
    <Link href="/contact" className="hover:opacity-70 transition">Contact</Link>
  </>
);

/* -------------------- NAVBAR -------------------- */
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // Close drawer on route change
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="sticky top-6 z-30 hidden md:block">
        <div className="mx-auto w-[90%] max-w-6xl rounded-full bg-white/40 backdrop-blur-xl border border-white/30 shadow-lg px-6 py-3 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-black">
            Bit-links
          </Link>

          <nav className="flex items-center gap-6 text-black font-medium">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/shorten">
              <LiquidButton size="lg">Try Now</LiquidButton>
            </Link>

            <Link href="https://github.com/Saim-Ali-Awan/bit-links" target="_blank" rel="noopener noreferrer">
              <LiquidButton size="lg" className="flex items-center gap-2">
                <GitHubIcon />
                GitHub
              </LiquidButton>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MOBILE NAVBAR ================= */}
      <Sheet open={open} onOpenChange={setOpen}>
        {/* Top bar */}
        <div className="sticky top-4 z-30 md:hidden">
          <div className="mx-auto w-[90%] rounded-full bg-white/40 backdrop-blur-xl border border-white/30 shadow-lg px-5 py-3 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold text-black">
              Bit-links
            </Link>

            <SheetTrigger asChild>
              <button className="p-2 rounded-full hover:bg-black/10 transition">
                <Menu className="h-6 w-6 text-black" />
              </button>
            </SheetTrigger>
          </div>
        </div>

        {/* Drawer */}
        <SheetContent
          side="right"
          className="
            fixed top-0 right-0
            h-screen
            w-[280px] max-w-[80vw]
            bg-white
            backdrop-blur-xl
            border-l
            shadow-xl
            p-5
            flex flex-col
          "
        >
          <Link href="/" className="text-xl font-bold text-black mb-6">
            Bit-links
          </Link>

          <nav className="flex flex-col gap-4 text-lg font-medium text-black mb-6">
            <NavLinks />
          </nav>

          <div className="mt-auto flex flex-col gap-3">
            <Link href="/shorten">
              <LiquidButton size="lg" className="w-full">
                Try Now
              </LiquidButton>
            </Link>

            <Link href="https://github.com/Saim-Ali-Awan/bit-links" target="_blank" rel="noopener noreferrer">
              <LiquidButton
                size="lg"
                className="w-full flex items-center justify-center gap-2"
              >
                <GitHubIcon />
                GitHub
              </LiquidButton>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
