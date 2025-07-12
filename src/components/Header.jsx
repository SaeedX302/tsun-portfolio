import React, { useState } from 'react';
import { Book, X } from 'lucide-react';
import Changelog from './Changelog';

const Header = () => {
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);

  return (
    <header className="bg-gray-900/50 backdrop-blur-xs sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">TSun</h1>
        <button
          onClick={() => setIsChangelogOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Book size={20} />
          Changelog
        </button>
      </div>
      {isChangelogOpen && <Changelog onClose={() => setIsChangelogOpen(false)} />}
    </header>
  );
};

export default Header;
