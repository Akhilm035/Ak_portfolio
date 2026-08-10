import React from 'react';
import { ArrowUp, Mail, Globe, Share2, ExternalLink } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="about" className="w-full bg-slate-900 text-white py-16 px-6 md:px-12 lg:px-16 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border-b border-slate-800 pb-12">
        
        {/* Left Branding */}
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
            AKHIL MOHANAN
          </h3>
          <p className="text-slate-400 text-sm max-w-sm">
            Product Designer · UI/UX Designer · UX Tester · AI-Assisted Web Builder based in Kannur, Kerala.
          </p>
        </div>

        {/* Social / Contact Links */}
        <div className="flex items-center space-x-4">
          <a
            href="mailto:akhil.designer@example.com"
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            aria-label="Email Akhil"
            title="Email Akhil"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Globe size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <ExternalLink size={18} />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            aria-label="Portfolio Links"
            title="Portfolio Links"
          >
            <Share2 size={18} />
          </a>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <span>© {new Date().getFullYear()} Akhil Mohanan. All rights reserved.</span>
        
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 text-slate-300 hover:text-sky-400 font-bold uppercase tracking-wider transition-colors cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
