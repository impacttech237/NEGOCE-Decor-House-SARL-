import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { STONES_CATALOG } from '../data/stonesData';
import { StoneProduct } from '../types';

interface CollectionFabrecorProps {
  onSelectStone: (stone: StoneProduct) => void;
  onOpenQuoteForStone: (stone: StoneProduct) => void;
}

export const CollectionFabrecor: React.FC<CollectionFabrecorProps> = ({
  onSelectStone,
  onOpenQuoteForStone
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'TOUTES LES PIERRES' },
    { id: 'barrettes', label: 'BARRETTES DE PAREMENT' },
    { id: 'dallage', label: 'DALLAGES & PAVÉS' },
    { id: 'briquettes', label: 'BRIQUETTES & PLAQUETTES' },
    { id: 'blocs_massifs', label: 'PIERRES DE TAILLE' }
  ];

  const filteredStones = activeFilter === 'all'
    ? STONES_CATALOG
    : STONES_CATALOG.filter(s => s.category === activeFilter);

  return (
    <section id="collection" className="py-20 lg:py-28 bg-[#F5F2EB] border-t border-[#E0D9CB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-oswald text-[#D84328] tracking-widest uppercase font-bold block mb-2">
              PIERRES DÉCORATIVES 100% NATURELLES
            </span>
            <h2 className="text-3xl sm:text-5xl font-oswald font-bold text-[#111111] uppercase tracking-tight leading-none">
              CATALOGUE DES <span className="text-[#D84328]">PIERRES DISPONIBLES</span>
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#666666] mt-2 max-w-lg">
              Barrettes de parement clivées, dalles polygonales et quartzites nobles calibrées pour vos façades, clôtures, salons et cours.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-oswald uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-[#EBE6DC] text-[#555555] hover:text-[#111111] border border-[#DDD5C7]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid in Fabrecor signature style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStones.map((stone) => (
            <div
              key={stone.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#DDD5C7] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Zoom & Badge */}
                <div className="relative h-56 overflow-hidden bg-black">
                  <img
                    src={stone.imageUrl}
                    alt={stone.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] font-oswald text-white uppercase font-bold tracking-wider">
                    {stone.categoryLabel}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-sans text-[#DDD] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: stone.colorHex }} />
                      {stone.colorLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <h3 className="text-lg font-oswald font-bold text-[#111111] uppercase tracking-tight leading-snug group-hover:text-[#D84328] transition-colors">
                    {stone.name}
                  </h3>
                  
                  <p className="text-xs font-sans text-[#666666] line-clamp-2 leading-relaxed">
                    {stone.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs font-sans text-[#777777] border-t border-[#EAE5DC]">
                    <span>Dimensions : {stone.thickness}</span>
                    <span className="font-oswald font-bold text-[#D84328]">{stone.priceRange}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  onClick={() => onSelectStone(stone)}
                  className="flex-1 bg-[#EBE6DC] hover:bg-[#DDD5C7] text-[#111111] py-2.5 rounded-lg text-xs font-oswald font-bold uppercase tracking-wider transition-colors cursor-pointer border border-[#DDD5C7]"
                >
                  FICHE DÉTAILS
                </button>

                <button
                  onClick={() => onOpenQuoteForStone(stone)}
                  className="bg-[#111111] hover:bg-[#D84328] text-white px-3.5 py-2.5 rounded-lg text-xs font-oswald font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Ajouter au simulateur de devis"
                >
                  <span>DEVIS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
