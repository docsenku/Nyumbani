import React from 'react';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-stone-800 pb-12 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-serif text-4xl text-stone-100 tracking-widest mb-4 uppercase">Nyumbani</h2>
            <p className="font-sans text-sm tracking-wider leading-relaxed text-center md:text-left max-w-xs">
              A sanctuary of heritage and luxury in the heart of Stone Town, Zanzibar.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="uppercase tracking-widest text-xs text-amber-600 font-bold mb-2">Contact</h3>
            <div className="flex items-center space-x-3 hover:text-white transition-colors cursor-pointer">
              <Mail size={16} />
              <span className="font-sans text-sm">reservations@nyumbani-zanzibar.com</span>
            </div>
            <div className="flex items-center space-x-3 hover:text-white transition-colors cursor-pointer">
              <MapPin size={16} />
              <span className="font-sans text-sm">Stone Town, Zanzibar, Tanzania</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end space-y-4">
             <h3 className="uppercase tracking-widest text-xs text-amber-600 font-bold mb-2">Follow Us</h3>
             <div className="flex space-x-6">
               <a href="#" className="hover:text-white transition-transform hover:-translate-y-1">
                 <Instagram size={24} />
               </a>
               <a href="#" className="hover:text-white transition-transform hover:-translate-y-1">
                 <Facebook size={24} />
               </a>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-sans tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Nyumbani Zanzibar. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed with <span className="text-amber-600">♥</span> for Heritage</p>
        </div>
      </div>
    </footer>
  );
};
