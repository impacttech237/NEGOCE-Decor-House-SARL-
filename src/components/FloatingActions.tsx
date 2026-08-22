import React from 'react';
import { MessageCircle, Phone, FileText, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/stonesData';

interface FloatingActionsProps {
  onOpenQuote: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Bonjour NEGOCE Decor House SARL, je souhaite des renseignements et un devis pour mes travaux en pierre décorative.");
    window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="w-10 h-10 rounded-full bg-[#1e1c18] border border-[#3d372c] text-[#a39886] hover:text-white hover:border-[#d4a359] flex items-center justify-center shadow-xl transition-all cursor-pointer hidden sm:flex"
        title="Haut de page"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Instant Quote Floating Button */}
      <button
        onClick={onOpenQuote}
        className="px-4 py-2.5 rounded-full bg-[#d4a359] hover:bg-[#e2b56e] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
        id="floating-quote-btn"
      >
        <FileText className="w-4 h-4" />
        <span className="hidden md:inline">Devis Gratuit</span>
      </button>

      {/* Floating WhatsApp CTA */}
      <button
        onClick={openWhatsApp}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all cursor-pointer relative group"
        title="Contacter sur WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#11100ee6] backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-[#3e382b] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Discutez en direct sur WhatsApp
        </span>
      </button>
    </div>
  );
};
