import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Icon } from './Icon';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              <div className="h-16 flex items-center justify-center">
                <img 
                  src="https://drive.google.com/thumbnail?id=1SA2ulVqHW6QAQKOloMPnR9w8ioAPfVjZ&sz=w400" 
                  alt="Manger Care Centre Logo" 
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </NavLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              item.subItems ? (
                <div key={item.label} className="relative group">
                   <button className="flex items-center gap-1 text-lg font-medium text-gray-600 hover:text-brand-green transition-colors duration-200 focus:outline-none">
                     {item.label}
                     <Icon name="ChevronDown" size={16} />
                   </button>
                   {/* Dropdown Menu */}
                   <div className="absolute right-0 mt-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                      <div className="bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                        {item.subItems.map((sub) => (
                           <NavLink 
                              key={sub.path} 
                              to={sub.path!} 
                              className={({ isActive }) => 
                                `block px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                                  isActive ? 'text-brand-green font-bold bg-gray-50' : 'text-gray-700'
                                }`
                              }
                           >
                              {sub.label}
                           </NavLink>
                        ))}
                      </div>
                   </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path!}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors duration-200 ${
                      isActive ? 'text-brand-green font-bold' : 'text-gray-600 hover:text-brand-green'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-brand-green focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <Icon name={isOpen ? 'X' : 'Menu'} size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-4 pb-3 space-y-2">
            {NAV_ITEMS.map((item) => (
              item.subItems ? (
                <div key={item.label} className="space-y-1">
                  <div className="px-3 py-2 text-lg font-bold text-gray-400 uppercase tracking-wider text-xs mt-4 mb-1">
                    {item.label}
                  </div>
                  {item.subItems.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path!}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-3 py-3 rounded-md text-lg font-medium pl-6 border-l-4 ${
                          isActive 
                            ? 'bg-brand-sand text-brand-green border-brand-green' 
                            : 'text-gray-600 hover:bg-gray-50 border-transparent'
                        }`
                      }
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path!}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-lg font-medium ${
                      isActive ? 'bg-brand-sand text-brand-green' : 'text-gray-600 hover:bg-gray-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};