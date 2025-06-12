import React, { useState } from 'react';
import { Menu, X, Truck } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Funktionen', href: '#features' },
    { name: 'Anwendungsfälle', href: '#use-cases' },
    { name: 'Technologie', href: '#technology' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">BestModal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Demo anfragen
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo anfragen
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;