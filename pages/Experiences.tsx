import React from 'react';
import { Section } from '../components/Section';
import { CONTENT } from '../constants';
import { Compass, Sun, Map, Anchor } from 'lucide-react';

const ExperienceCard = ({ title, icon, image, description }: { title: string, icon: React.ReactNode, image: string, description: string }) => (
    <div className="relative flex flex-col md:flex-row h-auto md:h-80 bg-white shadow-lg group overflow-hidden">
        <div className="w-full md:w-1/2 overflow-hidden h-64 md:h-full relative">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-amber-900/20"></div>
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <div className="text-amber-600 mb-4">{icon}</div>
            <h3 className="font-serif text-2xl text-stone-800 mb-3">{title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">{description}</p>
            <button className="self-start text-xs uppercase tracking-widest border-b border-stone-300 pb-1 group-hover:border-amber-600 transition-colors">
                Inquire Now
            </button>
        </div>
    </div>
);

export const Experiences: React.FC = () => {
  return (
    <div className="pt-24">
        <Section>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="font-serif text-5xl text-stone-900 mb-6">Curated Experiences</h1>
                <p className="font-serif text-lg text-stone-600 leading-relaxed">
                    {CONTENT.experiences.intro}
                </p>
            </div>

            <div className="space-y-12">
                <ExperienceCard 
                    title="Sunset Dhow Cruise"
                    icon={<Anchor size={24} />}
                    image="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop"
                    description="Glide across the Indian Ocean on a traditional wooden dhow. Watch the sky turn gold and crimson as you sip sundowners and enjoy the rhythm of the waves."
                />
                 <ExperienceCard 
                    title="Stone Town Heritage Walk"
                    icon={<Map size={24} />}
                    image="https://images.unsplash.com/photo-1565538297696-66a53530e51b?q=80&w=2070&auto=format&fit=crop"
                    description="Wander the winding alleys with our expert guide. Discover hidden courtyards, bustling bazaars, and the architectural marvels that grant this city its UNESCO status."
                />
                 <ExperienceCard 
                    title="Spice Farm Sensory Tour"
                    icon={<Sun size={24} />}
                    image="https://images.unsplash.com/photo-1605288798265-580975a25d66?q=80&w=2070&auto=format&fit=crop"
                    description="Journey to the countryside to smell, taste, and touch the spices that made Zanzibar famous. A culinary and olfactory adventure through clove, nutmeg, and cinnamon plantations."
                />
            </div>
        </Section>
    </div>
  );
};
