import React from 'react';
import { Section } from '../components/Section';
import { CONTENT, APARTMENTS } from '../constants';
import { Check, Wifi, Coffee, Wind } from 'lucide-react';

const AmenityIcon = ({ feature }: { feature: string }) => {
    if (feature.toLowerCase().includes('wifi')) return <Wifi size={16} />;
    if (feature.toLowerCase().includes('coffee') || feature.toLowerCase().includes('breakfast')) return <Coffee size={16} />;
    if (feature.toLowerCase().includes('air') || feature.toLowerCase().includes('fan')) return <Wind size={16} />;
    return <Check size={16} />;
}

export const Apartments: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Intro Header */}
      <Section className="pb-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6">Our Apartments</h1>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-8"></div>
            <h2 className="font-sans text-sm tracking-widest uppercase text-stone-500 mb-4">
                {CONTENT.apartmentsIntro.title}
            </h2>
            <div className="space-y-4 font-serif text-lg text-stone-600 leading-relaxed text-left md:text-center">
                <p>{CONTENT.apartmentsIntro.text1}</p>
                <p>{CONTENT.apartmentsIntro.text2}</p>
                <p>{CONTENT.apartmentsIntro.text3}</p>
            </div>
        </div>

        {/* Craftsmanship Detail Block */}
        <div className="bg-stone-100 p-8 md:p-12 border-l-4 border-amber-700 mb-20">
            <h3 className="font-serif text-2xl text-stone-800 mb-4 italic">Heritage & Craftsmanship</h3>
            <p className="text-stone-600 mb-4">{CONTENT.apartmentsIntro.text4}</p>
            <p className="text-stone-600">{CONTENT.apartmentsIntro.text5}</p>
        </div>
      </Section>

      {/* Apartment Listings */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {APARTMENTS.map((apt) => (
                    <div key={apt.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden h-80 mb-6">
                            <img 
                                src={apt.image} 
                                alt={apt.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                        </div>
                        <h3 className="font-serif text-3xl text-stone-900 mb-3">{apt.title}</h3>
                        <p className="text-stone-600 mb-6 leading-relaxed text-sm">{apt.description}</p>
                        <ul className="space-y-2 mb-8 border-t border-stone-200 pt-4">
                            {apt.features.map((feat, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-xs uppercase tracking-widest text-stone-500">
                                    <span className="text-amber-600">•</span> {feat}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-3 border border-stone-900 text-stone-900 uppercase tracking-widest text-xs hover:bg-stone-900 hover:text-white transition-colors">
                            Book Residence
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* General Amenities Section */}
      <Section bgColor="bg-stone-900" className="text-stone-300">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:w-1/3">
                <h3 className="font-serif text-4xl text-white mb-4">Services & Amenities</h3>
                <p className="text-stone-400 mb-6">At Nyumbani, hospitality is personal. We ensure every aspect of your stay is comfortable, secure, and memorable.</p>
                <div className="h-px w-full bg-stone-700"></div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {CONTENT.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="p-2 bg-stone-800 rounded-full text-amber-500">
                            <AmenityIcon feature={item} />
                        </div>
                        <span className="text-sm tracking-wide font-light">{item}</span>
                    </div>
                ))}
            </div>
        </div>
      </Section>
    </div>
  );
};
