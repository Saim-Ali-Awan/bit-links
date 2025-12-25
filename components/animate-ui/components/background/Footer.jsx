'use client';

import React from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-sidebar text-sidebar-foreground border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between gap-8">

                {/* Branding */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary mb-1">Bit-Links</h2>
                    <p className="text-muted-foreground max-w-sm">
                        Your trusted URL shortener
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="hover:opacity-70 transition-colors">Home</a>
                        </li>
                        <li>
                            <a href="/shorten" className="hover:opacity-70 transition-colors">Shorten URL</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:opacity-70 transition-colors">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:opacity-70 transition-colors">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">Follow Us</h3>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sidebar-foreground hover:opacity-70 transition-colors"
                        >
                            <FaGithub size={22} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sidebar-foreground hover:opacity-70 transition-colors"
                        >
                            <FaTwitter size={22} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sidebar-foreground hover:opacity-70 transition-colors"
                        >
                            <FaInstagram size={22} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider and Copyright */}
            <div className="pt-4 text-center text-muted-foreground text-sm border-t border-border">
                © {new Date().getFullYear()} Bit-Links. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
