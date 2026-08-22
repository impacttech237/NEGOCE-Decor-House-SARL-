import React,{useEffect,useState} from 'react';
import { ArrowUpRight,Menu,MessageCircle,X } from 'lucide-react';
import { COMPANY_INFO } from '../data/stonesData';
interface Props{onOpenQuote:()=>void;onNavigate:(id:string)=>void}
export const Navbar:React.FC<Props>=({onOpenQuote,onNavigate})=>{
 const [scrolled,setScrolled]=useState(false),[open,setOpen]=useState(false);
 useEffect(()=>{const f=()=>setScrolled(scrollY>30);addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);
 const links=[['collection','Pierres'],['processus','Approche'],['projets','Réalisations'],['domaines','Applications']];
 const go=(id:string)=>{setOpen(false);onNavigate(id)};
 const wa=()=>window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}`,'_blank');
 return <header className={`fixed z-50 top-0 inset-x-0 transition-all duration-500 ${scrolled?'py-3':'py-5'}`}>
  <div className={`max-w-[1440px] mx-auto px-5 sm:px-8 transition-all ${scrolled?'bg-[#F2EEE5]/92 backdrop-blur-xl rounded-full shadow-lg border border-black/5':'bg-transparent'}`}>
   <div className="h-[68px] flex items-center justify-between">
    <button onClick={()=>go('hero')} className={`text-left cursor-pointer ${scrolled?'text-[#171914]':'text-white'}`}><span className="font-display text-2xl sm:text-3xl font-bold leading-none">NEGOCE <em className="text-[#C85F36]">Decor</em></span><small className="block text-[8px] tracking-[.28em] uppercase opacity-55 mt-1">House SARL</small></button>
    <nav className={`hidden lg:flex gap-8 text-[12px] font-medium ${scrolled?'text-[#494740]':'text-white/70'}`}>{links.map(([id,l])=><button key={id} onClick={()=>go(id)} className="hover:text-[#C85F36] transition-colors cursor-pointer">{l}</button>)}</nav>
    <div className="hidden sm:flex items-center gap-2"><button onClick={wa} className={`w-11 h-11 rounded-full grid place-items-center border cursor-pointer ${scrolled?'border-black/10 text-[#20b95d]':'border-white/20 text-[#46dc7c]'}`} aria-label="WhatsApp"><MessageCircle className="w-4 h-4"/></button><button onClick={onOpenQuote} className="rounded-full bg-[#C85F36] hover:bg-[#dc7048] text-white px-5 py-3 text-xs font-semibold flex items-center gap-3 transition-colors cursor-pointer">Demander un devis <ArrowUpRight className="w-4 h-4"/></button></div>
    <button onClick={()=>setOpen(!open)} className={`lg:hidden p-2 ${scrolled?'text-black':'text-white'}`}>{open?<X/>:<Menu/>}</button>
   </div>
  </div>
  {open&&<div className="lg:hidden mx-5 mt-2 rounded-[24px] bg-[#F2EEE5] p-6 shadow-2xl"><div className="flex flex-col">{links.map(([id,l])=><button key={id} onClick={()=>go(id)} className="text-left py-4 border-b border-black/10 font-display text-2xl">{l}</button>)}<button onClick={onOpenQuote} className="mt-5 rounded-full bg-[#C85F36] text-white py-4">Demander un devis</button></div></div>}
 </header>
}
