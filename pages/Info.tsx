import React from 'react';
import { Section } from '../components/Section';
import { CONTENT } from '../constants';
import { Car, MapPin, Bike } from 'lucide-react';

export const Info: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-100">
       <Section>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-sm border-t-4 border-stone-800">
                <h1 className="font-serif text-4xl text-stone-900 mb-12 text-center">Guest Information</h1>

                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-stone-100 p-3 rounded-full text-stone-800">
                            <Car size={24} />
                        </div>
                        <h2 className="font-serif text-2xl text-stone-800">Parking</h2>
                    </div>
                    <div className="pl-0 md:pl-16">
                        <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-amber-700 mb-3">Self-Parking</h3>
                        <p className="text-stone-600 leading-relaxed">
                            {CONTENT.parking.text}
                        </p>
                    </div>
                </div>

                <div className="h-px w-full bg-stone-200 mb-16"></div>

                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-stone-100 p-3 rounded-full text-stone-800">
                            <Bike size={24} />
                        </div>
                        <h2 className="font-serif text-2xl text-stone-800">Getting Around</h2>
                    </div>
                    <div className="pl-0 md:pl-16 space-y-6">
                         <p className="text-stone-600 leading-relaxed">{CONTENT.transport.text1}</p>
                         <p className="text-stone-600 leading-relaxed">{CONTENT.transport.text2}</p>
                         <p className="text-stone-600 leading-relaxed">{CONTENT.transport.text3}</p>
                    </div>
                </div>
            </div>
       </Section>
    </div>
  );
};
