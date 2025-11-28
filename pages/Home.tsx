import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Anchor } from 'lucide-react';
import { Section } from '../components/Section';
import { CONTENT } from '../constants';

const HeroVideo = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background Overlay */}
      <div className="absolute inset-0 bg-stone-900/40 z-10" />
      
      {/* Placeholder for video - using a high quality architectural image since we can't serve a real Park Hyatt video */}
      <div className="absolute inset-0">
         <img 
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2525&auto=format&fit=crop" 
            alt="Zanzibar Architecture" 
            className="w-full h-full object-cover animate-slow-zoom"
         />
         {/* Simulated Video Element if one was available */}
         {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/path-to-park-hyatt-video.mp4" type="video/mp4" />
            </video> 
         */}
      </div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
        <span className="uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-sans animate-fade-in-up">
          Welcome to Stone Town
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight animate-fade-in-up delay-100">
          Nyumbani
        </h1>
        <div className="h-px w-24 bg-white/80 mb-8 animate-scale-x delay-200"></div>
        <Link 
          to="/apartments"
          className="group border border-white px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-stone-900 transition-all duration-300 animate-fade-in-up delay-300 flex items-center gap-2"
        >
          View Apartments <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
        </Link>
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HeroVideo />

      {/* About Us Section */}
      <Section id="about">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-600/30 hidden md:block"></div>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight mb-6">
              Discover Our <br/><span className="italic text-amber-700">Heritage</span>
            </h2>
            <p className="font-sans text-xs uppercase tracking-widest text-stone-500 mb-8">
              About Us
            </p>
            <Anchor className="text-amber-700 opacity-50" size={48} strokeWidth={1} />
          </div>
          
          <div className="md:w-2/3 space-y-6 font-serif text-lg md:text-xl text-stone-600 leading-relaxed">
            <h3 className="text-2xl text-stone-800 mb-2 font-semibold">{CONTENT.about.title}</h3>
            <p>{CONTENT.about.text1}</p>
            <p>{CONTENT.about.text2}</p>
            <p>{CONTENT.about.text3}</p>
            
            <div className="pt-8">
              <Link to="/experiences" className="text-amber-700 uppercase tracking-widest text-xs border-b border-amber-700 pb-1 hover:text-stone-900 hover:border-stone-900 transition-colors">
                Explore Experiences
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Feature Image Parallaxish */}
      <div className="h-96 w-full bg-fixed bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1565538297696-66a53530e51b?q=80&w=2070&auto=format&fit=crop)'}}>
        <div className="h-full w-full bg-black/30 flex items-center justify-center">
           <p className="text-white font-serif text-3xl italic text-center px-4">"The door to the past opens to the comfort of the present."</p>
        </div>
      </div>
    </div>
  );
};
