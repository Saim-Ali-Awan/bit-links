'use client';

import React from 'react';
import { HighlightText } from "@/components/animate-ui/components/texts/highlight";
import { Mail, Bug, Lightbulb, HelpCircle, Handshake } from "lucide-react";

const Contact = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 py-32 md:py-40">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-white [background:radial-gradient(125%_125%_at_80%_10%,#fff_65%,#63e_100%)]" />

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 text-gray-900">
          <HighlightText
            text="Get In Touch"
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
          Have questions or feedback? We'd love to hear from you!
        </p>
      </div>

      <div className="max-w-2xl mx-auto w-full space-y-6">
        {/* Email Card */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-[#A855F7]" />
            <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
          </div>
          <p className="text-gray-700 mb-3">
            Drop us an email and we'll get back to you as soon as possible.
          </p>
          <a 
            href="mailto:saimalimalikawan786@gmail.com"
            className="text-[#6A82FB] font-semibold hover:underline break-all"
          >
            saimalimalikawan786@gmail.com
          </a>
        </div>

        {/* Info Card */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Why Contact Us?</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="mt-1">
                <Bug className="w-5 h-5 text-[#A855F7]" />
              </div>
              <span>Report issues or bugs</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1">
                <Lightbulb className="w-5 h-5 text-[#A855F7]" />
              </div>
              <span>Request new features</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1">
                <HelpCircle className="w-5 h-5 text-[#A855F7]" />
              </div>
              <span>General inquiries</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1">
                <Handshake className="w-5 h-5 text-[#A855F7]" />
              </div>
              <span>Partnership opportunities</span>
            </li>
          </ul>
        </div>

        {/* Response Time Card */}
        <div className="bg-gradient-to-br from-[#A855F7] to-[#6A82FB] rounded-3xl p-8 text-white shadow-lg">
          <h3 className="text-xl font-bold mb-3">Quick Response</h3>
          <p className="text-white/90">
            We typically respond within 24-48 hours. Your feedback helps us improve Bit Links!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;