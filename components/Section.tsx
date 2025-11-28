import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = "", 
  bgColor = "bg-stone-50",
  id
}) => {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 ${bgColor} ${className}`}>
      <div className="container mx-auto max-w-5xl">
        {children}
      </div>
    </section>
  );
};
