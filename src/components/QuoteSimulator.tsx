import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  FileText, 
  Sparkles, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Calculator, 
  MapPin, 
  Phone, 
  User, 
  Building2, 
  Home, 
  AlertCircle
} from 'lucide-react';
import { STONES_CATALOG, COMPANY_INFO } from '../data/stonesData';
import { QuoteFormState, ClientType, ProjectUsage, StoneProduct } from '../types';

interface QuoteSimulatorProps {
  initialStone?: StoneProduct | null;
  initialType?: ClientType;
}

export const QuoteSimulator: React.FC<QuoteSimulatorProps> = ({
  initialStone,
  initialType = 'particulier'
}) => {
  const [formData, setFormData] = useState<QuoteFormState>({
    clientType: initialType,
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    city: 'Douala',
    projectType: 'facade_exterieure',
    stoneSelected: initialStone ? initialStone.id : STONES_CATALOG[0].id,
    surfaceM2: 45,
    needInstallation: true,
    timeframe: '1_month',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialStone) {
      setFormData(prev => ({ ...prev, stoneSelected: initialStone.id }));
    }
  }, [initialStone]);

  useEffect(() => {
    if (initialType) {
      setFormData(prev => ({ ...prev, clientType: initialType }));
    }
  }, [initialType]);

  const selectedStoneObj = STONES_CATALOG.find(s => s.id === formData.stoneSelected) || STONES_CATALOG[0];

  // Calculations
  const basePricePerM2 = 24000; // Average base FCFA
  const marginSurface = Math.round(formData.surfaceM2 * 1.07); // +7% safety cut margin
  const estimatedMaterialTotal = marginSurface * basePricePerM2;
  const estimatedInstallationTotal = formData.needInstallation ? formData.surfaceM2 * 6500 : 0;
  const estimatedGrandTotal = estimatedMaterialTotal + estimatedInstallationTotal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Veuillez renseigner votre nom et votre numéro de téléphone.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const transmitViaWhatsApp = () => {
    const text = encodeURIComponent(
      `*DEMANDE DE DEVIS — NEGOCE DECOR HOUSE SARL*\n` +
      `------------------------------------\n` +
      `👤 *Client :* ${formData.fullName} (${formData.clientType === 'entreprise' ? `Société: ${formData.companyName || 'Entreprise'}` : 'Particulier'})\n` +
      `📞 *Téléphone :* ${formData.phone}\n` +
      `📍 *Ville / Chantier :* ${formData.city}\n` +
      `💎 *Pierre choisie :* ${selectedStoneObj.name}\n` +
      `📐 *Surface estimée :* ${formData.surfaceM2} m² (+ marge 7% = ${marginSurface} m²)\n` +
      `🏗️ *Type de projet :* ${formData.projectType}\n` +
      `🛠️ *Pose souhaitée :* ${formData.needInstallation ? 'Oui, avec poseurs' : 'Fourniture seule'}\n` +
      `📅 *Délai souhaité :* ${formData.timeframe}\n` +
      `💬 *Note :* ${formData.message || 'Aucune'}\n` +
      `------------------------------------\n` +
      `💰 *Estimation indicative :* ~${estimatedGrandTotal.toLocaleString()} FCFA\n` +
      `Merci de me contacter pour confirmation du devis officiel.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="simulateur" className="py-20 lg:py-28 bg-[#151411] border-t border-[#29251f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242019] border border-[#3e382b] text-[#d4a359] text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulateur en Ligne 100% Gratuit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-notable text-[#f4efe8] mb-4">
            SIMULER MON DEVIS EN 2 MINUTES
          </h2>
          <p className="text-[#a89e90] text-base sm:text-lg font-commissioner">
            Calculez instantanément le volume de pierre nécessaire, la marge de sécurité et obtenez une estimation chiffrée transmise directement à nos métreurs.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-[#1a1814] border border-[#d4a359] rounded-3xl p-8 text-center shadow-2xl"
          >
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-notable text-white mb-2">
              DEMANDE DE DEVIS ENREGISTRÉE AVEC SUCCÈS !
            </h3>
            <p className="text-sm text-[#b8ad9e] leading-relaxed mb-6">
              Merci <strong className="text-white">{formData.fullName}</strong>. Votre dossier pour <strong>{formData.surfaceM2} m² de {selectedStoneObj.name}</strong> à <strong>{formData.city}</strong> a bien été transmis à l'équipe commerciale de NEGOCE Decor House SARL. Un conseiller va vous contacter sous 24h ouvrées.
            </p>

            <div className="bg-[#201d18] border border-[#332e25] rounded-2xl p-5 mb-6 text-left text-xs space-y-2">
              <div className="flex justify-between text-[#a89d8e]">
                <span>Pierre retenue :</span>
                <span className="font-semibold text-[#d4a359]">{selectedStoneObj.name}</span>
              </div>
              <div className="flex justify-between text-[#a89d8e]">
                <span>Métrage conseillé (+7%) :</span>
                <span className="font-semibold text-white">{marginSurface} m²</span>
              </div>
              <div className="flex justify-between text-[#a89d8e]">
                <span>Budget estimatif :</span>
                <span className="font-bold text-white text-sm">~{estimatedGrandTotal.toLocaleString()} FCFA</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={transmitViaWhatsApp}
                className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ouvrir sur WhatsApp pour suivi direct</span>
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-3.5 rounded-xl bg-[#27231c] hover:bg-[#342e24] text-[#cfc4b4] text-xs font-semibold cursor-pointer"
              >
                Calculer un autre projet
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Steps: Configurator Fields */}
            <div className="lg:col-span-7 bg-[#1a1814] border border-[#332e25] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              {/* Step 1: Profil */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#d4a359] mb-2">
                  1. Vous êtes :
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, clientType: 'particulier' })}
                    className={`py-3 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formData.clientType === 'particulier'
                        ? 'bg-[#d4a359] text-black border-[#d4a359]'
                        : 'bg-[#221f19] text-[#9e9383] border-[#383227] hover:border-[#4d4535]'
                    }`}
                  >
                    <Home className="w-4 h-4" />
                    <span>Particulier / Propriétaire</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, clientType: 'entreprise' })}
                    className={`py-3 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formData.clientType === 'entreprise'
                        ? 'bg-[#d4a359] text-black border-[#d4a359]'
                        : 'bg-[#221f19] text-[#9e9383] border-[#383227] hover:border-[#4d4535]'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Entreprise / BTP / Archi</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Stone Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#d4a359] mb-2">
                  2. Type de pierre décorative :
                </label>
                <select
                  value={formData.stoneSelected}
                  onChange={(e) => setFormData({ ...formData, stoneSelected: e.target.value })}
                  className="w-full bg-[#221f19] border border-[#383227] text-[#f4efe8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4a359] cursor-pointer"
                >
                  {STONES_CATALOG.map((stone) => (
                    <option key={stone.id} value={stone.id}>
                      {stone.name} ({stone.categoryLabel})
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Project Type */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#d4a359] mb-2">
                  3. Emplacement & Type d'ouvrage :
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'facade_exterieure', label: 'Façade Extérieure' },
                    { id: 'piliers_clotures', label: 'Piliers & Clôture' },
                    { id: 'interieur_salon', label: 'Mur Salon / TV' },
                    { id: 'terrasse_piscine', label: 'Terrasse / Piscine' },
                    { id: 'cheminee_decoration', label: 'Cheminée / Déco' },
                    { id: 'autre', label: 'Autre Ouvrage' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: item.id as ProjectUsage })}
                      className={`p-2.5 rounded-lg border text-center font-medium transition-all cursor-pointer ${
                        formData.projectType === item.id
                          ? 'bg-[#332c20] border-[#d4a359] text-white'
                          : 'bg-[#1f1d18] border-[#312c23] text-[#998e7f] hover:border-[#443d30]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Surface M2 Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#d4a359]">
                    4. Surface estimée à habiller :
                  </label>
                  <span className="text-base font-bold text-white bg-[#2a241b] px-3 py-1 rounded-lg border border-[#3d362a]">
                    {formData.surfaceM2} m²
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={formData.surfaceM2}
                  onChange={(e) => setFormData({ ...formData, surfaceM2: Number(e.target.value) })}
                  className="w-full accent-[#d4a359] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#786e60] mt-1 font-mono">
                  <span>5 m²</span>
                  <span>100 m²</span>
                  <span>250 m²</span>
                  <span>500+ m²</span>
                </div>
              </div>

              {/* Step 5: Location & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#29251f]">
                <div>
                  <label className="block text-xs text-[#a39886] mb-1">Votre Nom Complet *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#756c5e] absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Paul Mballa"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#221f19] border border-[#383227] text-white rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-[#d4a359]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#a39886] mb-1">Numéro Téléphone / WhatsApp *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#756c5e] absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="Ex: 699 00 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#221f19] border border-[#383227] text-white rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-[#d4a359]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#a39886] mb-1">Ville du Chantier</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#756c5e] absolute left-3 top-3.5" />
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#221f19] border border-[#383227] text-white rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-[#d4a359] cursor-pointer"
                    >
                      <option value="Douala">Douala</option>
                      <option value="Yaoundé">Yaoundé</option>
                      <option value="Kribi">Kribi</option>
                      <option value="Bafoussam">Bafoussam</option>
                      <option value="Garoua">Garoua</option>
                      <option value="Autre Cameroun / CEMAC">Autre Cameroun / CEMAC</option>
                    </select>
                  </div>
                </div>

                {formData.clientType === 'entreprise' && (
                  <div>
                    <label className="block text-xs text-[#a39886] mb-1">Nom de l'Entreprise / Cabinet</label>
                    <input
                      type="text"
                      placeholder="Ex: Cabinet Archi BTP"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-[#221f19] border border-[#383227] text-white rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#d4a359]"
                    />
                  </div>
                )}
              </div>

            </div>

            {/* Right Summary & Instant Price Box */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#1a1814] border border-[#332e25] rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#2a261e]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#d4a359]">Récapitulatif</span>
                  <span className="text-[11px] text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-md font-semibold">
                    Devis Instantané
                  </span>
                </div>

                {/* Selected Stone Preview */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#221f19] border border-[#383227] mb-5">
                  <img
                    src={selectedStoneObj.imageUrl}
                    alt={selectedStoneObj.name}
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">{selectedStoneObj.name}</h4>
                    <p className="text-[11px] text-[#a39886]">{selectedStoneObj.colorLabel}</p>
                    <span className="text-[11px] text-[#d4a359] font-medium">{selectedStoneObj.priceRange}</span>
                  </div>
                </div>

                {/* Surface Breakdown */}
                <div className="space-y-2.5 text-xs text-[#b8ad9e] mb-6">
                  <div className="flex justify-between">
                    <span>Surface murale nette :</span>
                    <span className="font-semibold text-white">{formData.surfaceM2} m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marge de coupe conseillée (+7%) :</span>
                    <span className="font-semibold text-[#d4a359]">+{marginSurface - formData.surfaceM2} m²</span>
                  </div>
                  <div className="flex justify-between font-bold text-white pt-2 border-t border-[#29251e]">
                    <span>Quantité totale à commander :</span>
                    <span className="text-[#d4a359]">{marginSurface} m²</span>
                  </div>
                </div>

                {/* Estimation Total Indicator */}
                <div className="bg-[#242019] border border-[#3e382b] rounded-2xl p-4 mb-6">
                  <span className="text-[11px] text-[#998e7e] block mb-1 uppercase tracking-wider">
                    Budget Matériaux Estimatif :
                  </span>
                  <div className="text-2xl sm:text-3xl font-notable text-[#f4efe8]">
                    ~{estimatedMaterialTotal.toLocaleString()} <span className="text-sm font-normal text-[#d4a359]">FCFA</span>
                  </div>
                  <p className="text-[10px] text-[#7a7061] mt-1">
                    * Prix indicatif calculé hors transport spécifique et accessoires de mortier.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-[#2a261e]">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d4a359] to-[#b38032] hover:from-[#e2b56e] hover:to-[#c6903f] text-[#11100e] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Traitement...' : 'Valider & Recevoir le Devis'}</span>
                </button>

                <button
                  type="button"
                  onClick={transmitViaWhatsApp}
                  className="w-full py-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Transmettre sur WhatsApp Direct</span>
                </button>
              </div>

            </div>

          </form>
        )}

      </div>
    </section>
  );
};
