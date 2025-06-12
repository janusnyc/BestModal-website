import React from 'react';
import { Truck, Globe, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">BestModal</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Ihre intelligente Plattform für multimodale Transporttarife. 
              Mehr Transparenz, mehr Profit, mehr Geschäft.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.bestmodal.de" 
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-4 w-4" />
                <span>www.bestmodal.de</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Funktionen
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">
                  Anwendungsfälle
                </a>
              </li>
              <li>
                <a href="#technology" className="text-gray-300 hover:text-white transition-colors">
                  Technologie
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2">
              <a 
                href="mailto:implementation@bestmodal.de" 
                className="text-gray-300 hover:text-white transition-colors block"
              >
                implementation@bestmodal.de
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Demo anfragen</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 BestModal. Powered by{' '}
            <a 
              href="https://www.acceltra.de" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acceltra GmbH
            </a>
          </div>
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            Mehr Transparenz. Mehr Profit. Mehr Geschäft.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;