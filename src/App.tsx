import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroFabrecor } from './components/HeroFabrecor';
import { ProcessSection } from './components/ProcessSection';
import { ExcellenceShowcase } from './components/ExcellenceShowcase';
import { CollectionFabrecor } from './components/CollectionFabrecor';
import { SolutionsDark } from './components/SolutionsDark';
import { ProjectsFabrecor } from './components/ProjectsFabrecor';
import { SectorsFabrecor } from './components/SectorsFabrecor';
import { TransformationFabrecor } from './components/TransformationFabrecor';
import { TestimonialsFabrecor } from './components/TestimonialsFabrecor';
import { QuoteFabrecor } from './components/QuoteFabrecor';
import { FooterFabrecor } from './components/FooterFabrecor';
import { StoneModalFabrecor } from './components/StoneModalFabrecor';
import { StoneProduct } from './types';
import { COMPANY_INFO, STONES_CATALOG } from './data/stonesData';
import { MessageCircle } from 'lucide-react';

export function App() {
  const [selectedStoneForModal, setSelectedStoneForModal] = useState<StoneProduct | null>(null);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname === '/devis') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuote = () => {
    window.location.href = '/devis';
  };

  const handleSelectStoneForQuote = (stone: StoneProduct) => {
    window.location.href = `/devis?stone=${encodeURIComponent(stone.id)}`;
  };

  const isQuotePage = window.location.pathname === '/devis';
  const quoteStoneId = new URLSearchParams(window.location.search).get('stone');
  const quoteStone = quoteStoneId
    ? STONES_CATALOG.find((stone) => stone.id === quoteStoneId) || null
    : null;

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent("Bonjour NEGOCE Decor House SARL, je souhaite des informations sur vos pierres décoratives.");
    window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#141414] font-sans selection:bg-[#D84328] selection:text-white">
      
      {/* 1. Header / Navbar */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        onNavigate={scrollToSection}
      />

      <main>
        {isQuotePage ? (
          <>
            <section className="relative pt-36 pb-16 bg-[#1A1B17] text-white overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img src="/images/pierre-doree-miel.jpeg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1B17] via-[#1A1B17]/95 to-[#1A1B17]/70" />
              <div className="relative max-w-[1260px] mx-auto px-6 sm:px-10">
                <button onClick={() => window.location.href = '/'} className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer">← Retour à l’accueil</button>
                <p className="mt-10 text-[11px] uppercase tracking-[.22em] text-[#D89068] font-semibold">Demande de devis</p>
                <h1 className="font-display text-5xl sm:text-7xl lg:text-[92px] leading-[.88] mt-4 max-w-4xl">Construisons votre projet,<br/><em className="text-[#D6B89A] font-medium">pierre par pierre.</em></h1>
                <p className="mt-7 max-w-xl text-sm sm:text-base leading-7 text-white/60">Quelques informations suffisent pour préparer une première estimation. Un conseiller reprend ensuite avec vous les détails du chantier, les quantités et la livraison.</p>
              </div>
            </section>
            <QuoteFabrecor initialStone={quoteStone} />
          </>
        ) : (
          <>
        {/* 2. Hero Section in Fabrecor Style */}
        <HeroFabrecor
          onOpenQuote={handleOpenQuote}
          onSelectStone={(stone) => setSelectedStoneForModal(stone)}
          onNavigate={scrollToSection}
        />

        {/* 3. Process Steps (A Streamlined Production Process...) */}
        <ProcessSection />

        {/* 4. Manufacturing & Mineral Excellence Showcase */}
        <ExcellenceShowcase
          onOpenQuote={handleOpenQuote}
          onNavigate={scrollToSection}
        />

        {/* 5. Mineral Collection & Filter Catalog */}
        <CollectionFabrecor
          onSelectStone={(stone) => setSelectedStoneForModal(stone)}
          onOpenQuoteForStone={handleSelectStoneForQuote}
        />

        {/* 6. Signature Dark Section: Complete Mineral Solutions & Accordion */}
        <SolutionsDark
          onOpenQuoteForStone={handleSelectStoneForQuote}
          onOpenModal={(stone) => setSelectedStoneForModal(stone)}
        />

        {/* 7. Real Projects Showcase & Slider (Watermark PROJECTS) */}
        <ProjectsFabrecor />

        {/* 8. Industries / Domaines We Serve with Interactive Hover Cards */}
        <SectorsFabrecor
          onOpenQuote={handleOpenQuote}
        />

        {/* 9. Transformation & Measurable Results (Before / After) */}
        <TransformationFabrecor
          onOpenQuote={handleOpenQuote}
        />

        <TestimonialsFabrecor />

          </>
        )}
      </main>

      {/* 12. Monumental Footer */}
      <FooterFabrecor
        onOpenQuote={handleOpenQuote}
        onNavigate={scrollToSection}
      />

      {/* 13. Stone Details Modal */}
      {!isQuotePage && <StoneModalFabrecor
        stone={selectedStoneForModal}
        onClose={() => setSelectedStoneForModal(null)}
        onSelectForQuote={handleSelectStoneForQuote}
      />}

      {/* 14. Floating WhatsApp Action Button */}
      <button
        onClick={handleOpenWhatsApp}
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-black p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer group"
        aria-label="Contacter sur WhatsApp"
        title="Discuter directement sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-black text-black" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-oswald text-xs uppercase font-bold tracking-wider pl-0 group-hover:pl-2 text-black">
          WhatsApp Direct
        </span>
      </button>

    </div>
  );
}

export default App;
