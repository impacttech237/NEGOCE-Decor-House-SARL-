import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { StoneProduct } from '../types';
import { STONES_CATALOG } from '../data/stonesData';

interface Props { onOpenQuoteForStone: (stone: StoneProduct) => void; onOpenModal: (stone: StoneProduct) => void; }

export const SolutionsDark: React.FC<Props> = ({ onOpenQuoteForStone, onOpenModal }) => {
  const [activeId, setActiveId] = useState(STONES_CATALOG[0].id);
  const active = STONES_CATALOG.find(s => s.id === activeId) || STONES_CATALOG[0];

  return (
    <section id="solutions" className="bg-[#1A1B17] text-[#F2EDE3] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[.22em] uppercase text-[#C8774D] font-semibold">La collection</span>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-[86px] leading-[.88] mt-4">Une matière.<br/><em className="font-medium text-[#D6B89A]">Des expressions infinies.</em></h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-sm leading-7 text-white/55">Comparez les nuances, observez le relief et choisissez la pierre qui répond à votre architecture. Chaque lot possède ses propres variations naturelles.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col border-t border-white/15">
            {STONES_CATALOG.map((stone, index) => (
              <button key={stone.id} onClick={()=>setActiveId(stone.id)}
                className={`group text-left py-5 border-b border-white/12 flex gap-4 transition-all cursor-pointer ${activeId===stone.id?'text-white':'text-white/42 hover:text-white/75'}`}>
                <span className="text-[10px] mt-1.5 tabular-nums">0{index+1}</span>
                <span className="flex-1"><strong className="font-display text-xl sm:text-2xl font-semibold block leading-tight">{stone.name}</strong><small className="text-[11px] mt-1 block font-sans tracking-wide">{stone.colorLabel}</small></span>
                <ArrowRight className={`w-4 h-4 mt-2 transition-transform ${activeId===stone.id?'translate-x-0':'-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`}/>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 relative min-h-[540px] rounded-[28px] overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.img key={active.id} initial={{opacity:0,scale:1.03}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:.55}}
                src={active.imageUrl} alt={active.name} className="absolute inset-0 w-full h-full object-cover"/>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"/>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
              <span className="text-xs text-[#E7A67E]">{active.categoryLabel}</span>
              <div className="mt-3 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-xl"><h3 className="font-display text-4xl sm:text-5xl font-semibold">{active.name}</h3><p className="mt-3 text-sm leading-6 text-white/60 line-clamp-2">{active.description}</p></div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={()=>onOpenModal(active)} className="rounded-full border border-white/25 px-5 py-3 text-xs hover:bg-white hover:text-black transition-all cursor-pointer">Voir les détails</button>
                  <button onClick={()=>onOpenQuoteForStone(active)} className="rounded-full bg-[#C85F36] px-5 py-3 text-xs font-semibold flex items-center gap-2 hover:bg-[#dc7048] transition-all cursor-pointer"><Check className="w-3.5 h-3.5"/> Choisir</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
