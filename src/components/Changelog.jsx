import React from 'react';
import { X } from 'lucide-react';

const changelogData = [
  {
    version: '1.0.0',
    date: '2025-07-12',
    author: '〆༯𝙎คAEED✘🫀',
    changes: [
      'Initial release of the TSun Portfolio website.',
      'Added a stunning gallery with 10 images.',
      'Implemented a responsive design for all devices.',
      'Included a changelog modal.',
      'Added a footer with social media and other platform links.',
    ],
  },
];

const Changelog = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Changelog 📜</h2>
          <button onClick={onClose} className="hover:text-gray-400">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-6">
          {changelogData.map((entry, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold">
                Version {entry.version} ({entry.date})
              </h3>
              <p className="text-sm text-gray-400">by {entry.author}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {entry.changes.map((change, i) => (
                  <li key={i}>{change}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Changelog;
