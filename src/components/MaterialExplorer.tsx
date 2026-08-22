import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Sun, 
  Sunset, 
  Moon, 
  Check, 
  Layers, 
  PlusCircle, 
  Eye, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { STONES_CATALOG } from '../data/stonesData';
import { StoneProduct, StoneCategory } from '../types';

interface MaterialExplorerProps {
  onSelectStoneForQuote: (stone: StoneProduct) => void;
  onOpenDetailModal: (stone: StoneProduct) => void;
}

type LightMode = 'daylight' | 'goldenHour' | 'nightSpotlight';

export const MaterialExplorer: React.FC<MaterialExplorerProps> = ({
  onSelectStoneForQuote,
  onOpenDetailModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<StoneCategory | 'all'>('all');
  const [activeStone, setActiveStone] = useState<StoneProduct>(STONES_CATALOG[0]);
  const [lightMode, setLightMode] = useState<LightMode>('goldenHour');
  const [zoomActive, setZoomActive] = useState(false);

  const categories: { id: StoneCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'Toutes les Pierres' },
    { id: 'barrettes', label: 'Barrettes de Parement' },
    { id: 'briquettes', label: 'Briquettes & Grès' },
    { id: 'opus', label: 'Dallage & Opus' },
  ];

  const filteredStones = selectedCategory === 'all' 
    ? STONES_CATALOG 
    : STONES_CATALOG.filter(s => s.category === selectedCategory);

  const getLightFilterStyle = () => {
    switch (lightMode) {
      case 'daylight':
        return 'brightness-105 contrast-105 saturate-100';
      case 'goldenHour':
        return 'brightness-100 contrast-115 sepia-[0.25] hue-rotate-[-10deg]';
      case 'nightSpotlight':
        return 'brightness-90 contrast-125 saturate-90';
      default:
        return '';
    }
  };

  return (
    <section id="matiere" className="py-20 lg:py-28 bg-[#151411] relative border-t border-[#29251f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#242019] border border-[#3e382b] text-[#d4a359] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ressentir la Matière & le Grain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-notable text-[#f4efe8] mb-4">
            COLLECTION DE PIERRES D'EXCEPTION
          </h2>
          <p className="text-[#b3a898] text-base sm:text-lg font-commissioner">
            Chaque pierre possède son relief, sa texture et ses nuances inimitables. Explorez nos sélections extraites et calibrées pour durer des générations.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#d4a359] text-[#11100e] shadow-lg shadow-[#d4a359]/20'
                  : 'bg-[#201d18] text-[#a39886] hover:bg-[#2c2821] hover:text-[#f4efe8] border border-[#332e25]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Main Stone Inspector Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 bg-[#1a1814] border border-[#332e25] rounded-3xl p-6 sm:p-8 shadow-2xl">
          
          {/* Left: Interactive Material Viewport */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Viewport Box */}
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#443e33] group bg-[#0e0d0b]">
              <img
                src={zoomActive ? activeStone.textureZoomUrl : activeStone.imageUrl}
                alt={activeStone.name}
                className={`w-full h-full object-cover transition-all duration-700 ${getLightFilterStyle()} ${zoomActive ? 'scale-125' : 'scale-100'}`}
                referrerPolicy="no-referrer"
              />

              {/* Lighting Simulator Controls Floating Bar */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                <div className="bg-[#11100edc] backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#3f392e] pointer-events-auto flex items-center gap-2 text-xs">
                  <span className="text-[#a39886] hidden sm:inline">Éclairage :</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setLightMode('daylight')}
                      className={`p-1.5 rounded-lg flex items-center gap-1 transition-all cursor-pointer ${lightMode === 'daylight' ? 'bg-[#d4a359] text-black' : 'text-[#a39886] hover:text-white'}`}
                      title="Lumière du jour (Zénith)"
                    >
                      <Sun className="w-3.5 h-3.5" />
                      <span className="text-[10px] hidden md:inline">Jour</span>
                    </button>
                    <button
                      onClick={() => setLightMode('goldenHour')}
                      className={`p-1.5 rounded-lg flex items-center gap-1 transition-all cursor-pointer ${lightMode === 'goldenHour' ? 'bg-[#d4a359] text-black' : 'text-[#a39886] hover:text-white'}`}
                      title="Soleil couchant (Chaud & Doré)"
                    >
                      <Sunset className="w-3.5 h-3.5" />
                      <span className="text-[10px] hidden md:inline">Doré</span>
                    </button>
                    <button
                      onClick={() => setLightMode('nightSpotlight')}
                      className={`p-1.5 rounded-lg flex items-center gap-1 transition-all cursor-pointer ${lightMode === 'nightSpotlight' ? 'bg-[#d4a359] text-black' : 'text-[#a39886] hover:text-white'}`}
                      title="Spots architecturaux nocturnes"
                    >
                      <Moon className="w-3.5 h-3.5" />
                      <span className="text-[10px] hidden md:inline">Nuit</span>
                    </button>
                  </div>
                </div>

                {/* Zoom Toggle */}
                <button
                  onClick={() => setZoomActive(!zoomActive)}
                  className={`pointer-events-auto px-3 py-1.5 rounded-xl border text-xs font-medium flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer ${
                    zoomActive ? 'bg-[#d4a359] text-black border-[#d4a359]' : 'bg-[#11100edc] text-[#f4efe8] border-[#3f392e]'
                  }`}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{zoomActive ? 'Vue Globale' : 'Zoom Grain'}</span>
                </button>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#11100eeb] backdrop-blur-md p-3.5 rounded-xl border border-[#3f392e] flex justify-between items-center">
                <div>
                  <span className="text-xs text-[#d4a359] font-semibold uppercase">{activeStone.colorLabel}</span>
                  <div className="text-sm font-notable text-white">{activeStone.name}</div>
                </div>
                <button
                  onClick={() => onOpenDetailModal(activeStone)}
                  className="px-3 py-1.5 rounded-lg bg-[#27231c] hover:bg-[#383226] text-xs text-[#f4efe8] border border-[#484032] flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#d4a359]" />
                  <span>Fiche complète</span>
                </button>
              </div>
            </div>

            <p className="text-xs text-[#8c8273] italic">
              * Testez les modes d'éclairage ci-dessus pour observer le comportement des reflets minéraux à différents moments de la journée.
            </p>
          </div>

          {/* Right: Technical Specs & Add to Quote */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#d4a359]">Spécifications</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#27231c] text-[#d8d0c5] border border-[#3a3429]">
                  {activeStone.dimensions}
                </span>
              </div>

              <h3 className="text-2xl font-notable text-white mb-2">{activeStone.name}</h3>
              <p className="text-sm text-[#b8ad9e] leading-relaxed mb-6">
                {activeStone.longDescription}
              </p>

              {/* Key Features List */}
              <div className="space-y-2 mb-6">
                {activeStone.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-[#d6cdbf]">
                    <div className="w-4 h-4 rounded-full bg-[#d4a359]/20 text-[#d4a359] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Usages Chips */}
              <div className="mb-6">
                <span className="text-xs text-[#8c8273] uppercase tracking-wider block mb-2 font-medium">Usages recommandés :</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeStone.usageLabels.map((u, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-[#25221b] border border-[#3a3429] text-[11px] text-[#cfc5b6]">
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Action Box */}
            <div className="pt-5 border-t border-[#2d2921] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-[#8c8273] block">Tarif estimatif fourni :</span>
                <span className="text-lg font-bold text-[#d4a359]">{activeStone.priceRange}</span>
              </div>

              <button
                onClick={() => onSelectStoneForQuote(activeStone)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-[#d4a359] to-[#b88537] hover:from-[#e0b26a] hover:to-[#c6903f] text-[#11100e] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                id="add-stone-to-quote-btn"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Intégrer à mon Devis</span>
              </button>
            </div>

          </div>
        </div>

        {/* Gallery Grid of All Stones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStones.map((stone) => {
            const isCurrent = activeStone.id === stone.id;
            return (
              <motion.div
                key={stone.id}
                whileHover={{ y: -4 }}
                className={`rounded-2xl p-5 border transition-all cursor-pointer flex flex-col justify-between ${
                  isCurrent 
                    ? 'bg-[#221e17] border-[#d4a359] shadow-xl shadow-[#d4a359]/10' 
                    : 'bg-[#181613] border-[#2e2a22] hover:border-[#4d4436]'
                }`}
                onClick={() => setActiveStone(stone)}
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative h-44 rounded-xl overflow-hidden mb-4 border border-[#312c23]">
                    <img
                      src={stone.imageUrl}
                      alt={stone.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-[#11100ee6] text-[#d4a359] border border-[#443e33]">
                        {stone.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: stone.colorHex }} />
                    <span className="text-xs text-[#a39886]">{stone.colorLabel}</span>
                  </div>

                  <h3 className="text-lg font-notable text-white mb-2">{stone.name}</h3>
                  <p className="text-xs text-[#a89d8e] line-clamp-2 mb-4">{stone.description}</p>
                </div>

                <div className="pt-3 border-t border-[#29251e] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#d4a359]">{stone.priceRange}</span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenDetailModal(stone);
                      }}
                      className="p-1.5 rounded-lg bg-[#25221b] hover:bg-[#342f26] text-[#b3a898] hover:text-white transition-colors"
                      title="Détails"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectStoneForQuote(stone);
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-[#d4a359] text-[#11100e] text-xs font-bold hover:bg-white transition-colors flex items-center gap-1"
                      title="Devis"
                    >
                      <span>Devis</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
