import React, { useState } from 'react';
import { 
  Mail, 
  Globe, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kontakt & Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie, wie BestModal Ihre Transportprozesse optimieren kann. 
            Vereinbaren Sie noch heute eine kostenlose Demo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sprechen Sie uns an
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Website</div>
                    <a 
                      href="https://www.bestmodal.de" 
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.bestmodal.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">E-Mail</div>
                    <a 
                      href="mailto:implementation@bestmodal.de" 
                      className="text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      implementation@bestmodal.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Powered by Acceltra GmbH
              </h4>
              <p className="text-gray-600 mb-4">
                BestModal wird entwickelt und bereitgestellt von der Acceltra GmbH, 
                Ihrem Partner für innovative Logistiklösungen.
              </p>
              <a 
                href="https://www.acceltra.de" 
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.acceltra.de →
              </a>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-4">
                Warum BestModal?
              </h4>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Mehr Transparenz</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Mehr Profit</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Mehr Geschäft</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Demo anfragen
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-600" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Vielen Dank!
                </h4>
                <p className="text-gray-600">
                  Wir haben Ihre Anfrage erhalten und melden uns zeitnah bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Unternehmen *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Teilen Sie uns mit, wie wir Ihnen helfen können..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="h-5 w-5" />
                  <span>Demo anfragen</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;