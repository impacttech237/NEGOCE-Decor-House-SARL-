import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Mountain, Hammer, Truck, Award, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/stonesData';

export const AboutExpertise: React.FC = () => {
  const pillars = [
    {
      icon: Mountain,
      title: "1. Sélection aux Carrières",
      desc: "Extraction rigoureuse dans des bancs rocheux de haute densité pour garantir une résistance totale à l'humidité tropicale et aux UV."
    },
    {
      icon: Hammer,
      title: "2. Calibrage & Taille Précise",
      desc: "Chaque barrette et chaque pavé est trié et taillé pour assurer une pose aisée, un alignement esthétique et un relief naturel 3D."
    },
    {
      icon: Truck,
      title: "3. Stock Permanent & Flotte Logistique",
      desc: "+15 000 m² constamment disponibles dans nos dépôts de Douala et Yaoundé avec livraison rapide sur vos chantiers."
    },
    {
      icon: Award,
      title: "4. Noblesse 100% Naturelle",
      desc: "Aucun colorant chimique, aucun liant synthétique. Une matière pure qui s'embellit au fil des décennies sans entretien."
    }
  ];

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-[#11100e] border-t border-[#29251f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1c17] border border-[#383226] text-[#d4a359] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Savoir-Faire & Origine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-notable text-[#f4efe8] mb-4">
            L'EXCELLENCE NEGOCE DECOR HOUSE
          </h2>
          <p className="text-[#a89e90] text-base sm:text-lg font-commissioner">
            Une entreprise spécialisée dans la valorisation minérale architecturale. Nous transformons la pierre brute en chefs-d'œuvre pour vos façades et intérieurs.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-[#181613] border border-[#2e2a22] rounded-2xl p-6 hover:border-[#d4a359]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#242019] text-[#d4a359] border border-[#3d362a] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-notable text-white mb-2 leading-snug">{p.title}</h3>
                  <p className="text-xs text-[#a39886] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Banner Card */}
        <div className="bg-gradient-to-r from-[#201c15] via-[#1a1814] to-[#241f17] border border-[#3d362a] rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4a359] block mb-2">
              Statut Juridique & Fiabilité
            </span>
            <h3 className="text-2xl sm:text-3xl font-notable text-white mb-4 leading-tight">
              NEGOCE Decor House SARL
            </h3>
            <p className="text-xs sm:text-sm text-[#b8ad9e] leading-relaxed mb-4">
              Société à Responsabilité Limitée enregistrée au Registre du Commerce et du Crédit Mobilier. Fournisseur de référence des plus grands cabinets d'architectes, promoteurs immobiliers et propriétaires de résidences de prestige.
            </p>
            <div className="text-xs text-[#7e7464] font-mono">
              {COMPANY_INFO.rcNumber}
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3 bg-[#11100e] border border-[#352f25] px-5 py-4 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-[#d4a359]" />
              <div>
                <div className="text-xs font-bold text-white uppercase">Qualité Garantie</div>
                <div className="text-[11px] text-[#8c8273]">Pierres certifiées inaltérables</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
