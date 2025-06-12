import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;