import React from 'react';

const images = [
  // Replace with your image paths in the public/images directory
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
  '/images/image7.jpg',
  '/images/image8.jpg',
  '/images/image9.jpg',
  '/images/image10.jpg',
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img src={src} alt={`Gallery item ${index + 1}`} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
