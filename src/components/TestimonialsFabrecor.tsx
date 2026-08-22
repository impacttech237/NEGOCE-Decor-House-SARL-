import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/stonesData';

const ProjectCard=({index}:{index:number})=>{
 const images=['/images/realisation-porche.jpeg','/images/realisation-facade.jpeg','/images/realisation-terrasse.jpeg'];
 const labels=['Façade & porche','Parement de façade','Terrasse en pierre'];
 return <article className="relative h-[300px] rounded-[26px] overflow-hidden bg-[#211E1A]"><img src={images[index%3]} alt={labels[index%3]} className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"/><div className="absolute left-6 bottom-6 text-white"><span className="text-[10px] tracking-[.18em] uppercase text-[#F28B63]">Projet en pierre naturelle</span><h3 className="font-display text-3xl uppercase mt-1">{labels[index%3]}</h3></div></article>
}

const ReviewCard=({review,dark=false}:{review:(typeof TESTIMONIALS)[number],dark?:boolean})=><article className={`min-h-[300px] rounded-[26px] border p-7 flex flex-col justify-between ${dark?'bg-[#443833] border-[#443833] text-white':'bg-[#FAF7F0] border-[#DCD4C8] text-[#1A1A18]'}`}><div><div className="flex gap-1 text-[#DD5B35]">{[0,1,2,3,4].map(i=><Star key={i} className="w-4 h-4 fill-current"/>)}</div><p className={`mt-7 text-sm sm:text-base leading-7 ${dark?'text-white/75':'text-[#514D47]'}`}>“{review.content}”</p></div><div className={`pt-6 mt-7 border-t ${dark?'border-white/15':'border-black/10'}`}><h4 className="font-display text-2xl font-bold uppercase">{review.author}</h4><p className={`text-xs mt-1 ${dark?'text-white/50':'text-[#7A746B]'}`}>{review.role} · {review.companyOrLocation}</p></div></article>

export const TestimonialsFabrecor:React.FC=()=>{
 const columns=[
  [<ReviewCard review={TESTIMONIALS[0]}/>,<ProjectCard index={0}/>,<ReviewCard review={TESTIMONIALS[1]} dark/>],
  [<ProjectCard index={1}/>,<ReviewCard review={TESTIMONIALS[2]}/>,<ReviewCard review={TESTIMONIALS[0]} dark/>],
  [<ReviewCard review={TESTIMONIALS[1]}/>,<ProjectCard index={2}/>,<ReviewCard review={TESTIMONIALS[2]} dark/>]
 ];
 return <section className="bg-[#F5F1E8] py-24 lg:py-32 overflow-hidden border-t border-[#DED7CA]">
  <div className="max-w-[1480px] mx-auto px-5 sm:px-8">
   <div className="text-center mb-14"><span className="text-[11px] font-semibold uppercase tracking-[.22em] text-[#D9532D]">Ils parlent de leur expérience</span><h2 className="font-display text-5xl sm:text-7xl font-black uppercase mt-3">La confiance se construit<br/><span className="text-[#D9532D]">sur le terrain.</span></h2></div>
   <div className="relative h-[760px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
    <div className="grid md:grid-cols-3 gap-5 h-full">
     {columns.map((items,col)=><div key={col} className={`review-marquee ${col===1?'review-marquee-reverse':''}`}><div className="space-y-5">{[...items,...items].map((item,i)=><React.Fragment key={i}>{React.cloneElement(item,{key:i})}</React.Fragment>)}</div></div>)}
    </div>
   </div>
   <p className="mt-8 text-center text-[11px] text-[#8A8379]">Avis clients à confirmer avec les références officielles avant publication.</p>
  </div>
 </section>
}
