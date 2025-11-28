import React from 'react';
import { Section } from '../components/Section';

const images = [
    "https://picsum.photos/id/1015/800/600",
    "https://picsum.photos/id/1016/600/800",
    "https://picsum.photos/id/1018/800/600",
    "https://picsum.photos/id/1019/800/600",
    "https://picsum.photos/id/1033/600/800",
    "https://picsum.photos/id/1027/800/800",
];

export const Gallery: React.FC = () => {
  return (
    <div className="pt-24">
        <Section>
            <h1 className="font-serif text-5xl text-center text-stone-900 mb-16">Visual Stories</h1>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((src, index) => (
                    <div key={index} className="break-inside-avoid relative group overflow-hidden">
                        <img 
                            src={src} 
                            alt={`Gallery ${index}`} 
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                ))}
            </div>
        </Section>
    </div>
  );
};
