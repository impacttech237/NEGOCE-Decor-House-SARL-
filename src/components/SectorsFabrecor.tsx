import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface SectorItem {
  id: string;
  name: string;
  cardTitle: string;
  desc: string;
  image: string;
  tag: string;
}

interface SectorsFabrecorProps {
  onOpenQuote: () => void;
}

export const SectorsFabrecor: React.FC<SectorsFabrecorProps> = ({ onOpenQuote }) => {
  const sectors: SectorItem[] = [
    {
      id: "villas",
      name: "VILLAS, DUPLEX & CONCESSIONS FAMILIALES",
      cardTitle: "HABILLAGE DE FAÇADES DE VILLAS & RÉSIDENCES",
      desc: "Sublimation des volumes extérieurs, colonnes de porche et façades complètes en barrettes de quartzite dorée ou ardoise naturelle pour un standing pérenne.",
      image: "/images/hero-negoce-villa.png",
      tag: "Résidentiel & Particuliers"
    },
    {
      id: "clotures",
      name: "PILIERS, PORTAILS & MURS DE CLÔTURE",
      cardTitle: "CLÔTURES MAJESTUEUSES & ENTRÉES DE PROPRIÉTÉS",
      desc: "Valorisation de la première impression de votre concession par des piliers massifs taillés et des murets de clôture en parement de pierre texturé.",
      image: "/images/realisation-porche.jpeg",
      tag: "Entrées & Clôtures"
    },
    {
      id: "entreprises",
      name: "SIÈGES D'ENTREPRISES & IMMEUBLES BTP",
      cardTitle: "ARCHITECTURE COMMERCIALE, BANQUES & BUREAUX",
      desc: "Fourniture cadencée à grand volume, fiches techniques conformes aux normes BTP et facturation SARL avec devis pro détaillés.",
      image: "/images/pierre-graphite.jpeg",
      tag: "Grands Comptes & Entreprises"
    },
    {
      id: "hotellerie",
      name: "HÔTELLERIE, RESORTS & RESTAURANTS DE LUXE",
      cardTitle: "COMPLEXES HÔTELIERS & CADRES TOURISTIQUES",
      desc: "Mise en valeur des établissements balnéaires, lodges et terrasses panoramiques de Kribi, Douala, Yaoundé et de l'Ouest Cameroun.",
      image: "/images/realisation-facade.jpeg",
      tag: "Hospitality & Loisirs"
    },
    {
      id: "interieurs",
      name: "SALONS, MURS TV & ESPACES DE RÉCEPTION",
      cardTitle: "DÉCORATION INTÉRIEURE MINÉRALE MODERNE",
      desc: "Création d'ambiances chaleureuses et raffinées avec éclairages rasants LED pour sublimer vos séjours, suites et salles de conférence.",
      image: "/images/pierre-doree-miel.jpeg",
      tag: "Design Intérieur"
    },
    {
      id: "terrasses",
      name: "COURS, TERRASSES & PLAGES DE PISCINE",
      cardTitle: "DALLAGE OPUS INCERTUM & PAVAGES NATURELS",
      desc: "Revêtements de sols extérieurs antidérapants qui restent frais sous le soleil et évacuent parfaitement les eaux de pluie.",
      image: "/images/realisation-terrasse.jpeg",
      tag: "Sols & Extérieurs"
    }
  ];

  const [activeSector, setActiveSector] = useState<SectorItem>(sectors[0]);

  return (
    <section id="domaines" className="py-24 lg:py-32 bg-[#F5F2EB] border-t border-[#E0D9CB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Signature Fabrecor centered style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-oswald text-[#D84328] tracking-widest uppercase font-bold mb-2">
            APPLICATIONS & SAVOIR-FAIRE
          </h2>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-[#111111] uppercase tracking-tight">
            DES SOLUTIONS POUR <span className="text-[#D84328]">CHAQUE PROJET</span>
          </div>
          <p className="text-sm font-sans text-[#666666] mt-3 max-w-xl mx-auto">
            Maison familiale, commerce, hôtel ou chantier BTP : nous vous aidons à choisir la pierre adaptée à l'usage, au rendu recherché et à votre budget.
          </p>
        </div>

        {/* Stacked Giant Typography with Hover Interaction - Exact Fabrecor Style */}
        <div className="relative">
          
          {/* Main Giant Word List */}
          <div className="flex flex-col items-center w-full">
            {sectors.map((sector) => {
              const isHovered = activeSector.id === sector.id;

              return (
                <React.Fragment key={sector.id}>
                  <button
                    onMouseEnter={() => setActiveSector(sector)}
                    onFocus={() => setActiveSector(sector)}
                    onClick={() => setActiveSector(sector)}
                    aria-expanded={isHovered}
                    className={`w-full py-3 sm:py-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-oswald font-bold uppercase tracking-tight transition-all duration-300 text-center cursor-pointer select-none ${
                      isHovered
                        ? 'text-[#111111]'
                        : 'text-[#AAAAAA]/60 hover:text-[#555555]'
                    }`}
                  >
                    {sector.name}
                  </button>

                  <AnimatePresence initial={false}>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -8 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -8 }}
                        transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full overflow-hidden"
                      >
                        <div className="max-w-2xl mx-auto my-6 sm:my-8 bg-white rounded-[28px] p-5 sm:p-6 border border-[#DDD5C7] shadow-[0_18px_50px_rgba(37,30,20,.12)] flex flex-col sm:flex-row items-center gap-5">
                          <div className="w-full sm:w-40 h-36 rounded-[20px] overflow-hidden shrink-0">
                            <img src={sector.image} alt={sector.cardTitle} className="w-full h-full object-cover" />
                          </div>
                          <div className="text-left w-full">
                            <span className="text-[10px] text-[#C85F36] uppercase tracking-[.16em] font-semibold">{sector.tag}</span>
                            <h4 className="font-display text-2xl font-semibold text-[#111111] leading-tight mt-2">{sector.cardTitle}</h4>
                            <p className="text-xs text-[#666666] leading-relaxed mt-2">{sector.desc}</p>
                            <button onClick={onOpenQuote} className="mt-4 text-xs font-semibold text-[#111111] hover:text-[#C85F36] flex items-center gap-2 transition-colors cursor-pointer">
                              Demander une étude <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </React.Fragment>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
