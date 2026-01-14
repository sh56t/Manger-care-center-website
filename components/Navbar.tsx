import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Icon } from './Icon';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleMobileSubMenu = (label: string) => {
    setExpandedMobileMenu(expandedMobileMenu === label ? null : label);
  };

  const toggleDesktopDropdown = (label: string) => {
    setActiveDesktopDropdown(activeDesktopDropdown === label ? null : label);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center flex-shrink-0">
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
          
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
            {NAV_ITEMS.map((item) => {
              // Special styling for Donate button
              if (item.label === 'Donate') {
                return (
                  <NavLink
                    key={item.path}
                    to={item.path!}
                    className="ml-2 bg-brand-green text-white px-6 py-2.5 rounded-full font-bold hover:bg-brand-darkGreen transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    {item.label}
                  </NavLink>
                );
              }

              return item.subItems ? (
                <div key={item.label} className="relative group">
                   <button 
                     onClick={() => toggleDesktopDropdown(item.label)}
                     className={`flex items-center gap-1 text-lg font-medium transition-colors duration-200 focus:outline-none ${
                       activeDesktopDropdown === item.label ? 'text-brand-green' : 'text-gray-600 hover:text-brand-green'
                     }`}
                   >
                     {item.label}
                     <Icon name="ChevronDown" size={16} className={`transition-transform duration-200 ${activeDesktopDropdown === item.label ? 'rotate-180' : ''}`} />
                   </button>
                   {/* Dropdown Menu - Visible on Hover OR Click */}
                   <div 
                     className={`absolute left-1/2 transform -translate-x-1/2 mt-0 pt-2 w-48 transition-all duration-200 origin-top z-50 ${
                       activeDesktopDropdown === item.label 
                         ? 'opacity-100 visible translate-y-0' 
                         : 'opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
                     }`}
                   >
                      <div className="bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                        {item.subItems.map((sub) => (
                           <NavLink 
                              key={sub.path} 
                              to={sub.path!} 
                              onClick={() => setActiveDesktopDropdown(null)}
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
              );
            })}
          </div>

          {/* Spacer for Desktop balancing (Approx width of logo to ensure true center) */}
          <div className="hidden md:block w-20 lg:w-32 flex-shrink-0"></div>

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
            {NAV_ITEMS.map((item) => {
              // Special styling for Donate button in Mobile
              if (item.label === 'Donate') {
                return (
                  <NavLink
                    key={item.path}
                    to={item.path!}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 rounded-md text-lg font-bold text-white bg-brand-green text-center mx-2 hover:bg-brand-darkGreen transition-colors shadow-sm my-4"
                  >
                    {item.label}
                  </NavLink>
                );
              }

              return item.subItems ? (
                <div key={item.label} className="space-y-1">
                  <button 
                    onClick={() => toggleMobileSubMenu(item.label)}
                    className="w-full flex items-center justify-between px-3 py-3 text-lg font-bold text-gray-700 hover:text-brand-green hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {item.label}
                    <Icon name="ChevronDown" size={20} className={`transform transition-transform ${expandedMobileMenu === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Collapsible Sub-menu */}
                  <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    {item.subItems.map((sub) => (
                      <NavLink
                        key={sub.path}
                        to={sub.path!}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `block px-3 py-3 rounded-md text-base font-medium pl-8 border-l-4 ml-2 ${
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
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path!}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-lg font-medium ${
                      isActive ? 'bg-brand-sand text-brand-green' : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};