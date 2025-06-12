import React from 'react';
import { 
  Truck, 
  Train, 
  Settings, 
  Users, 
  Share2,
  Building2
} from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: Truck,
      title: 'Logistiker & Spediteure',
      description: 'Auswahl des besten Preises je Transportauftrag – mit Zugriff auf eigene Einkaufstarife.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Train,
      title: 'Bahn- und Binnenschifffahrtsanbieter',
      description: 'Darstellung kombinierter Transportlösungen mit LKW-Zubringern.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Settings,
      title: 'Transportmanagementsysteme',
      description: 'Integration in bestehende Systeme zur dynamischen Preisermittlung.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Kundenberatung & Vertrieb',
      description: 'Schnell kalkulierte Angebote mit vollständiger Preisaufschlüsselung.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Share2,
      title: 'Plattform-Nutzer',
      description: 'Teilen Sie Ihre Verkaufstarife gezielt mit Partnerunternehmen – oder lassen Sie sich direkt von Transporteuren freischalten.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Typische Anwendungsfälle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BestModal unterstützt verschiedene Branchen und Anwendungsszenarien für optimale Transportlösungen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${useCase.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <useCase.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {useCase.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <Building2 className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Für jede Unternehmensgröße geeignet
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Von kleinen Speditionen bis zu internationalen Logistikkonzernen – 
            BestModal skaliert mit Ihren Anforderungen und wächst mit Ihrem Unternehmen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCases;