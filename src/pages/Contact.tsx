import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, HelpCircle, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppIcon } from '../components/Layout';


export const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const isBn = language === 'bn';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqKeys = [
    { qKey: 'faq.q1', aKey: 'faq.a1', q: 'How do I know which water conditioner or medicine my pond needs?', qBn: 'আমার পুকুরের জন্য কোন ঔষধটি প্রয়োজন তা কীভাবে বুঝব?', a: 'The safest way is to test your pond water parameters (pH, Ammonia, DO). You can bring a water sample to our showroom, and our technician will test it for free.', aBn: 'সবচেয়ে নিরাপদ উপায় হলো পুকুরের জলের পরীক্ষা করা। আপনি আমাদের এড়ুয়ার শোরুমে জলের নমুনা নিয়ে আসতে পারেন। আমাদের টেকনিশিয়ান বিনামূল্যে জল পরীক্ষা করে সঠিক পরিমাপ বাতলে দেবেন।' },
    { qKey: 'faq.q2', aKey: 'faq.a2', q: 'Do you provide dosage and application support?', qBn: 'ঔষধ প্রয়োগের পরিমাপের বিষয়ে কি পরামর্শ দেওয়া হয়?', a: 'Yes, we provide written application guidance charts. For Care Chem Remedies (e.g., Cal Care, Kholosh) we specify the dosage per 1000 sq meters according to water depth.', aBn: 'হ্যাঁ, আমরা ঔষধের প্রয়োগ বিধি ও ডোজ নির্দেশিকা চার্ট দিয়ে থাকি। কেয়ার কেম রেমেডিসের ঔষধের ডোজ আমরা জল ও পুকুরের আয়তন অনুযায়ী বুঝিয়ে দেব।' },
    { qKey: 'faq.q3', aKey: 'faq.a3', q: 'Can I get feed and minerals delivered directly?', qBn: 'মাছের খাবার ও খনিজ লবণের বস্তা কি সরাসরি খামারে হোম ডেলিভারি পাওয়া সম্ভব?', a: 'For bulk orders from co-operative societies or big farming blocks, we offer vehicle delivery within a 20km radius from Eruar. Contact us via WhatsApp.', aBn: 'সমবায় সমিতি বা বড় চাষীদের ক্ষেত্রে নৈহাটি থেকে ২০ কিলোমিটার এলাকার মধ্যে আমরা সরাসরি গাড়িতে ডেলিভারি দিই। চ্যাটে সরাসরি যোগাযোগ করুন।' },
    { qKey: 'faq.q4', aKey: 'faq.a4', q: 'Are the feed prices fixed?', qBn: 'মাছের খাবারের দাম কি নির্দিষ্ট থাকে?', a: 'Feed pricing fluctuates based on manufacturing raw materials and order volume. We guarantee the best trader rates in the region. Contact us for today\'s price sheet.', aBn: 'ফিডের দাম কাঁচামালের বাজার অনুযায়ী পরিবর্তিত হয়। আমরা সবচেয়ে সেরা ডিস্ট্রিবিউটর রেটের নিশ্চয়তা দিই। আজকের রেট জানতে সরাসরি দোকানে যোগাযোগ করুন।' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert(isBn ? 'অনুগ্রহ করে আপনার নাম এবং ফোন নম্বরটি লিখুন।' : 'Please fill out your Name and Phone Number.');
      return;
    }
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', product: '', message: '' });
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(prev => (prev === index ? null : index));
  };

  const rawPhone = '9434661990';
  const whatsappNumber = '9475653294';
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(
    isBn ? 'নমস্কার মহামায়া এন্টারপ্রাইজ! আমার পুকুরের ঔষধের ডোজ সম্পর্কে জানতে চাই।' : 'Hello Mahamaya Enterprise! I would like to inquire about product applications.'
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-left">
      {/* Page Header */}
      <div className="text-center md:text-left mb-10">
        <h1 className="text-3xl font-extrabold text-teal-900 leading-tight">
          {t('contact.title')}
        </h1>
        <p className="text-charcoal-light text-sm sm:text-base mt-2">
          {t('contact.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-teal-900/5 shadow-sm">
          <h2 className="text-xl font-extrabold text-teal-900 mb-6 flex items-center gap-2">
            <Send className="w-5 h-5 text-amber-500" />
            <span>{t('contact.formHeading')}</span>
          </h2>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-teal-50 border border-teal-900/10 p-6 rounded-2xl text-center"
            >
              <p className="text-4xl">✓</p>
              <h3 className="text-lg font-extrabold text-teal-900 mt-3">{t('contact.formSubmittedTitle')}</h3>
              <p className="text-xs text-teal-900/80 mt-1 max-w-sm mx-auto">
                {t('contact.formSubmittedDesc')}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-6 py-2 bg-teal-900 hover:bg-teal-800 text-cream font-bold text-xs rounded-xl shadow transition-all cursor-pointer"
              >
                {t('contact.formBtnReset')}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col text-left">
                  <label htmlFor="name" className="text-xs font-bold text-teal-900/80 mb-1">
                    {t('contact.labelName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={isBn ? 'আপনার নাম লিখুন' : 'Enter your name'}
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-teal-900/10 focus:border-amber-500 focus:outline-none text-sm transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col text-left">
                  <label htmlFor="phone" className="text-xs font-bold text-teal-900/80 mb-1">
                    {t('contact.labelPhone')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={isBn ? '১০ সংখ্যার মোবাইল নম্বর' : '10-digit mobile number'}
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-teal-900/10 focus:border-amber-500 focus:outline-none text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Product drop-down select */}
              <div className="flex flex-col text-left">
                <label htmlFor="product" className="text-xs font-bold text-teal-900/80 mb-1">
                  {t('contact.labelProduct')}
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-teal-900/10 focus:border-amber-500 focus:outline-none text-sm transition-colors cursor-pointer appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%25230F4C4C' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center'
                  }}
                >
                  <option value="">{isBn ? '-- প্রোডাক্ট নির্বাচন করুন --' : '-- Select Product --'}</option>
                  <optgroup label="Care Chem Remedies">
                    {products.filter(p => p.brand === 'Care Chem Remedies').map(p => (
                      <option key={p.slug} value={p.name}>
                        {isBn ? p.nameBn : p.name} ({isBn ? p.packSizeBn : p.packSize})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Almas Agrovet">
                    {products.filter(p => p.brand === 'Almas Agrovet').map(p => (
                      <option key={p.slug} value={p.name}>
                        {isBn ? p.nameBn : p.name} ({isBn ? p.packSizeBn : p.packSize})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col text-left">
                <label htmlFor="message" className="text-xs font-bold text-teal-900/80 mb-1">
                  {t('contact.labelMessage')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={isBn ? 'আপনার পুকুরের গভীরতা, সমস্যা বা প্রয়োজনীয় ফিডের তথ্য লিখুন...' : 'Describe pond area, depth, feed quantities...'}
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-teal-900/10 focus:border-amber-500 focus:outline-none text-sm transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full sm:w-auto self-start mt-2 px-8 py-3.5 rounded-xl bg-teal-900 hover:bg-teal-800 text-cream font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 active:scale-98 duration-200 cursor-pointer"
              >
                <span>{t('contact.btnSubmit')}</span>
                <Send className="w-4 h-4 text-amber-500" />
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Info Panel */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-charcoal">
          
          {/* Shop Details */}
          <div className="bg-white p-6 rounded-2xl border border-teal-900/5 shadow-sm flex flex-col gap-5">
            <h3 className="text-base font-extrabold text-teal-900 uppercase tracking-wider">
              {t('contact.infoHeading')}
            </h3>
            
            <div className="flex flex-col gap-4 text-sm text-charcoal-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="whitespace-pre-line leading-relaxed">
                  <strong className="text-charcoal">Mahamaya Enterprise Showroom:</strong><br />
                  {t('find.addressDetails')}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <p>
                  <strong className="text-charcoal">{t('contact.infoPhone')}</strong> +91 94346 61990
                </p>
              </div>

              <div className="flex items-center gap-3">
                <WhatsAppIcon className="w-5 h-5 text-emerald-600 shrink-0" />
                <p>
                  <strong className="text-charcoal">{t('contact.infoIcon')} WhatsApp:</strong> +91 94756 53294
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <p>
                  <strong className="text-charcoal">Email:</strong> info@mahamayaenterprise.shop
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Warning */}
          <div className="bg-teal-900 text-cream p-6 rounded-2xl border border-amber-500/10">
            <h4 className="text-sm font-extrabold text-amber-400 uppercase tracking-widest">
              {t('contact.emergencyHeading')}
            </h4>
            <p className="text-xs text-cream/70 mt-2.5 leading-relaxed">
              {t('contact.emergencyDesc')}
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href={`tel:${rawPhone}`}
                className="flex-1 bg-amber-500 hover:bg-amber-400 text-teal-950 font-extrabold text-[10px] uppercase py-2 rounded-lg text-center tracking-wider"
              >
                Call Support
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-[10px] uppercase py-2 rounded-lg text-center tracking-wider flex items-center justify-center gap-1"
              >
                <WhatsAppIcon className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* FAQ SECTION */}
      <div className="mt-16 border-t border-teal-900/5 pt-12">
        <div className="text-center md:text-left mb-8 flex items-center gap-2.5">
          <HelpCircle className="w-6 h-6 text-amber-500" />
          <h2 className="text-2xl font-extrabold text-teal-900">
            {t('contact.faqHeading')}
          </h2>
        </div>

        <div className="max-w-4xl flex flex-col gap-3">
          {faqKeys.map((faq, index) => {
            const isOpen = activeFaq === index;
            const question = isBn ? faq.qBn : faq.q;
            const answer = isBn ? faq.aBn : faq.a;
            
            return (
              <div
                key={index}
                className="bg-white border border-teal-900/5 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 font-bold text-teal-900 transition-colors hover:bg-teal-900/5 cursor-pointer"
                >
                  <span className="text-sm sm:text-base leading-snug">{question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-950 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-500' : ''
                    }`}
                  />
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-teal-900/5 text-xs sm:text-sm text-charcoal-light leading-relaxed text-left bg-cream/10">
                        <p>{answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
