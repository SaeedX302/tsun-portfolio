import React from 'react';
import { Github, Twitter, Instagram, Send, Film, Youtube, Link, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-xs mt-16 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">My Socials 📱</h3>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/SaeedX302" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><Github /></a>
            <a href="https://x.com/saeedx300" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><Twitter /></a>
            <a href="https://www.instagram.com/saeedxdie" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><Instagram /></a>
            <a href="https://t.me/saeedxdie" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><Send /></a>
            <a href="https://www.tiktok.com/@saeedxdie" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><Film /></a>
            <a href="https://www.youtube.com/@TsunMusicOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><Youtube /></a>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">My Other Platforms 🌐</h3>
          <div className="flex justify-center flex-wrap gap-4">
            <a href="https://linktr.ee/saeedxdie" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><Link /> Linktree</a>
            <a href="https://gravatar.com/cheerfuld27b01881a" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><Globe /> Gravatar</a>
            <a href="https://tsungpt2.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">TSunGpt-2</a>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">Jaun Elia's Poetry 📜</h3>
          <p className="text-lg italic">"Jo guzaari na ja saki hum se, Hum ne woh zindagi guzaari hai."</p>
        </div>
        <p className="text-gray-500">Made with 🫀 by 〆༯𝙎คAEED✘🫀</p>
      </div>
    </footer>
  );
};

export default Footer;
