'use client';

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Navbar to prevent initialization issues
const Navbar = dynamic(
  () => import("@/components/animate-ui/components/background/Navbar"),
  { ssr: false }
);

export default function ClientLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen">
        {children}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="transition-opacity duration-300 opacity-100">
        {children}
      </div>
    </>
  );
}