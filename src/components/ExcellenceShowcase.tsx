import React from 'react';
import { ArrowUpRight, Quote, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/stonesData';

interface ExcellenceShowcaseProps {
  onOpenQuote: () => void;
  onNavigate: (sectionId: string) => void;
}

export const ExcellenceShowcase: React.FC<ExcellenceShowcaseProps> = ({
  onOpenQuote,
  onNavigate
}) => {
  const pillars = [
    {
      title: "VENTE DE PIERRES DÉCORATIVES SÉLECTIONNÉES",
      desc: "Barrettes de parement de quartzite dorée, ardoises graphite, grès ocre et dallages polygonaux de haute densité."
    },
    {
      title: "POUR PARTICULIERS ET ENTREPRISES",
      desc: "De la villa individuelle à la concession familiale, jusqu'aux grands ensembles immobiliers, sièges de banques et complexes hôteliers."
    },
    {
      title: "ADAPTÉE AUX ESPACES EXPOSÉS",
      desc: "Une solution minérale robuste pour les façades et zones soumises au soleil, aux pluies et à l'humidité du climat camerounais."
    },
    {
      title: "ACCOMPAGNEMENT, MÉTRÉ ET LIVRAISON",
      desc: "Conseils techniques francs, calcul des mètres carrés avec marge de coupe et livraison sécurisée sur chantier partout au Cameroun."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F2EB] border-t border-[#E0D9CB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Rounded Visual Card with Director's Quote overlay */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#DDD5C7] shadow-xl bg-[#111111] h-[440px] sm:h-[520px]">
              <img
                src="/images/stock-graphite-dore.jpeg"
                alt="Pose de barrettes de quartzite dorée NEGOCE Decor House SARL"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              {/* Director's Mission Badge */}
              <div className="absolute top-4 left-4 right-4 bg-[#111111]/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/10 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-[#D84328]" />
                  <span className="text-[11px] font-oswald text-[#D84328] uppercase tracking-wider font-bold">
                    VISION DE LA DIRECTION • NEGOCE DECOR HOUSE SARL
                  </span>
                </div>
                <p className="text-xs font-sans text-[#DDDDDD] italic leading-relaxed">
                  « Nous sommes là pour faire reconnaître la vraie valeur de la pierre au monde et offrir aux Camerounais la qualité qu'ils méritent pour leurs bâtisses. »
                </p>
              </div>

              {/* Bottom Stock Indicator */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#111111]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-oswald text-[#25D366] uppercase tracking-wider block font-bold">
                    DISPONIBILITÉ RÉELLE
                  </span>
                  <span className="text-sm font-oswald font-bold uppercase">
                    Plusieurs teintes et formats disponibles
                  </span>
                </div>
                <span className="text-xs font-sans text-[#AAAAAA] hidden sm:inline">Livraison nationale</span>
              </div>
            </div>
          </div>

          {/* Right: Copy & Cameroonian Realities */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-oswald text-[#D84328] tracking-widest uppercase block mb-2 font-bold">
                ENGAGEMENT & SAVOIR-FAIRE LOCAL
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-[#111111] uppercase tracking-tight leading-[1.02]">
                POURQUOI CHOISIR <br />
                <span className="text-[#D84328]">NEGOCE DECOR HOUSE SARL ?</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base font-sans text-[#555555] leading-relaxed">
              Que vous construisiez votre villa, pilotiez un projet depuis la diaspora ou gériez un chantier professionnel, nous vous aidons à choisir une pierre authentique et cohérente avec votre architecture, vos quantités et vos contraintes de pose.
            </p>

            {/* 4 Core Pillars */}
            <div className="pt-4 border-t border-[#DDD5C7] space-y-3.5">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-[#EBE6DC] border border-[#DDD5C7] text-[#D84328] font-oswald font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-oswald font-bold text-[#111111] uppercase tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-xs font-sans text-[#666666] leading-relaxed mt-0.5">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('solutions')}
                className="group bg-[#D84328] hover:bg-[#b8331b] text-white px-5 py-3.5 rounded-lg flex items-center gap-3 transition-all duration-200 shadow-md cursor-pointer inline-flex"
              >
                <span className="text-xs sm:text-sm font-oswald tracking-wider font-bold uppercase">
                  DÉCOUVRIR TOUTES NOS PIERRES
                </span>
                <div className="w-5 h-5 rounded bg-white text-[#D84328] flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
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
