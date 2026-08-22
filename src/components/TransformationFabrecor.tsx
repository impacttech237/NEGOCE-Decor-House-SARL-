import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';

interface TransformationFabrecorProps {
  onOpenQuote: () => void;
}

export const TransformationFabrecor: React.FC<TransformationFabrecorProps> = ({ onOpenQuote }) => {
  const [showAfter, setShowAfter] = useState(true);

  const benefits = [
    "Une finition minérale durable qui demande moins de reprises qu'une peinture extérieure classique",
    "Un relief naturel qui donne immédiatement plus de profondeur et de présence à l'architecture",
    "Un cachet distinctif qui renforce la perception de standing de votre propriété",
    "Une protection supplémentaire des zones exposées aux éclaboussures et au ruissellement",
    "Disponible pour petits et grands chantiers (concessions privées, duplex, clôtures, immeubles BTP)"
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F2EB] border-t border-[#E0D9CB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Visual with Toggle / Comparison in Fabrecor rounded frame style */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#DDD5C7] shadow-xl bg-[#111111] h-[400px] sm:h-[480px]">
              
              <img
                src={
                  showAfter
                    ? "/images/realisation-facade.jpeg"
                    : "/images/stock-pierres.jpeg"
                }
                alt={showAfter ? "Après pose pierre naturelle" : "Avant mur brut béton"}
                className={`w-full h-full object-cover transition-all duration-700 ${!showAfter ? 'grayscale contrast-125' : ''}`}
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Toggle Switch Pill */}
              <div className="absolute top-4 left-4 bg-[#111111]/85 backdrop-blur-md p-1 rounded-xl border border-white/10 flex items-center gap-1">
                <button
                  onClick={() => setShowAfter(false)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-oswald uppercase tracking-wider font-bold transition-all cursor-pointer ${
                    !showAfter ? 'bg-white text-black' : 'text-white/70 hover:text-white'
                  }`}
                >
                  AVANT (BÉTON NU)
                </button>
                <button
                  onClick={() => setShowAfter(true)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-oswald uppercase tracking-wider font-bold transition-all cursor-pointer ${
                    showAfter ? 'bg-[#D84328] text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  APRÈS (PIERRE NEGOCE)
                </button>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#111111]/85 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-oswald text-[#D84328] uppercase tracking-wider font-bold block">
                    {showAfter ? 'RÉSULTAT FINAL' : 'ÉTAT INITIAL'}
                  </span>
                  <span className="text-sm font-oswald font-bold uppercase">
                    {showAfter ? 'Habillage Barrettes Quartzite Miel' : 'Maçonnerie brute / enduit standard'}
                  </span>
                </div>
                <span className="text-xs text-[#AAAAAA] font-sans">
                  {showAfter ? 'Pose achevée' : 'Avant travaux'}
                </span>
              </div>

            </div>
          </div>

          {/* Right: Typography in exact Fabrecor style */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-oswald text-[#D84328] tracking-widest uppercase block mb-2 font-bold">
                IMPACT VISUEL & RENDEMENT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-[#111111] uppercase tracking-tight leading-[1.05]">
                DE LA MATIÈRE BRUTE <br />
                <span className="text-[#D84328]">À UNE FAÇADE QUI MARQUE</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base font-sans text-[#555555] leading-relaxed">
              La pierre décorative change la perception d'un bâtiment : elle souligne les volumes, capte la lumière et crée une signature visuelle qu'une simple peinture ne peut pas reproduire.
            </p>

            <div className="pt-4 border-t border-[#DDD5C7] space-y-3">
              <h3 className="text-xs font-oswald tracking-widest uppercase font-bold text-[#111111]">
                BÉNÉFICES DIRECTS
              </h3>
              <ul className="space-y-2.5">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm font-sans text-[#444444]">
                    <CheckCircle2 className="w-4 h-4 text-[#D84328] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenQuote}
                className="group bg-[#111111] hover:bg-[#D84328] text-white px-5 py-3 rounded-lg flex items-center gap-3 transition-colors cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-oswald tracking-wider font-bold uppercase">
                  SIMULER MON PROJET DE FAÇADE
                </span>
                <div className="w-5 h-5 rounded bg-white text-[#111111] group-hover:text-[#D84328] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
