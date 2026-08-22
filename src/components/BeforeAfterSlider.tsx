import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layers, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="transformation" className="py-20 lg:py-28 bg-[#11100e] relative border-t border-[#24201a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1f1c16] border border-[#383226] text-[#d4a359] text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Impact Visuel & Plus-Value Immobilière</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-notable text-[#f4efe8] mb-4">
            LA MÉTAMORPHOSE MINÉRALE
          </h2>
          <p className="text-[#a89e90] text-base sm:text-lg font-commissioner">
            Déplacez le curseur central pour comparer l'état brut (béton nu / maçonnerie standard) avec la pose achevée de nos barrettes de quartzite noble.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div 
            ref={containerRef}
            className="relative h-[380px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-[#3b3427] select-none cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER IMAGE (Underneath - Clad with luxury natural stone) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                alt="Après : Villa sublimée par le parement pierre naturelle"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 bg-[#11100ee6] backdrop-blur-md border border-[#d4a359]/60 px-4 py-2 rounded-xl text-right">
                <span className="text-xs font-bold text-[#d4a359] uppercase tracking-wider block">APRÈS</span>
                <span className="text-xs text-[#e8ded0]">Pose Barrettes Quartzite Miel NEGOCE</span>
              </div>
            </div>

            {/* BEFORE IMAGE (Clipped on top - Raw concrete & scaffolding) */}
            <div 
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1600&q=80"
                alt="Avant : Mur brut en béton et brique"
                className="absolute inset-0 w-[1000px] sm:w-[1200px] lg:w-[1400px] max-w-none h-full object-cover filter grayscale contrast-125 brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-[#11100ee6] backdrop-blur-md border border-[#52493a] px-4 py-2 rounded-xl">
                <span className="text-xs font-bold text-[#9e9384] uppercase tracking-wider block">AVANT</span>
                <span className="text-xs text-[#b0a595]">Mur brut béton / enduit simple</span>
              </div>
            </div>

            {/* Slider Dividing Bar & Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-[#d4a359] shadow-[0_0_15px_#d4a359]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#d4a359] border-2 border-white text-black flex items-center justify-center shadow-2xl">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
            </div>

            {/* Help Indicator Pill */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#11100ed9] backdrop-blur-md px-4 py-1.5 rounded-full border border-[#3e382c] text-xs text-[#c9bea7] pointer-events-none flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4a359]" />
              <span>Glissez pour comparer</span>
            </div>
          </div>

          {/* Quick Value Metrics beneath */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-[#181612] border border-[#2b271f] rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4a359]/15 text-[#d4a359] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#f4efe8]">+40% de Valeur Perçue</h4>
                <p className="text-xs text-[#8f8576]">Valorisation immédiate du bien immobilier</p>
              </div>
            </div>

            <div className="bg-[#181612] border border-[#2b271f] rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4a359]/15 text-[#d4a359] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#f4efe8]">Isolation & Fraîcheur</h4>
                <p className="text-xs text-[#8f8576]">Inertie thermique naturelle contre la chaleur</p>
              </div>
            </div>

            <div className="bg-[#181612] border border-[#2b271f] rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4a359]/15 text-[#d4a359] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#f4efe8]">0 Entretien / 0 Peinture</h4>
                <p className="text-xs text-[#8f8576]">Économies massives sur le ravalement</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
