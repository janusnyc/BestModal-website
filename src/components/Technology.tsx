import React from 'react';
import { 
  Globe, 
  Database, 
  Shield, 
  MapPin,
  CheckCircle,
  Server
} from 'lucide-react';

const Technology = () => {
  const techFeatures = [
    {
      icon: Globe,
      title: 'Webbasierte Anwendung',
      description: 'Keine Installation erforderlich – arbeiten Sie von überall aus mit Ihrem Browser.'
    },
    {
      icon: Database,
      title: 'API-Schnittstellen & CSV-Import',
      description: 'Nahtlose Integration in bestehende Systeme und einfacher Datenimport.'
    },
    {
      icon: Shield,
      title: 'Rechte- & Rollensystem',
      description: 'Granulare Zugriffskontrolle für verschiedene Benutzergruppen und Funktionen.'
    },
    {
      icon: MapPin,
      title: 'DSGVO-konforme Datenhaltung',
      description: 'Serverstandort Deutschland – Ihre Daten bleiben sicher und rechtskonform.'
    }
  ];

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technologie & Sicherheit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Moderne Technologie und höchste Sicherheitsstandards für Ihre Transportdaten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {techFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200"
            >
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <Server className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Infrastructure
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unsere Plattform basiert auf bewährten Technologien und bietet höchste Verfügbarkeit, 
              Skalierbarkeit und Sicherheit für Ihre geschäftskritischen Transportprozesse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-3 text-green-600" />
              <div className="font-semibold text-gray-900 mb-1">99.9% Uptime</div>
              <div className="text-gray-600 text-sm">Garantierte Verfügbarkeit</div>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-3 text-green-600" />
              <div className="font-semibold text-gray-900 mb-1">SSL-Verschlüsselung</div>
              <div className="text-gray-600 text-sm">End-to-End Sicherheit</div>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-3 text-green-600" />
              <div className="font-semibold text-gray-900 mb-1">24/7 Monitoring</div>
              <div className="text-gray-600 text-sm">Kontinuierliche Überwachung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;