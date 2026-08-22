import React from 'react';
import { motion } from 'motion/react';
import { 
  FolderSearch, 
  Layers, 
  CheckSquare, 
  Send
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: FolderSearch,
      title: "CONSULTATION ET ÉTUDE DU MÉTRÉ",
      desc: "Analyse minutieuse de vos plans de façade ou intérieurs, conseil personnalisé sur les teintes et calcul précis de la surface avec marge de découpe."
    },
    {
      icon: Layers,
      title: "SÉLECTION DE LA PIERRE ET DU FORMAT",
      desc: "Choix de la teinte, du relief et du format les plus cohérents avec votre façade, votre terrasse ou votre espace intérieur."
    },
    {
      icon: CheckSquare,
      title: "VÉRIFICATION ET PRÉPARATION",
      desc: "Contrôle visuel des lots, préparation des quantités et conseils pratiques pour limiter les pertes lors des découpes sur chantier."
    },
    {
      icon: Send,
      title: "LIVRAISON CHANTIER ET SUIVI DE POSE",
      desc: "Acheminement sécurisé par camion directement sur vos chantiers avec déchargement et mise en relation avec des maîtres-artisans qualifiés."
    }
  ];

  return (
    <section id="processus" className="py-20 lg:py-28 bg-[#F5F2EB] border-t border-[#E0D9CB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header in exact Fabrecor Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-oswald font-bold text-[#111111] leading-[1.02] tracking-tight uppercase">
              UN PROCESSUS MINÉRAL <span className="text-[#D84328]">STRUCTURÉ ET RIGOUREUX</span> DE LA CARRIÈRE À LA POSE
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm font-sans text-[#555555] leading-relaxed">
              Un parcours simple et rassurant, pensé pour éviter les erreurs de métrage et vous aider à passer de l'idée au chantier avec la pierre qui convient réellement.
            </p>
          </div>
        </div>

        {/* 4 Process Cards - Exact Fabrecor card aesthetic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#EBE6DC] hover:bg-[#E4DDD1] border border-[#DDD5C7] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group"
              >
                <div>
                  {/* Clean Outline Minimalist Icon */}
                  <div className="w-12 h-12 rounded-xl bg-transparent border border-[#333333]/20 flex items-center justify-center text-[#111111] group-hover:text-[#D84328] group-hover:border-[#D84328] transition-colors mb-6">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <h3 className="text-lg font-oswald font-bold text-[#111111] uppercase tracking-tight leading-snug mb-3 group-hover:text-[#D84328] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-sans text-[#666666] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DDD5C7]/60 flex items-center justify-between text-xs font-oswald text-[#999999]">
                  <span>ÉTAPE {idx + 1}</span>
                  <span className="font-bold text-[#111111]">0{idx + 1} / 04</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
