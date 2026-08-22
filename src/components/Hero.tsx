import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  Gem, 
  Layers, 
  Eye,
  ShieldCheck,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO, STONES_CATALOG } from '../data/stonesData';
import { StoneProduct } from '../types';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreStone: (stone: StoneProduct) => void;
  onNavigateToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenQuote, 
  onExploreStone,
  onNavigateToSection 
}) => {
  const [activeStoneIndex, setActiveStoneIndex] = useState(0);
  const featuredStone = STONES_CATALOG[activeStoneIndex] || STONES_CATALOG[0];

  const openWhatsApp = () => {
    const text = encodeURIComponent("Bonjour NEGOCE Decor House SARL, je découvre votre site et j'aimerais recevoir votre catalogue de pierres ainsi qu'un devis.");
    window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center">
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute inset-0 bg-[#0f0e0c] z-0" />
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d4a359]/15 via-[#b86248]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#413b30]/40 via-transparent to-transparent blur-2xl pointer-events-none" />
      <div className="absolute inset-0 stone-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#201d17] border border-[#3e382d] text-[#d4a359] text-xs font-semibold uppercase tracking-wider mb-6 shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>NEGOCE Decor House SARL • Spécialiste N°1 de la Pierre Décorative</span>
        </motion.div>

        {/* Main 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Big Headline & Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-notable text-[#fbf8f3] tracking-tight leading-[1.08] mb-6"
            >
              L'ÉLÉGANCE <br />
              <span className="gold-gradient-text">MINÉRALE</span> <br />
              À L'ÉTAT PUR.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-[#c7beaf] font-commissioner font-light leading-relaxed max-w-2xl mb-8"
            >
              Sublimez vos villas, façades, piliers, intérieurs et terrasses avec des 
              <strong className="text-[#f4efe8] font-semibold"> barrettes de parement 100% naturelles</strong>, 
              quartzites scintillantes, ardoises sauvages et dallages nobles taillés à la main.
            </motion.p>

            {/* CTA Buttons Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10"
            >
              <button
                onClick={onOpenQuote}
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#d4a359] via-[#e2b56e] to-[#b38032] hover:from-[#e8c07e] hover:to-[#c6903f] text-[#11100e] font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-[#d4a359]/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                id="hero-quote-cta"
              >
                <span>Calculer & Demander un Devis</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={openWhatsApp}
                className="px-5 py-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/50 text-[#25D366] font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                id="hero-whatsapp-cta"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Conseiller</span>
              </button>

              <button
                onClick={() => onNavigateToSection('matiere')}
                className="px-5 py-4 rounded-xl bg-[#1e1c18] hover:bg-[#29251f] border border-[#383329] text-[#e0d7cb] font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#d4a359]" />
                <span>Voir les Pierres</span>
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[#29251f] text-xs text-[#a39886]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#d4a359] shrink-0" />
                <span>Inaltérable & Anti-UV</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4a359] shrink-0" />
                <span>Particuliers & BTP Gros Volume</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-[#d4a359] shrink-0" />
                <span>Livraison Tout Cameroun & CEMAC</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Stone Showcase Card & Stats */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Visual Feature Card with Texture Spotlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl bg-gradient-to-b from-[#242019] to-[#141310] border border-[#3f392d] p-5 sm:p-6 shadow-2xl overflow-hidden group"
            >
              {/* Top Card Badge */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: featuredStone.colorHex }} />
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#d4a359]">
                    {featuredStone.categoryLabel}
                  </span>
                </div>
                <span className="text-xs bg-[#2e2920] border border-[#484031] text-[#f4efe8] px-2.5 py-1 rounded-full font-mono">
                  En Stock
                </span>
              </div>

              {/* High Quality Stone Image */}
              <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden mb-4 border border-[#383227]">
                <img
                  src={featuredStone.imageUrl}
                  alt={featuredStone.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11100e] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <div>
                    <h2 className="text-lg sm:text-xl font-notable text-white leading-tight">
                      {featuredStone.name}
                    </h2>
                    <p className="text-xs text-[#d1c7b8] line-clamp-1">
                      {featuredStone.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => onExploreStone(featuredStone)}
                    className="p-2.5 rounded-lg bg-[#d4a359] text-black hover:bg-white transition-colors shrink-0 shadow-lg cursor-pointer"
                    title="Examiner la texture"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Stone Selector Tabs */}
              <div className="mb-4">
                <p className="text-[11px] uppercase tracking-wider text-[#8a8070] mb-2 font-medium">
                  Sélectionnez un type de pierre pour prévisualiser :
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {STONES_CATALOG.slice(0, 3).map((stone, idx) => (
                    <button
                      key={stone.id}
                      onClick={() => setActiveStoneIndex(idx)}
                      className={`p-2 rounded-lg border text-left transition-all cursor-pointer ${
                        activeStoneIndex === idx
                          ? 'bg-[#332c21] border-[#d4a359] text-[#f4efe8]'
                          : 'bg-[#181613] border-[#2c271e] text-[#9c9180] hover:border-[#423b2e]'
                      }`}
                    >
                      <div className="w-full h-1.5 rounded-full mb-1.5" style={{ backgroundColor: stone.colorHex }} />
                      <div className="text-[11px] font-medium truncate">{stone.name.split(' ')[0]} {stone.name.split(' ')[1]}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#29251e] text-xs">
                <span className="text-[#a19685]">Prix indicatif :</span>
                <span className="font-semibold text-[#d4a359]">{featuredStone.priceRange}</span>
              </div>
            </motion.div>

            {/* 4 Floating Metric Blocks in 2x2 Grid (Inspired by the Spaciaz layout) */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#181613] border border-[#2e2a22] rounded-xl p-3.5 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[#8a8070] text-xs mb-1">
                  <span>Projets Réalisés</span>
                  <TrendingUp className="w-3.5 h-3.5 text-[#d4a359]" />
                </div>
                <div className="text-2xl sm:text-3xl font-notable text-[#f4efe8]">350+</div>
                <div className="text-[11px] text-[#a39886]">Villas, hôtels & résidences</div>
              </div>

              <div className="bg-[#181613] border border-[#2e2a22] rounded-xl p-3.5 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[#8a8070] text-xs mb-1">
                  <span>Nuances Minérales</span>
                  <Gem className="w-3.5 h-3.5 text-[#d4a359]" />
                </div>
                <div className="text-2xl sm:text-3xl font-notable text-[#d4a359]">15+</div>
                <div className="text-[11px] text-[#a39886]">Quartzites, ardoises & grès</div>
              </div>

              <div className="bg-[#181613] border border-[#2e2a22] rounded-xl p-3.5 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[#8a8070] text-xs mb-1">
                  <span>Stock Permanent</span>
                  <Layers className="w-3.5 h-3.5 text-[#d4a359]" />
                </div>
                <div className="text-2xl sm:text-3xl font-notable text-[#f4efe8]">15k m²</div>
                <div className="text-[11px] text-[#a39886]">Dépôts Douala & Yaoundé</div>
              </div>

              <div className="bg-[#181613] border border-[#2e2a22] rounded-xl p-3.5 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[#8a8070] text-xs mb-1">
                  <span>Réponse Devis</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                </div>
                <div className="text-2xl sm:text-3xl font-notable text-[#f4efe8]">24-48h</div>
                <div className="text-[11px] text-[#a39886]">Accompagnement chiffré</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
