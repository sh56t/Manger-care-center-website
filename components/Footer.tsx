import React from 'react';
import { NavLink } from 'react-router-dom';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';
import { Icon } from './Icon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darkGreen text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full p-1">
                  <img 
                    src="https://drive.google.com/thumbnail?id=1SA2ulVqHW6QAQKOloMPnR9w8ioAPfVjZ&sz=w200" 
                    alt="Manger Care Centre Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-serif font-bold text-lg text-white">MANGER Care Centre</span>
            </div>
            <p className="text-emerald-50 text-sm leading-relaxed mb-4">
              Restoring dignity, providing protection, and empowering the future of our community through holistic care and development.
            </p>
            <div className="flex space-x-4">
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" className="text-emerald-200 hover:text-white transition"><Icon name="Facebook" size={20}/></a>
              <a href={CONTACT_INFO.twitter} target="_blank" rel="noreferrer" className="text-emerald-200 hover:text-white transition"><Icon name="Twitter" size={20}/></a>
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="text-emerald-200 hover:text-white transition"><Icon name="Instagram" size={20}/></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-emerald-100">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <NavLink to={item.path} className="text-emerald-100 hover:text-white text-sm transition">
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                  <NavLink to="/get-involved" className="text-emerald-100 hover:text-white text-sm transition">
                    Volunteer
                  </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-serif font-semibold mb-4 text-emerald-100">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-emerald-100 text-sm">
                <Icon name="MapPin" size={18} className="mt-0.5 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-emerald-100 text-sm">
                <Icon name="Phone" size={18} className="flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-emerald-100 text-sm">
                <Icon name="Mail" size={18} className="flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-6 text-center text-xs text-emerald-300">
          <p>&copy; {new Date().getFullYear()} Manger Care Centre. All rights reserved.</p>
          <p className="mt-1">Registration No: {CONTACT_INFO.registration} | PBO: {CONTACT_INFO.pbo}</p>
        </div>
      </div>
    </footer>
  );
};