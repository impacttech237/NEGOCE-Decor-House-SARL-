import React,{useEffect,useState} from 'react';
import { ArrowRight, Building2, Home, MessageCircle } from 'lucide-react';
import { COMPANY_INFO,STONES_CATALOG } from '../data/stonesData';
import { ClientType,StoneProduct } from '../types';

interface Props{initialStone?:StoneProduct|null}
export const QuoteFabrecor:React.FC<Props>=({initialStone})=>{
 const [clientType,setClientType]=useState<ClientType>('particulier');
 const [stoneId,setStoneId]=useState(initialStone?.id||STONES_CATALOG[0].id);
 const [surface,setSurface]=useState(45); const [name,setName]=useState(''); const [phone,setPhone]=useState(''); const [city,setCity]=useState('Douala');
 useEffect(()=>{if(initialStone)setStoneId(initialStone.id)},[initialStone]);
 const stone=STONES_CATALOG.find(s=>s.id===stoneId)||STONES_CATALOG[0]; const volume=Math.round(surface*1.07); const estimate=volume*24000;
 const send=()=>{const text=encodeURIComponent(`Bonjour NEGOCE Decor House SARL, je souhaite un devis.\nClient : ${name||'À renseigner'}\nProfil : ${clientType}\nVille : ${city}\nPierre : ${stone.name}\nSurface : ${surface} m²\nTéléphone : ${phone||'À renseigner'}`);window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${text}`,'_blank')};
 return <section id="devis" className="bg-[#F2EEE5] py-16 lg:py-24">
  <div className="max-w-[1260px] mx-auto px-6 sm:px-10">
   <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
    <div><span className="text-[11px] uppercase tracking-[.22em] text-[#B95C38] font-semibold">Étape 1 sur 1</span><h2 className="font-display text-4xl sm:text-5xl font-semibold mt-2">Configurez votre demande</h2></div>
    <p className="max-w-md text-sm leading-6 text-[#615C54]">Le montant affiché reste indicatif. Le devis définitif intégrera le lot disponible, le transport et les contraintes du chantier.</p>
   </div>

   <div className="grid lg:grid-cols-12 bg-white border border-[#DDD5C8] rounded-[30px] overflow-hidden shadow-[0_24px_70px_rgba(50,40,25,.08)]">
    <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12">
     <div className="flex gap-2 mb-10">
      <button onClick={()=>setClientType('particulier')} className={`rounded-full px-5 py-3 text-sm flex items-center gap-2 transition-all cursor-pointer ${clientType==='particulier'?'bg-[#191A16] text-white':'bg-[#F2EEE5] text-[#6B655C]'}`}><Home className="w-4 h-4"/> Particulier</button>
      <button onClick={()=>setClientType('entreprise')} className={`rounded-full px-5 py-3 text-sm flex items-center gap-2 transition-all cursor-pointer ${clientType==='entreprise'?'bg-[#191A16] text-white':'bg-[#F2EEE5] text-[#6B655C]'}`}><Building2 className="w-4 h-4"/> Entreprise / BTP</button>
     </div>
     <div className="space-y-8">
      <label className="block"><span className="text-xs text-[#777168]">Pierre souhaitée</span><select value={stoneId} onChange={e=>setStoneId(e.target.value)} className="mt-2 w-full border-0 border-b border-[#CBC3B7] bg-transparent py-3 text-base focus:outline-none focus:border-[#B95C38] cursor-pointer">{STONES_CATALOG.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select></label>
      <label className="block"><span className="flex justify-between text-xs text-[#777168]"><span>Surface approximative</span><strong className="text-[#191A16] text-base">{surface} m²</strong></span><input type="range" min="5" max="500" step="5" value={surface} onChange={e=>setSurface(+e.target.value)} className="mt-4 w-full accent-[#B95C38]"/></label>
      <div className="grid sm:grid-cols-2 gap-7"><label><span className="text-xs text-[#777168]">Nom et prénom</span><input value={name} onChange={e=>setName(e.target.value)} placeholder="Votre nom" className="mt-2 w-full border-0 border-b border-[#CBC3B7] bg-transparent py-3 focus:outline-none focus:border-[#B95C38]"/></label><label><span className="text-xs text-[#777168]">Téléphone / WhatsApp</span><input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="6xx xx xx xx" className="mt-2 w-full border-0 border-b border-[#CBC3B7] bg-transparent py-3 focus:outline-none focus:border-[#B95C38]"/></label></div>
      <label className="block"><span className="text-xs text-[#777168]">Ville du chantier</span><input value={city} onChange={e=>setCity(e.target.value)} className="mt-2 w-full border-0 border-b border-[#CBC3B7] bg-transparent py-3 focus:outline-none focus:border-[#B95C38]"/></label>
     </div>
    </div>

    <div className="lg:col-span-5 bg-[#1A1B17] text-white p-6 sm:p-10 lg:p-12 flex flex-col">
     <div className="relative h-56 rounded-[20px] overflow-hidden"><img src={stone.imageUrl} alt={stone.name} className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/><span className="absolute bottom-4 left-4 text-sm">{stone.name}</span></div>
     <div className="py-8 space-y-4 text-sm text-white/55 border-b border-white/10"><div className="flex justify-between"><span>Surface indiquée</span><strong className="text-white">{surface} m²</strong></div><div className="flex justify-between"><span>Volume conseillé (+7%)</span><strong className="text-white">{volume} m²</strong></div></div>
     <div className="py-8"><span className="text-[10px] uppercase tracking-[.2em] text-[#D89068]">Budget matériaux indicatif</span><div className="font-sans text-4xl sm:text-5xl mt-3 font-semibold tracking-[-.04em] tabular-nums">≈ {estimate.toLocaleString()} <small className="text-sm font-medium tracking-normal text-white/50">FCFA</small></div><p className="mt-3 text-[11px] leading-5 text-white/35">Estimation non contractuelle, hors transport et pose.</p></div>
     <button onClick={send} className="mt-auto rounded-full bg-[#C85F36] hover:bg-[#dc7048] px-6 py-4 text-sm font-semibold flex items-center justify-center gap-4 transition-colors cursor-pointer"><MessageCircle className="w-4 h-4"/> Recevoir mon devis sur WhatsApp <ArrowRight className="w-4 h-4"/></button>
    </div>
   </div>
  </div>
 </section>
}
