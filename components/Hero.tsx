
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Manual scroll calculation to account for fixed header
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL hash without jumping, safely ignoring errors in sandboxed environments
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError in restricted environments
      }
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#D6D1C7]">
      
      {/* Background Image - Warm Minimalist Home */}
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000" 
            alt="Minimalist warm living room" 
            className="w-full h-full object-cover animate-[scale_20s_ease-in-out_infinite_alternate]"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-[#2C2A26]/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="animate-fade-in-up w-full max-w-4xl">
          <span className="block text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-white/90 mb-8 backdrop-blur-md bg-white/10 px-6 py-2 rounded-full mx-auto w-fit border border-white/20">
            The Essentials Collection
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-normal text-[#F5F2EB] tracking-tight mb-8 drop-shadow-lg">
            Sanctuary <span className="italic font-light">within.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-2xl text-white/95 font-light leading-relaxed mb-12 drop-shadow-md">
            Elevate your daily rituals with objects of calm and utility. <br className="hidden md:block"/>
            Designed for the modern, mindful home.
          </p>
          
          <a 
            href="#products" 
            onClick={(e) => handleNavClick(e, 'products')}
            className="group relative px-12 py-5 bg-[#F5F2EB] text-[#2C2A26] rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-white transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-block"
          >
            <span className="relative z-10 group-hover:text-[#2C2A26]">Explore the Home</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
