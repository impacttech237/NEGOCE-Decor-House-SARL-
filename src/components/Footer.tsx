import React from 'react';
import { 
  Gem, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Sparkles, 
  ArrowUp,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO, STONES_CATALOG } from '../data/stonesData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent("Bonjour NEGOCE Decor House SARL, je souhaite des informations sur vos pierres décoratives.");
    window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#0b0a09] border-t border-[#24201a] text-[#a39886] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#211e18]">
          
          {/* Col 1: Brand & SARL Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4a359] to-[#80581f] p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#151411] rounded-[7px] flex items-center justify-center">
                  <Gem className="w-5 h-5 text-[#d4a359]" />
                </div>
              </div>
              <div>
                <span className="block font-notable text-lg tracking-wider text-white leading-none">
                  NEGOCE <span className="text-[#d4a359]">DECOR</span>
                </span>
                <span className="block font-commissioner text-[10px] tracking-[0.2em] text-[#8c8273] uppercase">
                  House SARL
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8f8474] leading-relaxed">
              Leader dans l'extraction, le calibrage et la fourniture de pierres décoratives nobles, barrettes de parement naturel, quartzites, ardoises et dallages pour villas et projets BTP d'envergure.
            </p>

            <div className="text-[11px] text-[#736a5c] font-mono">
              {COMPANY_INFO.rcNumber}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-notable text-white text-xs uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {[
                { id: 'hero', label: 'Accueil' },
                { id: 'matiere', label: 'Nos Pierres' },
                { id: 'transformation', label: 'Avant / Après' },
                { id: 'realisations', label: 'Chantiers Livrés' },
                { id: 'solutions', label: 'Particuliers & Pros' },
                { id: 'simulateur', label: 'Simulateur Devis' },
                { id: 'expertise', label: 'Savoir-Faire' },
                { id: 'faq', label: 'FAQ' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-[#d4a359] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Stone Types */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-notable text-white text-xs uppercase tracking-wider">Collection Minérale</h4>
            <ul className="space-y-2 text-[#8f8474]">
              {STONES_CATALOG.slice(0, 5).map((s) => (
                <li key={s.id} className="truncate">
                  <span className="text-[#d4a359] mr-1.5">•</span>
                  <span>{s.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacts & Showroom */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-notable text-white text-xs uppercase tracking-wider">Showroom & Dépôts</h4>
            
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4a359] shrink-0 mt-0.5" />
                <span>Douala & Yaoundé, Cameroun</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4a359] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-[#d4a359]">{COMPANY_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <button onClick={openWhatsApp} className="text-[#25D366] hover:underline cursor-pointer">
                  WhatsApp Commercial
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#d4a359] shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6b6255]">
          <div>
            © {new Date().getFullYear()} NEGOCE Decor House SARL. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4">
            <span>Pierres Naturelles & Parements d'Exception</span>
            <span>•</span>
            <button onClick={onOpenQuote} className="text-[#d4a359] hover:underline cursor-pointer font-semibold">
              Demander un devis
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
