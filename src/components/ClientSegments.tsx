import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  Building2, 
  Check, 
  ArrowRight, 
  Truck, 
  FileCheck, 
  ShieldCheck, 
  Sparkles,
  PhoneCall,
  Download
} from 'lucide-react';
import { ClientType } from '../types';
import { COMPANY_INFO } from '../data/stonesData';

interface ClientSegmentsProps {
  onOpenQuoteForType: (type: ClientType) => void;
}

export const ClientSegments: React.FC<ClientSegmentsProps> = ({ onOpenQuoteForType }) => {
  const [activeTab, setActiveTab] = useState<ClientType>('particulier');

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-[#151411] border-t border-[#29251f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242019] border border-[#3e382b] text-[#d4a359] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Offres Dédiées Sur Mesure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-notable text-[#f4efe8] mb-4">
            POUR PARTICULIERS & PROFESSIONNELS
          </h2>
          <p className="text-[#a89e90] text-base sm:text-lg font-commissioner">
            Que vous construisiez la villa de vos rêves ou meniez un projet immobilier d'envergure, nous calibrons nos volumes, nos conseils et notre logistique à vos impératifs.
          </p>
        </div>

        {/* Segment Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#1c1a16] p-1.5 rounded-2xl border border-[#332e25] inline-flex">
            <button
              onClick={() => setActiveTab('particulier')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2.5 cursor-pointer ${
                activeTab === 'particulier'
                  ? 'bg-[#d4a359] text-[#11100e] shadow-lg'
                  : 'text-[#9c9181] hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Particuliers & Résidences</span>
            </button>

            <button
              onClick={() => setActiveTab('entreprise')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2.5 cursor-pointer ${
                activeTab === 'entreprise'
                  ? 'bg-[#d4a359] text-[#11100e] shadow-lg'
                  : 'text-[#9c9181] hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Entreprises, BTP & Architectes</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        {activeTab === 'particulier' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1a1814] border border-[#332e25] rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 rounded-md bg-[#2d271f] text-[#d4a359] text-xs font-semibold uppercase">
                Projets Privés & Rénovations
              </div>
              <h3 className="text-2xl sm:text-3xl font-notable text-white leading-tight">
                Donnez à votre villa l'allure d'un domaine d'exception
              </h3>
              <p className="text-sm sm:text-base text-[#b8ad9e] leading-relaxed">
                Habillage de façades extérieures, colonnes de porche, cheminées, murs TV de salon, terrasses en opus et clôtures. Nos experts vous accompagnent du choix de la teinte jusqu'au métrage précis.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Conseil personnalisé gratuit sur échantillons réels",
                  "Calcul précis des surfaces et marge de pose (évite le gaspillage)",
                  "Livraison directe à domicile avec déchargement sécurisé",
                  "Recommandation de maîtres-artisans poseurs agréés"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#e2ded6]">
                    <div className="w-5 h-5 rounded-full bg-[#d4a359]/20 text-[#d4a359] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenQuoteForType('particulier')}
                  className="px-6 py-3.5 rounded-xl bg-[#d4a359] hover:bg-[#e2b56e] text-black font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <span>Mon Devis Villa Particulier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-5 py-3.5 rounded-xl bg-[#25221b] hover:bg-[#342f26] border border-[#3b3429] text-[#e8dfd2] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-[#d4a359]" />
                  <span>Parler à un conseiller</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#332e25] h-52">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
                  alt="Piliers de porche en pierre dorée"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#332e25] h-52">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                  alt="Terrasse dallage opus incertum"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#332e25] h-52 col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
                  alt="Villa contemporaine habillée de pierre naturelle"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1a1814] border border-[#332e25] rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 rounded-md bg-[#2d271f] text-[#d4a359] text-xs font-semibold uppercase">
                Grands Comptes, Promoteurs & BTP
              </div>
              <h3 className="text-2xl sm:text-3xl font-notable text-white leading-tight">
                Approvisionnement fiable en gros volumes & conformité technique
              </h3>
              <p className="text-sm sm:text-base text-[#b8ad9e] leading-relaxed">
                Hôtels de luxe, programmes résidentiels, sièges d'entreprises et marchés publics. Nous garantissons une disponibilité continue de nos gisements avec tarifs préférentiels au m² et cadencement logistique.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Tarifs dégressifs par tranches de 100 m², 500 m² et +1000 m²",
                  "Fiches techniques complètes (densité, absorption d'eau, résistance à la compression)",
                  "Capacité d'extraction et de stockage permanent (+15 000 m² en stock)",
                  "Facturation SARL conforme avec bordereaux de livraison et traçabilité"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#e2ded6]">
                    <div className="w-5 h-5 rounded-full bg-[#d4a359]/20 text-[#d4a359] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenQuoteForType('entreprise')}
                  className="px-6 py-3.5 rounded-xl bg-[#d4a359] hover:bg-[#e2b56e] text-black font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <span>Demande Devis Pro & Appel d'Offre</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => alert("Le catalogue technique NEGOCE Decor House SARL (PDF) est en cours de téléchargement.")}
                  className="px-5 py-3.5 rounded-xl bg-[#25221b] hover:bg-[#342f26] border border-[#3b3429] text-[#e8dfd2] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#d4a359]" />
                  <span>Brochure BTP (PDF)</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#332e25] h-52">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Immeuble tertiaire haut standing"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#332e25] h-52">
                <img
                  src="https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?auto=format&fit=crop&w=800&q=80"
                  alt="Stockage carrière et logistique par camion"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#332e25] h-52 col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                  alt="Resort hôtelier en pierre naturelle"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
