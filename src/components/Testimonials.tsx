import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/stonesData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#151411] border-t border-[#29251f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242019] border border-[#3e382b] text-[#d4a359] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Retours d'Expérience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-notable text-[#f4efe8] mb-4">
            LA CONFIANCE DE NOS CLIENTS
          </h2>
          <p className="text-[#a89e90] text-base sm:text-lg font-commissioner">
            Propriétaires de villas, architectes de renom et promoteurs témoignent de la qualité de nos pierres et de notre rigueur de service.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testi) => (
            <motion.div
              key={testi.id}
              whileHover={{ y: -4 }}
              className="bg-[#1a1814] border border-[#332e25] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#d4a359]">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4a359]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#423a2d]" />
                </div>

                <p className="text-xs sm:text-sm text-[#cfc5b6] leading-relaxed mb-6 italic">
                  "{testi.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#29251e] flex items-center gap-3">
                <img
                  src={testi.avatarUrl}
                  alt={testi.author}
                  className="w-11 h-11 rounded-full object-cover border border-[#443e33]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-bold text-white">{testi.author}</h4>
                  <p className="text-[11px] text-[#a39886]">{testi.role} • {testi.companyOrLocation}</p>
                  <span className="text-[10px] text-[#d4a359] font-medium">{testi.project}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
