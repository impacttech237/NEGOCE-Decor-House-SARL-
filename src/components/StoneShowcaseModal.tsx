import React from 'react';
import { motion } from 'motion/react';
import { X, Check, Gem, ShieldCheck, PlusCircle, Ruler, Scale, Globe } from 'lucide-react';
import { StoneProduct } from '../types';

interface StoneShowcaseModalProps {
  stone: StoneProduct | null;
  onClose: () => void;
  onSelectForQuote: (stone: StoneProduct) => void;
}

export const StoneShowcaseModal: React.FC<StoneShowcaseModalProps> = ({
  stone,
  onClose,
  onSelectForQuote
}) => {
  if (!stone) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#181613] border border-[#3e382c] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#24211a] hover:bg-[#332e25] text-white border border-[#443e33] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Images */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-[#383227] h-64 sm:h-80 relative">
              <img
                src={stone.imageUrl}
                alt={stone.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#11100ed9] px-3 py-1 rounded-md text-xs font-semibold text-[#d4a359] border border-[#3d362a]">
                {stone.categoryLabel}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#383227] h-40 relative">
              <img
                src={stone.textureZoomUrl}
                alt={`Texture zoom ${stone.name}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 left-2 bg-[#11100ed9] px-2.5 py-1 rounded-md text-[10px] text-[#cfc4b4]">
                Vue macro du grain minéral
              </div>
            </div>
          </div>

          {/* Right: Technical Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stone.colorHex }} />
                <span className="text-xs text-[#d4a359] uppercase tracking-wider font-semibold">{stone.colorLabel}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-notable text-white mb-2 leading-tight">
                {stone.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#b8ad9e] leading-relaxed mb-6">
                {stone.longDescription}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-[#201d18] p-3 rounded-xl border border-[#332e25] text-xs">
                  <div className="flex items-center gap-1.5 text-[#8c8273] mb-1">
                    <Ruler className="w-3.5 h-3.5 text-[#d4a359]" />
                    <span>Dimensions</span>
                  </div>
                  <div className="font-semibold text-white truncate">{stone.dimensions}</div>
                </div>

                <div className="bg-[#201d18] p-3 rounded-xl border border-[#332e25] text-xs">
                  <div className="flex items-center gap-1.5 text-[#8c8273] mb-1">
                    <Scale className="w-3.5 h-3.5 text-[#d4a359]" />
                    <span>Poids estimé</span>
                  </div>
                  <div className="font-semibold text-white">{stone.weight}</div>
                </div>

                <div className="bg-[#201d18] p-3 rounded-xl border border-[#332e25] text-xs">
                  <div className="flex items-center gap-1.5 text-[#8c8273] mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d4a359]" />
                    <span>Épaisseur relief</span>
                  </div>
                  <div className="font-semibold text-white">{stone.thickness}</div>
                </div>

                <div className="bg-[#201d18] p-3 rounded-xl border border-[#332e25] text-xs">
                  <div className="flex items-center gap-1.5 text-[#8c8273] mb-1">
                    <Globe className="w-3.5 h-3.5 text-[#d4a359]" />
                    <span>Origine roche</span>
                  </div>
                  <div className="font-semibold text-white truncate">{stone.origin}</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-1.5 mb-6">
                {stone.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#cfc5b6]">
                    <Check className="w-3.5 h-3.5 text-[#d4a359]" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#29251e] flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-[#8c8273] block">Prix au m² :</span>
                <span className="text-base font-bold text-[#d4a359]">{stone.priceRange}</span>
              </div>

              <button
                onClick={() => {
                  onSelectForQuote(stone);
                  onClose();
                }}
                className="px-5 py-3 rounded-xl bg-[#d4a359] hover:bg-[#e2b56e] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Sélectionner pour Devis</span>
              </button>
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
};
