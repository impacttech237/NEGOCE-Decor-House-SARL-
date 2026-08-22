import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/stonesData';

interface Props { onOpenQuote: () => void; onNavigate: (id:string)=>void; }

export const FooterFabrecor: React.FC<Props> = ({onOpenQuote,onNavigate}) => {
  const whatsapp=()=>window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}`,'_blank');
  return (
    <footer className="bg-[#F2EEE5] px-4 sm:px-7 pt-20 pb-5">
      <div className="relative max-w-[1480px] mx-auto rounded-[38px] bg-[#171914] text-[#F4F0E7] px-6 sm:px-12 lg:px-16 pt-20 sm:pt-24 overflow-visible">
        <div className="absolute z-30 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#C85F36] text-white grid place-items-center font-display text-5xl font-bold shadow-[0_16px_35px_rgba(0,0,0,.28)] border-[7px] border-[#F2EEE5]">N</div>
        <div className="absolute inset-0 rounded-[38px] opacity-[.035] pointer-events-none" style={{backgroundImage:'radial-gradient(#fff 1px,transparent 1px)',backgroundSize:'28px 28px'}}/>

        <div className="relative text-center max-w-3xl mx-auto">
          <div className="font-display text-4xl sm:text-6xl font-semibold">NEGOCE <em className="text-[#D89068]">Decor House</em></div>
          <p className="mt-3 text-white/55 text-sm sm:text-base">La pierre naturelle qui donne de la valeur à vos espaces.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <button onClick={onOpenQuote} className="group rounded-full bg-[#C85F36] hover:bg-[#dc7048] px-7 py-4 text-sm font-semibold flex items-center justify-center gap-5 transition-colors cursor-pointer">Démarrer un projet <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/></button>
            <button onClick={whatsapp} className="rounded-full bg-[#F2EEE5] text-[#171914] hover:bg-white px-7 py-4 text-sm font-semibold flex items-center justify-center gap-4 transition-colors cursor-pointer"><MessageCircle className="w-4 h-4 text-[#20b95d]"/> Parler sur WhatsApp</button>
          </div>
        </div>

        <div className="relative mt-16 sm:mt-20 pt-10 pb-12 border-t border-white/10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
          <div><p className="text-[10px] uppercase tracking-[.22em] text-[#D89068] font-semibold">Nous trouver</p><h3 className="font-display text-3xl mt-3">Contact</h3><div className="mt-5 space-y-2 text-sm text-white/55"><p>Cameroun</p><p>{COMPANY_INFO.phone}</p><p>{COMPANY_INFO.email}</p><p>Lundi — Samedi</p></div></div>
          <div><p className="text-[10px] uppercase tracking-[.22em] text-[#D89068] font-semibold">Explorer</p><h3 className="font-display text-3xl mt-3">Navigation</h3><div className="mt-5 grid grid-cols-2 gap-y-3 text-sm text-white/55">{[['collection','Pierres'],['processus','Notre approche'],['projets','Réalisations'],['domaines','Applications'],['devis','Devis'],['hero','Accueil']].map(([id,label])=><button key={id} onClick={()=>onNavigate(id)} className="text-left hover:text-white transition-colors cursor-pointer">{label} ↗</button>)}</div></div>
          <div><p className="text-[10px] uppercase tracking-[.22em] text-[#D89068] font-semibold">Notre vision</p><h3 className="font-display text-3xl mt-3">Faire reconnaître<br/>la valeur de la pierre.</h3><p className="mt-5 text-sm leading-6 text-white/50">Pour les maisons camerounaises, les lieux d’accueil et les projets professionnels qui veulent conjuguer présence, authenticité et durée.</p></div>
        </div>

        <div className="relative py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[11px] text-white/35">
          <span>© {new Date().getFullYear()} NEGOCE Decor House SARL</span><span>Mentions légales · Confidentialité</span><span>Conçu par Impact Tech</span>
        </div>
      </div>
    </footer>
  );
};
