import React from 'react';
import { 
  BarChart3, 
  Eye, 
  Target, 
  MapPin, 
  Database, 
  Users, 
  Zap,
  Euro
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Multimodale Vergleichbarkeit',
      description: 'Vergleichen Sie die Bestpreise verschiedener Partner und Subunternehmer – auch kombinierbare Tarife (Bahn/Barge mit Truck) – anhand der Routen, Containerarten und Gewichtsklassen.',
      color: 'bg-blue-500'
    },
    {
      icon: Eye,
      title: 'Transparente Kostenstruktur',
      description: 'Tarife, Zuschläge, Mindestpreise, Mautkosten, Pick-up/Drop off und Kleinwasserzuschlag werden klar aufgeschlüsselt – für maximale Kostentransparenz.',
      color: 'bg-teal-500'
    },
    {
      icon: Target,
      title: 'Zielgerichtetes Procurement',
      description: 'Schreiben Sie kurzerhand Spezialraten oder NAC-Raten (Named Account) aus und erhalten Sie direkt eingespielte Angebote.',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Intelligente Distanzermittlung per API',
      description: 'Integrierte Schnittstellen zu PTV, EWS u. a. liefern exakte Strecken- und Mautkilometer zur präzisen Preisberechnung, sowie CO² Ermittlung bei Map&Guide Integration.',
      color: 'bg-purple-500'
    },
    {
      icon: Database,
      title: 'Flexibles Datenmodell',
      description: 'BestModal ist auf große Datenmengen, komplexe Tarife und individuelle Transportkonzepte ausgelegt – skalierbar für jede Unternehmensgröße.',
      color: 'bg-orange-500'
    },
    {
      icon: Users,
      title: 'Zugriffssteuerung',
      description: 'Geben Sie auch Ihren Partnern oder Büros im Ausland Zugriff auf Ihre Verkaufstarife – so kann z. B. Mexiko in wenigen Sekunden europäische Hinterlandverbindungen quotieren.',
      color: 'bg-indigo-500'
    },
    {
      icon: Zap,
      title: 'Hoher Automatisierungsgrad',
      description: 'Automatische Anzeige von eventuell anfallenden Zusatzkosten des Anbieters, täglichen Kleinwasserzuschlags (KWZ) und automatische Dieselupdates.',
      color: 'bg-red-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ihre Vorteile auf einen Blick
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BestModal bietet umfassende Funktionen für optimale Transportlösungen und maximale Effizienz in der Logistik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-6`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;