'use client';

import { cn } from "@/lib/utils";
import { HighlightText } from "@/components/animate-ui/components/texts/highlight";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import {
  AvatarGroup,
  AvatarGroupTooltip,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/animate-ui/components/animate/avatar-group";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { ArrowRight, Link2, Zap, Shield } from "lucide-react";

const BackgroundFont = localFont({
  src: "./fonts/PlayfairDisplay-ExtraBold.ttf",
  variable: "--font-playfair-display",
});

const AVATARS = [
  { src: "https://pbs.twimg.com/profile_images/1948770261848756224/oPwqXMD6_400x400.jpg", fallback: "SK", tooltip: "Skyleen" },
  { src: "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg", fallback: "CN", tooltip: "Radix UI" },
  { src: "https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg", fallback: "AW", tooltip: "Adam Wathan" },
  { src: "https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg", fallback: "GR", tooltip: "Guillermo Rauch" },
  { src: "https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_400x400.jpg", fallback: "JH", tooltip: "Jhey" },
  { src: "https://pbs.twimg.com/profile_images/1927474594102784000/Al0g-I6o_400x400.jpg", fallback: "DH", tooltip: "David Haz" },
];

const FEATURES = [
  { icon: Zap, title: "Lightning Fast", description: "Create shortened URLs instantly" },
  { icon: Link2, title: "Custom Links", description: "Personalize your URLs" },
  { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-white [background:radial-gradient(125%_125%_at_80%_10%,#fff_65%,#63e_100%)]" />

      {/* Background Typography */}
      <h1
        className={cn(
          "pointer-events-none absolute left-1/2 -translate-x-1/2",
          "top-52 md:top-64 lg:top-56",
          "text-[clamp(4rem,28vw,8rem)] md:text-[200px]",
          "font-extrabold text-black/5 select-none whitespace-nowrap",
          BackgroundFont.className
        )}
      >
        Bit-links
      </h1>

      {/* Hero Section */}
      <section className="relative z-10 mt-32 md:mt-40 mx-auto flex w-[90%] max-w-6xl flex-col items-center justify-center gap-8">
        {/* Main Heading */}
        <div className="text-center max-w-3xl space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold flex flex-col text-gray-900 leading-tight">
            Shorten URLs with
            <HighlightText
              text="Professional Precision"
              style={{
                backgroundImage: "linear-gradient(120deg, #D3C4FA, #CAB9F9, #6A82FB)",
                backgroundSize: "60% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                display: "flex", justifyContent: "center", alignItems: "center",
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
         Transform long URL's into short, memorable links with ease and style.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row sm:flex-row items-center justify-center gap-4 mt-22 lg:mt-34">
            <Link href="/shorten">
              <LiquidButton size="lg" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </LiquidButton>
            </Link>
            <Link href="/about">
              <LiquidButton size="lg" variant="outline" className="border-2 border-gray-300">
                Learn More
              </LiquidButton>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 mt-12 w-full max-w-3xl">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#A855F7]">10K+</div>
            <div className="text-sm md:text-base text-gray-600 mt-1">Links Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#A855F7]">5K+</div>
            <div className="text-sm md:text-base text-gray-600 mt-1">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#A855F7]">99.9%</div>
            <div className="text-sm md:text-base text-gray-600 mt-1">Uptime</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 w-full">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-gradient-to-br from-[#D3C4FA] to-[#A855F7] rounded-xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trusted Partners Section */}
        <div className="mt-20 text-center max-w-2xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Trusted by People
          </h3>
          <p className="text-gray-600 mb-6">
            Join thousands of professionals who rely on Bit Links for their URL management needs.
          </p>

          {/* Avatars */}
          <AvatarGroup className="justify-center">
            {AVATARS.map((avatar, index) => (
              <Avatar key={index}>
                <AvatarImage src={avatar.src} />
                <AvatarFallback>{avatar.fallback}</AvatarFallback>
                <AvatarGroupTooltip>{avatar.tooltip}</AvatarGroupTooltip>
              </Avatar>
            ))}
          </AvatarGroup>
        </div>
        <div className="mb-16">

        </div>
      </section>
    </main>
  );
}