import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { StoneProduct } from '../types';
import { COMPANY_INFO } from '../data/stonesData';
interface HeroProps{onOpenQuote:()=>void;onSelectStone:(s:StoneProduct)=>void;onNavigate:(id:string)=>void}
export const HeroFabrecor:React.FC<HeroProps>=({onOpenQuote,onNavigate})=>{
 const whatsapp=()=>window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent("Bonjour NEGOCE Decor House SARL, j’aimerais être conseillé pour mon projet en pierre décorative.")}`,'_blank');
 return <section id="hero" className="relative min-h-screen bg-[#11110f] overflow-hidden text-white">
  <motion.img initial={{scale:1.08}} animate={{scale:1}} transition={{duration:2,ease:[.16,1,.3,1]}} src="/images/hero-negoce-villa.png" alt="Villa contemporaine habillée de pierre naturelle" className="absolute inset-0 w-full h-full object-cover object-[62%_center]"/>
  <div className="absolute inset-0 bg-black/35"/><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35"/>
  <div className="relative z-10 min-h-screen max-w-[1540px] mx-auto px-5 sm:px-10 lg:px-14 pt-32 pb-10 flex flex-col">
   <motion.div initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.9,delay:.15}} className="w-full">
    <div className="text-[11px] font-semibold tracking-[.24em] uppercase text-white/70 mb-3">Pierre décorative au Cameroun</div>
    <h1 className="font-display text-[20vw] sm:text-[16vw] lg:text-[190px] leading-[.72] tracking-[-.05em] font-black uppercase">
      <span className="block">Valorisez</span>
      <span className="block text-[#F1E8DE]">vos espaces</span>
    </h1>
   </motion.div>
   <div className="mt-auto grid lg:grid-cols-12 gap-8 items-end">
    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.45}} className="lg:col-span-5">
     <div className="flex flex-wrap gap-3"><button onClick={onOpenQuote} className="group bg-[#D9532D] hover:bg-[#ed653e] px-6 py-4 text-sm font-semibold flex items-center gap-6 transition-colors cursor-pointer">Demander un devis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/></button><button onClick={whatsapp} className="border border-white/35 bg-black/20 backdrop-blur-md px-5 py-4 text-sm font-medium flex items-center gap-3 hover:bg-white hover:text-black transition-all cursor-pointer"><MessageCircle className="w-4 h-4 text-[#43d878]"/> WhatsApp</button></div>
    </motion.div>
    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.55}} className="lg:col-span-5 lg:col-start-8 bg-black/28 backdrop-blur-sm border-l-4 border-[#D9532D] p-5 sm:p-7">
     <h2 className="font-display text-4xl sm:text-5xl font-black uppercase leading-[.92]">Une finition qui attire<br/>le regard et dure.</h2>
     <p className="mt-4 text-sm leading-6 text-white/70 max-w-lg">Parements, dallages et pierres naturelles pour votre maison, votre commerce ou votre prochain chantier.</p>
     <button onClick={()=>onNavigate('collection')} className="mt-5 text-xs font-semibold uppercase tracking-[.14em] text-[#F0A17F] hover:text-white transition-colors cursor-pointer">Découvrir la collection →</button>
    </motion.div>
   </div>
  </div>
 </section>
}
