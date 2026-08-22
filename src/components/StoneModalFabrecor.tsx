import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { StoneProduct } from '../types';

interface StoneModalFabrecorProps {
  stone: StoneProduct | null;
  onClose: () => void;
  onSelectForQuote: (stone: StoneProduct) => void;
}

export const StoneModalFabrecor: React.FC<StoneModalFabrecorProps> = ({
  stone,
  onClose,
  onSelectForQuote
}) => {
  if (!stone) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-[#181818] border border-white/15 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-white shadow-2xl relative"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Photos */}
            <div className="md:col-span-6 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 h-72 sm:h-80 bg-black">
                <img
                  src={stone.imageUrl}
                  alt={stone.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 h-44 sm:h-52 bg-black relative">
                <img
                  src={stone.textureZoomUrl}
                  alt={`Gros plan texture ${stone.name}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[10px] font-oswald uppercase tracking-wider font-bold">
                  Gros plan matière & relief
                </span>
              </div>
            </div>

            {/* Right: Technical Specs & Fabrecor CTA */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-oswald text-[#D84328] uppercase tracking-widest font-bold block mb-1">
                  {stone.categoryLabel} • {stone.colorLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-oswald font-bold uppercase tracking-tight text-white leading-tight">
                  {stone.name}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#AAAAAA] mt-2 leading-relaxed">
                  {stone.longDescription}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-2.5 text-xs font-sans">
                <div className="bg-[#222222] p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-[#777777] font-oswald uppercase block">Dimensions</span>
                  <span className="font-semibold text-white truncate block">{stone.dimensions}</span>
                </div>
                <div className="bg-[#222222] p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-[#777777] font-oswald uppercase block">Épaisseur</span>
                  <span className="font-semibold text-white block">{stone.thickness}</span>
                </div>
                <div className="bg-[#222222] p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-[#777777] font-oswald uppercase block">Poids moyen</span>
                  <span className="font-semibold text-white block">{stone.weight}</span>
                </div>
                <div className="bg-[#222222] p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-[#777777] font-oswald uppercase block">Tarif indicatif</span>
                  <span className="font-bold text-[#D84328] block">{stone.priceRange}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-xs font-oswald uppercase tracking-wider text-[#D84328] font-bold block">
                  PROPRIÉTÉS MINÉRALES :
                </span>
                {stone.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-sans text-[#DDDDDD]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D84328] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onSelectForQuote(stone);
                    onClose();
                  }}
                  className="flex-1 py-3 px-4 rounded-lg bg-[#D84328] hover:bg-[#b8331b] text-white text-xs font-oswald font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>UTILISER DANS LE SIMULATEUR</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onClose}
                  className="py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-oswald font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  FERMER
                </button>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
