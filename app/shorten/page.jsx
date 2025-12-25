'use client';

import React, { useState, useEffect } from 'react';
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { HighlightText } from "@/components/animate-ui/components/texts/highlight";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shorten = () => {
  const [url, setUrl] = useState('');
  const [shorten, setShorten] = useState('');
  const [savedLinks, setSavedLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch links from API
  const fetchLinks = async () => {
    try {
      const res = await fetch('/api/links');
      const data = await res.json();
      if (data.success) setSavedLinks(data.links);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  const handleSubmit = async () => {
    if (!url || !shorten) {
      toast.error('Please fill both fields');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, shorturl: shorten }),
      });
      const data = await res.json();

      if (data.success) {
        toast.success('Short URL created!');
        setUrl('');
        setShorten('');
        setSavedLinks(prev => [data.link, ...prev]); // show newest on top
      } else {
        toast.error(data.message || 'Failed');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch('/api/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();

      if (data.success) {
        toast.success('Deleted!');
        setSavedLinks(prev => prev.filter(link => link._id !== id));
      }
    } catch {
      toast.error('Delete failed');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center pt-28 px-4">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl font-semibold mb-10 text-center text-gray-900">
        <HighlightText
          text="Shorten Your URL"
          style={{
            backgroundImage: "linear-gradient(120deg, #D3C4FA, #CAB9F9, #6A82FB)",
            backgroundSize: "40% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            padding: "0.25rem 0.75rem",
            borderRadius: "9999px",
          }}
        />
      </h2>

      {/* Form */}
      <div className="w-full max-w-2xl flex flex-col gap-6 items-center mb-12">
        <input
          type="text"
          placeholder="Paste your link here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#B69DF7] shadow-md"
        />
        <input
          type="text"
          placeholder="Preferred short URL."
          value={shorten}
          onChange={(e) => setShorten(e.target.value)}
          className="w-full px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#B69DF7] shadow-md"
        />
        <LiquidButton onClick={handleSubmit} size="lg" disabled={loading} className="px-12">
          {loading ? 'Creating...' : 'Shorten'}
        </LiquidButton>
      </div>

      {/* Links */}
      <div className="w-full max-w-4xl px-4">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          {savedLinks.length > 0 ? 'Your Links' : 'No Links Yet'}
        </h3>

        <div className="space-y-5">
          {savedLinks.map(link => (
            <div
              key={link._id}
              className="bg-white/70 backdrop-blur border border-white/80 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row gap-6 justify-between"
            >
              <div className="min-w-0">
                <p className="text-sm text-gray-500 mb-1">Original</p>
                <p className="break-all text-gray-800 font-medium">{link.url}</p>

                <p className="text-sm text-gray-500 mt-4 mb-1">Short</p>
                <a
                  href={`/${link.shorturl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-semibold underline break-all"
                >
                  /{link.shorturl}
                </a>

                <p className="text-xs text-gray-400 mt-3">
                  Created {new Date(link.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex items-start">
                <LiquidButton
                  size="lg"
                  variant="default"
                  onClick={() => handleDelete(link._id)}
                >
                  Delete
                </LiquidButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shorten;
