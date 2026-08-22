import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  Layers, 
  Maximize2, 
  X, 
  CheckCircle2, 
  Calendar,
  Building2,
  Home
} from 'lucide-react';
import { REAL_PROJECTS } from '../data/stonesData';
import { ProjectShowcase, ClientType } from '../types';

export const GalleryProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | ClientType>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectShowcase | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? REAL_PROJECTS
    : REAL_PROJECTS.filter(p => p.clientType === activeFilter);

  return (
    <section id="realisations" className="py-20 lg:py-28 bg-[#11100e] border-t border-[#29251f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1c17] border border-[#383226] text-[#d4a359] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chantiers & Projets Livrés</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-notable text-[#f4efe8]">
              NOS RÉALISATIONS
            </h2>
            <p className="text-[#a89e90] text-sm sm:text-base font-commissioner mt-2 max-w-xl">
              Découvrez en images la noblesse et l'impact visuel de nos pierres naturelles posées sur des chantiers réels au Cameroun.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="bg-[#1a1814] p-1 rounded-xl border border-[#332e25] inline-flex self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'all' ? 'bg-[#d4a359] text-black shadow' : 'text-[#8f8475] hover:text-white'
              }`}
            >
              Tous les Chantiers
            </button>
            <button
              onClick={() => setActiveFilter('particulier')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeFilter === 'particulier' ? 'bg-[#d4a359] text-black shadow' : 'text-[#8f8475] hover:text-white'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Villas & Résidentiel</span>
            </button>
            <button
              onClick={() => setActiveFilter('entreprise')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeFilter === 'entreprise' ? 'bg-[#d4a359] text-black shadow' : 'text-[#8f8475] hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Hôtels & Entreprises</span>
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-[#181613] border border-[#2f2a22] rounded-2xl overflow-hidden group hover:border-[#d4a359]/60 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Main Photo with Hover Overlay */}
                <div 
                  className="relative h-60 overflow-hidden cursor-pointer bg-[#0e0d0b]"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11100e] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-md bg-[#11100ed9] backdrop-blur-md text-[11px] font-semibold text-[#d4a359] border border-[#3f392d]">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#221f19]/90 text-[10px] text-[#cfc4b4] border border-[#332e25]">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom View Button */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-2 rounded-lg bg-[#d4a359] text-black shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-[#a39886] mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#d4a359]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg font-notable text-white mb-2 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#a89d8e] line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#29251e] text-xs">
                    <div className="flex items-center justify-between text-[#c4b9a9]">
                      <span className="text-[#7c7263]">Pierre posée :</span>
                      <span className="font-semibold text-right text-[#d4a359] truncate max-w-[170px]">{project.stoneUsed}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#c4b9a9]">
                      <span className="text-[#7c7263]">Superficie :</span>
                      <span className="font-medium text-white">{project.surface}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 rounded-xl bg-[#221f19] hover:bg-[#2e2a22] border border-[#352f25] text-xs font-semibold text-[#f4efe8] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#d4a359]" />
                  <span>Voir les détails & photos</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#181613] border border-[#3e382c] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#24211a] hover:bg-[#332e25] text-white border border-[#443e33] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="inline-block px-3 py-1 rounded-md bg-[#29241b] text-[#d4a359] text-xs font-semibold uppercase mb-2">
                  {selectedProject.category} • {selectedProject.location}
                </div>

                <h3 className="text-2xl sm:text-3xl font-notable text-white mb-4">
                  {selectedProject.title}
                </h3>

                {/* Hero Photo */}
                <div className="rounded-2xl overflow-hidden border border-[#332e25] h-72 sm:h-96 mb-6">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#201d18] p-4 rounded-xl border border-[#332e25]">
                    <span className="text-xs text-[#8f8475] block">Matériau posé :</span>
                    <span className="text-sm font-semibold text-[#d4a359]">{selectedProject.stoneUsed}</span>
                  </div>
                  <div className="bg-[#201d18] p-4 rounded-xl border border-[#332e25]">
                    <span className="text-xs text-[#8f8475] block">Surface du chantier :</span>
                    <span className="text-sm font-semibold text-white">{selectedProject.surface}</span>
                  </div>
                </div>

                <p className="text-sm text-[#c7beaf] leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono uppercase text-[#d4a359]">Points clés de l'ouvrage :</span>
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#d6cdbf]">
                      <CheckCircle2 className="w-4 h-4 text-[#d4a359]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#29251e] flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-xl bg-[#d4a359] hover:bg-[#e2b56e] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Fermer
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
