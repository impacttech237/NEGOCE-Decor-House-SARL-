import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, X, CheckCircle2 } from 'lucide-react';
import { REAL_PROJECTS } from '../data/stonesData';
import { ProjectShowcase } from '../types';

export const ProjectsFabrecor: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectShowcase | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projets" className="py-20 lg:py-28 bg-[#F5F2EB] border-t border-[#E0D9CB] relative overflow-hidden">
      
      {/* Giant Background Watermark Text - Exact Fabrecor Style seen in video */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-6">
        <div className="text-[#D84328] font-oswald text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-none opacity-90 select-none">
          RÉALISATIONS
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Navigation Arrows Row */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs sm:text-sm font-sans text-[#666666] max-w-md">
            Découvrez la matière en situation : façade, porche, terrasse ou aménagement professionnel. Chaque projet commence par le bon choix de pierre.
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full border border-[#333333]/30 hover:border-[#111111] hover:bg-[#111111] hover:text-white flex items-center justify-center transition-colors cursor-pointer text-[#111111]"
              aria-label="Projet précédent"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full border border-[#333333]/30 hover:border-[#111111] hover:bg-[#111111] hover:text-white flex items-center justify-center transition-colors cursor-pointer text-[#111111]"
              aria-label="Projet suivant"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Project Slider - Fabrecor Card Style */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REAL_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="shrink-0 w-[300px] sm:w-[360px] lg:w-[400px] snap-start rounded-2xl overflow-hidden bg-[#111111] border border-[#DDD5C7] shadow-lg relative group flex flex-col justify-between h-[420px]"
            >
              {/* Background Image with Dark Vignette */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
              </div>

              {/* Top Meta Info */}
              <div className="relative z-10 p-5 flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-[#111111]/80 backdrop-blur-md text-white text-[10px] font-oswald uppercase tracking-wider font-bold border border-white/10">
                  {project.category}
                </span>
                <span className="text-white/80 text-xs font-sans flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#D84328]" />
                  <span>{project.location}</span>
                </span>
              </div>

              {/* Bottom Content & Fabrecor GET STARTED style Red Button */}
              <div className="relative z-10 p-5 space-y-3">
                <h3 className="text-xl sm:text-2xl font-oswald font-bold text-white uppercase leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-xs text-[#CCCCCC] font-sans line-clamp-1">
                  Pierre : {project.stoneUsed} • {project.surface}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group/btn bg-[#D84328] hover:bg-[#b8331b] text-white px-4 py-2.5 rounded-lg flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <span className="text-xs font-oswald font-bold uppercase tracking-wider">
                      DÉCOUVRIR LE CHANTIER
                    </span>
                    <div className="w-4 h-4 rounded bg-white text-[#D84328] flex items-center justify-center transition-transform group-hover/btn:translate-x-0.5">
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#181818] border border-white/15 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-white shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-oswald text-[#D84328] uppercase tracking-widest font-bold mb-1">
                {selectedProject.category} • {selectedProject.location}
              </div>

              <h3 className="text-2xl sm:text-3xl font-oswald font-bold uppercase mb-4 text-white">
                {selectedProject.title}
              </h3>

              <div className="rounded-2xl overflow-hidden border border-white/10 h-72 sm:h-96 mb-6">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-[#222222] p-3.5 rounded-xl border border-white/5">
                  <span className="text-[10px] text-[#888888] font-oswald uppercase block">Matériau posé</span>
                  <span className="text-sm font-oswald font-bold text-[#D84328]">{selectedProject.stoneUsed}</span>
                </div>
                <div className="bg-[#222222] p-3.5 rounded-xl border border-white/5">
                  <span className="text-[10px] text-[#888888] font-oswald uppercase block">Surface couverte</span>
                  <span className="text-sm font-oswald font-bold text-white">{selectedProject.surface}</span>
                </div>
              </div>

              <p className="text-sm font-sans text-[#CCCCCC] leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="space-y-2 mb-6">
                <span className="text-xs font-oswald uppercase tracking-wider text-[#D84328] font-bold">
                  POINTS CLÉS DE L'OUVRAGE :
                </span>
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-sans text-[#DDDDDD]">
                    <CheckCircle2 className="w-4 h-4 text-[#D84328] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-lg bg-[#D84328] hover:bg-[#b8331b] text-white text-xs font-oswald font-bold uppercase tracking-wider cursor-pointer"
                >
                  FERMER
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
