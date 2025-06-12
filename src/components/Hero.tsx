import React from 'react';
import { ArrowRight, BarChart3, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="h-4 w-4" />
            <span>Intelligente Transportlösungen</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-blue-600">BestModal</span> – Ihre Plattform für{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              multimodale Transporttarife
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Eine intelligente Plattform zur Transparenz, Optimierung und Vergleichbarkeit
            von Transporttarifen im intermodalen Verkehr. Ob LKW, Bahn, Binnenschiff oder 
            kombinierte Routen – BestModal vereint alle Verkehrsträger in einem digitalen System.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Kostenlose Demo</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="group bg-white text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold text-lg border border-gray-200 hover:border-gray-300 flex items-center space-x-2"
            >
              <BarChart3 className="h-5 w-5" />
              <span>Funktionen entdecken</span>
            </a>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Kostentransparenz</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">Multimodal</div>
                <div className="text-gray-600">Alle Verkehrsträger</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">Echtzeit</div>
                <div className="text-gray-600">Preisauswertungen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;