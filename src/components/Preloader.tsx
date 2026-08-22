import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Gem } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          id="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d0c0a] text-[#f4efe8] p-6"
        >
          {/* Subtle Ambient Background Light */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4a359]/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
            {/* Animated Stone Polygonal Silhouette */}
            <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 border border-[#d4a359]/30 rounded-2xl rotate-12"
              />
              <motion.div
                animate={{
                  rotate: [360, 270, 180, 90, 0],
                  scale: [1, 0.95, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-2 border border-[#c99a4e]/20 rounded-xl"
              />
              
              <div className="relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br from-[#2a241a] to-[#161410] border border-[#d4a359]/40 flex items-center justify-center shadow-2xl">
                <Gem className="w-8 h-8 text-[#d4a359] animate-pulse" />
              </div>
            </div>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-notable tracking-wider text-[#f5ebd7] mb-2"
            >
              NEGOCE <span className="text-[#d4a359]">DECOR HOUSE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm font-commissioner tracking-widest text-[#a89f91] uppercase mb-8"
            >
              Pierres Décoratives & Parements d'Exception
            </motion.p>

            {/* Progress Bar with Stone Texture Feel */}
            <div className="w-full bg-[#1e1c18] h-1.5 rounded-full overflow-hidden border border-[#332f26] mb-3 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#8c6729] via-[#d4a359] to-[#fae6b2] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="flex justify-between items-center w-full text-xs text-[#8c8273] font-mono">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#d4a359]" /> Chargement des textures minérales
              </span>
              <span className="font-semibold text-[#d4a359]">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
