import React from 'react';
import { Section } from '../components/Section';
import { CONTACT_INFO } from '../constants';
import { Icon } from '../components/Icon';

export const Contact: React.FC = () => {
  return (
    <>
      <div className="bg-brand-sand py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-brand-darkGreen mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Whether you want to volunteer, donate, or request assistance, our team is ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full text-brand-green">
                  <Icon name="MapPin" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Visit Us</h3>
                  <p className="text-gray-600 w-3/4">{CONTACT_INFO.address}</p>
                  <p className="text-sm text-gray-500 mt-1">Postal: {CONTACT_INFO.postal}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-brand-blue">
                   <Icon name="Phone" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-brand-earth">
                   <Icon name="Mail" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email Us</h3>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`} 
                    className="block text-gray-600 hover:text-brand-green hover:underline transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                  <a 
                    href="mailto:zen@mangercare.co.za" 
                    className="block text-gray-600 hover:text-brand-green hover:underline transition-colors"
                  >
                    zen@mangercare.co.za
                  </a>
                </div>
              </div>
            </div>

            {/* Map Integration */}
            <div className="mt-8 h-80 rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://maps.google.com/maps?q=8+Kirschner+Road,+Brentwood+Park,+Benoni,+1501&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Manger Care Centre Location"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition">
                  <option>General Inquiry</option>
                  <option>Volunteering</option>
                  <option>Donations</option>
                  <option>Request for Help</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-green text-white font-bold py-3 rounded-lg hover:bg-brand-darkGreen transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};