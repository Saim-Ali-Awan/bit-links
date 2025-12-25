'use client';

import React from 'react';
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { HighlightText } from "@/components/animate-ui/components/texts/highlight";
import Link from "next/link";
import { Zap, Palette, Shield, Link2, BarChart3 } from "lucide-react";

const About = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 py-32 md:py-40">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-white [background:radial-gradient(125%_125%_at_80%_10%,#fff_65%,#63e_100%)]" />

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 text-gray-900">
          <HighlightText
            text="About Bit Links"
            style={{
              backgroundImage: "linear-gradient(120deg, #D3C4FA, #CAB9F9, #6A82FB)",
              backgroundSize: "60% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left center",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Your trusted companion for creating short, memorable, and shareable links.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Link2 className="w-6 h-6 text-[#A855F7]" />
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            At Bit Links, we believe that every link should be simple, clean, and easy to share. 
            We're dedicated to providing a fast, reliable, and user-friendly URL shortening service 
            that helps you connect with your audience more effectively.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-6 h-6 text-[#A855F7]" />
            <h2 className="text-2xl font-bold text-gray-900">Why Choose Us?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We combine simplicity with powerful features. Whether you're a content creator, 
            marketer, or business owner, Bit Links makes it easy to create custom short URLs 
            that reflect your brand and track your link performance.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Zap className="w-8 h-8 text-[#A855F7]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Lightning Fast</h3>
            <p className="text-gray-700">
              Create shortened URLs in seconds with our optimized platform.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Palette className="w-8 h-8 text-[#A855F7]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Custom URLs</h3>
            <p className="text-gray-700">
              Personalize your links with custom aliases that match your brand.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Shield className="w-8 h-8 text-[#A855F7]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Secure & Reliable</h3>
            <p className="text-gray-700">
              Your links are safe with us. We prioritize security and uptime.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 border border-white/50 shadow-xl text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Join thousands of users who trust Bit Links for their URL shortening needs.
        </p>
        <Link href="/shorten">
          <LiquidButton size="lg">
            Start Shortening
          </LiquidButton>
        </Link>
      </div>
    </main>
  );
};

export default About;