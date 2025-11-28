import React from 'react';
import { Section } from '../components/Section';
import { SHOP_ITEMS } from '../constants';
import { ShoppingBag } from 'lucide-react';

export const Shop: React.FC = () => {
  return (
    <div className="pt-24 bg-stone-50">
        <Section>
            <div className="text-center mb-16">
                <h1 className="font-serif text-5xl text-stone-900 mb-4">Tiny Shop</h1>
                <p className="text-stone-500 italic">Take a piece of Nyumbani home with you.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {SHOP_ITEMS.map((item) => (
                    <div key={item.id} className="group flex flex-col items-center">
                        <div className="w-full aspect-square bg-stone-200 mb-6 relative overflow-hidden">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full text-stone-900 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                <ShoppingBag size={20} />
                            </button>
                        </div>
                        <h3 className="font-serif text-xl text-stone-900 mb-2 text-center">{item.name}</h3>
                        <p className="font-sans text-sm text-amber-700 tracking-wider">{item.price}</p>
                    </div>
                ))}
            </div>
            
            <div className="mt-20 p-8 border border-stone-200 text-center max-w-2xl mx-auto">
                <p className="text-stone-500 text-sm leading-relaxed">
                    Items are available for purchase at the concierge desk during your stay. 
                    For international shipping inquiries, please contact us directly.
                </p>
            </div>
        </Section>
    </div>
  );
};
