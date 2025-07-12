import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fadeIn">TSun Portfolio 🎨</h1>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
