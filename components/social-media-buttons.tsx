'use client';

import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function SocialMediaButtons() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      <a
        href="https://www.facebook.com/UVABatten"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all duration-300 hover:scale-110"
        aria-label="Facebook"
      >
        <Facebook className="w-6 h-6 text-white" />
      </a>
      <a
        href="https://www.instagram.com/uvabatten"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all duration-300 hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram className="w-6 h-6 text-white" />
      </a>
      <a
        href="https://www.linkedin.com/school/uvabatten"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all duration-300 hover:scale-110"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
