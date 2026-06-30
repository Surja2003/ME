import React from 'react';
import { Link, useNavigate as routerNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Waves, Droplet, Zap, HeartPulse, Sparkles, AlertCircle, HelpCircle, Phone } from 'lucide-react';
import { products } from '../data/products';
import { ProductImage } from '../components/ProductImage';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppIcon } from '../components/Layout';

export const Home: React.FC = () => {
  const navigate = routerNavigate();
  const { language, t } = useLanguage();
  const isBn = language === 'bn';

  // Selected 6 bestseller products for the home highlights
  const featuredProducts = products.filter(p => 
    ['bhalo-jall', 'oxicare', 'cal-care', 'gas-o-cure-plus', 'grow-plus-fish-supplement', 'vita-gold-multi-vitamin-trace-mineral-supplement'].includes(p.slug)
  );

  const problems = [
    {
      title: 'Water Quality & Detox',
      titleBn: 'জল ও মাটির শোধন (গ্যাস নিয়ন্ত্রণ)',
      desc: 'Treat toxic gases (ammonia, H₂S), correct pH, and purify black soil.',
      descBn: 'পুকুরের গ্যাস দূরীকরণ, পিএইচ নিয়ন্ত্রণ এবং তলার কালো মাটি শোধন।',
      icon: Droplet,
      color: 'from-emerald-500/10 to-teal-900/10',
      categoryName: 'Water Quality & Detox'
    },
    {
      title: 'Oxygen & Aeration',
      titleBn: 'জরুরি অক্সিজেন ও বুদবুদ বৃদ্ধি',
      desc: 'Rapidly increase dissolved oxygen levels to prevent fish gasping.',
      descBn: 'মাছের ভেসে ওঠা বা খাবি খাওয়া আটকাতে অক্সিজেনের মাত্রা বাড়ানো।',
      icon: Zap,
      color: 'from-blue-500/10 to-teal-800/10',
      categoryName: 'Oxygen & Aeration'
    },
    {
      title: 'Disease, Wound & Stress Care',
      titleBn: 'রোগ, ক্ষত ও মানসিক চাপ উপশম',
      desc: 'Reduce fry death rates, treat wounds, and protect from climate stress.',
      descBn: 'পোনা মাছের মড়ক দমন, ক্ষতর নিরাময় এবং আবহাওয়ার ধকল কমানো।',
      icon: HeartPulse,
      color: 'from-red-500/10 to-amber-500/10',
      categoryName: 'Disease, Wound & Stress Care'
    },
    {
      title: 'Growth & Nutrition (Feed)',
      titleBn: 'মাছের বৃদ্ধি ও পুষ্টিকর ফিড',
      desc: 'High-yield floating feeds, vitamins, minerals, and digestive aids.',
      descBn: 'দ্রুত দৈহিক বৃদ্ধি এবং পুষ্টির জন্য গোললেট ফিড ও মাল্টিভিটামিন।',
      icon: Sparkles,
      color: 'from-amber-500/10 to-amber-600/10',
      categoryName: 'Growth & Nutrition (Feed)'
    },
    {
      title: 'Mineral & Calcium Supplements',
      titleBn: 'খনিজ লবণ ও ক্যালসিয়াম ঘাটতি পূরণ',
      desc: 'Harden prawn soft shells, balance minerals, and trigger molting.',
      descBn: 'চিংড়ির নরম খোলস শক্ত করা এবং নিয়মিত খোলস ছড়াতে সাহায্য করা।',
      icon: Waves,
      color: 'from-cyan-500/10 to-teal-900/10',
      categoryName: 'Mineral & Calcium Supplements'
    },
    {
      title: 'Pond Sanitation & Cleaning',
      titleBn: 'পুকুর পরিষ্কার ও জীবাণুমুক্তকরণ',
      desc: 'Clean pond bottom black soil and sanitize water against pathogens.',
      descBn: 'তলার কালো বালি পরিষ্কার করা এবং জলের ক্ষতিকর ব্যাকটেরিয়া ধোয়া।',
      icon: AlertCircle,
      color: 'from-indigo-500/10 to-teal-900/10',
      categoryName: 'Pond Sanitation & Cleaning'
    }
  ];

  const rawPhone = '9434661990';
  const whatsappNumber = '9475653294';
  const whatsappMessage = encodeURIComponent(
    isBn 
      ? 'নমস্কার! মহামায়া এন্টারপ্রাইজ। আমার পুকুরের জন্য ঔষধের পরিমাপ বা অর্ডারের বিষয়ে জানতে চাই।' 
      : 'Hello Mahamaya Enterprise. I would like to inquire about pond medicine dosage and bulk ordering.'
  );
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col w-full pb-20 md:pb-0">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-teal-900 via-teal-950 to-teal-900 text-cream overflow-hidden py-16 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,150 C 300,100 600,200 900,150 C 1200,100 1500,200 1800,150 L 1800,300 L 0,300 Z" fill="url(#wave-grad)" />
            <defs>
              <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D9A441" />
                <stop offset="100%" stopColor="#FAF8F3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-6"
            >
              <ShieldCheck className="w-4 h-4 shrink-0" />
              {t('home.heroTag')}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              {isBn ? (
                <>মাছ ও চিংড়ি চাষের <span className="text-amber-400">অধিক ফলন</span> এবং পুকুর সুস্থ রাখার ঔষধ</>
              ) : (
                <>{t('home.heroTitle')}</>
              )}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-cream/80 max-w-2xl mt-6 leading-relaxed"
            >
              {t('home.heroDesc')}
            </motion.p>

            {/* Bilingual Advice Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 p-3.5 bg-white/5 border border-white/10 rounded-xl max-w-lg"
            >
              <p className="text-xs font-semibold text-amber-400 leading-normal flex items-start gap-2">
                <span className="text-base leading-none">💡</span>
                <span>
                  {isBn 
                    ? 'পুকুরের জলের গ্যাস, পিএইচ (pH) বা চারা মাছের ক্ষত ও বৃদ্ধির সঠিক ডোজ নির্ধারণ করতে আজই আমাদের এড়ুয়ার অফিসে পুকুরের জল এনে পরীক্ষা করিয়ে নিন।'
                    : 'Unsure about dosage? Bring your pond water sample to our Eruar center for parameter guidance on pH, ammonia and DO balance.'}
                </span>
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
            >
              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-teal-950 font-extrabold text-base text-center shadow-lg border border-amber-400/20 active:scale-98 transition-all"
              >
                {t('home.heroBtnCatalog')}
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-cream/30 hover:border-cream/80 hover:bg-white/5 text-cream font-bold text-base text-center active:scale-98 transition-all"
              >
                {t('home.heroBtnContact')}
              </Link>
            </motion.div>
          </div>

          {/* Hero Right Visuals */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-80 h-80 rounded-full bg-gradient-to-tr from-teal-800 to-teal-600 border border-teal-500/20 shadow-2xl flex items-center justify-center relative"
            >
              <div className="absolute -top-4 -left-4 bg-cream/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex flex-col gap-1 items-center shadow-lg">
                <span className="text-3xl">🦐</span>
                <span className="text-[10px] font-extrabold tracking-wider uppercase text-amber-400">
                  {isBn ? 'চিংড়ি চাষ' : 'Prawn Health'}
                </span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-cream/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex flex-col gap-1 items-center shadow-lg">
                <span className="text-3xl">🐟</span>
                <span className="text-[10px] font-extrabold tracking-wider uppercase text-amber-400">
                  {isBn ? 'উন্নত ফিড' : 'High Feed Yield'}
                </span>
              </div>

              <div className="flex flex-col items-center">
                <Waves className="w-16 h-16 text-amber-400 animate-pulse mb-3" />
                <span className="text-xl font-extrabold text-white">MAHAMAYA</span>
                <span className="text-[9px] text-cream/60 font-bold uppercase tracking-widest">Eruar Hub</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. BRANDS STRIP */}
      <section className="bg-white py-8 border-y border-teal-900/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold text-teal-900/40 uppercase tracking-widest">
              {isBn ? 'আমাদের প্রধান গোডাউন ব্র্যান্ডসমূহ' : 'Stocked & Distributed Brands'}
            </span>
            <h3 className="text-base font-extrabold text-teal-900 mt-0.5">{t('home.brandTitle')}</h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {/* Brand CCR */}
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-cream border border-teal-900/5 text-left">
              <div className="w-7 h-7 rounded-full bg-teal-900 flex items-center justify-center text-amber-400 font-extrabold text-xs">C</div>
              <div className="flex flex-col">
                <span className="text-xs font-extrabold text-teal-900 leading-none">CARE CHEM REMEDIES</span>
                <span className="text-[8px] text-teal-700 font-bold uppercase tracking-widest mt-0.5">
                  {isBn ? 'শীর্ষ মৎস্য ঔষধ বিক্রেতা' : 'Key Stockist Brand'}
                </span>
              </div>
            </div>

            {/* Brand Almas */}
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-cream border border-teal-900/5 text-left">
              <div className="w-7 h-7 rounded-full bg-teal-800 flex items-center justify-center text-white font-extrabold text-xs">A</div>
              <div className="flex flex-col">
                <span className="text-xs font-extrabold text-teal-900 leading-none">ALMAS AGROVET</span>
                <span className="text-[8px] text-teal-700 font-bold uppercase tracking-widest mt-0.5">
                  {isBn ? 'ভাসমান ফিড ডিলার পার্টনার' : 'Premium Feed Partner'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOP BY PROBLEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-900">{t('home.problemTitle')}</h2>
        <p className="text-charcoal-light text-sm sm:text-base mt-2 max-w-xl mx-auto">
          {t('home.problemDesc')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {problems.map((prob) => {
            const Icon = prob.icon;
            const displayTitle = isBn ? prob.titleBn : prob.title;
            const displayDesc = isBn ? prob.descBn : prob.desc;
            return (
              <motion.div
                key={prob.title}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between text-left relative overflow-hidden group cursor-pointer"
                onClick={() => navigate(`/products?category=${encodeURIComponent(prob.categoryName)}`)}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${prob.color} rounded-bl-full opacity-60 group-hover:scale-110 transition-transform duration-300`}></div>
                
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-900/5 flex items-center justify-center text-teal-900 mb-4 group-hover:bg-teal-900 group-hover:text-cream transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-base font-extrabold text-teal-900 leading-snug">
                    {displayTitle}
                  </h3>
                  
                  <p className="text-charcoal-light text-xs mt-2.5 leading-relaxed">
                    {displayDesc}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-teal-900 mt-6 group-hover:text-amber-500 transition-colors">
                  <span>{isBn ? 'Remedies / ঔষধ দেখুন' : 'View Remedies'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS */}
      <section className="bg-teal-900/5 py-16 px-4 sm:px-6 lg:px-8 border-y border-teal-900/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 text-center sm:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-900">{t('home.featuredTitle')}</h2>
              <p className="text-charcoal-light text-sm mt-1">{t('home.featuredDesc')}</p>
            </div>
            <Link
              to="/products"
              className="flex items-center gap-1 text-sm font-bold text-teal-900 hover:text-amber-500 transition-colors"
            >
              <span>{t('home.featuredAll')} &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.slug}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-4 border border-teal-900/5 flex flex-col justify-between shadow-sm relative text-left"
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                    product.brand === 'Care Chem Remedies' 
                      ? 'bg-teal-900 text-amber-400 border border-amber-500/20' 
                      : 'bg-teal-100 text-teal-900'
                  }`}>
                    {product.brand}
                  </span>
                </div>

                <div>
                  <ProductImage product={product} className="mb-4" />

                  <span className="text-[10px] text-charcoal/50 font-bold uppercase tracking-wider">
                    {isBn ? `প্যাক সাইজ: ${product.packSizeBn}` : `Pack Size: ${product.packSize}`}
                  </span>

                  <h3 className="text-base font-extrabold text-teal-900 mt-1 leading-snug">
                    {isBn ? product.nameBn : product.name}
                  </h3>

                  <span className="inline-block text-[9px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md mt-1.5">
                    {isBn ? product.categoryBn : product.category}
                  </span>

                  <p className="text-xs text-charcoal-light mt-3 line-clamp-2 leading-relaxed">
                    {isBn ? product.benefitsBn[0] : product.benefits[0]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-teal-900/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-charcoal/70">
                    {product.price 
                      ? (isBn ? `প্রায় ${product.price}` : `Approx. ${product.price}`)
                      : t('products.contactForPrice')
                    }
                  </span>
                  
                  <Link
                    to={`/products/${product.slug}`}
                    className="px-4 py-2 rounded-lg bg-teal-900 hover:bg-teal-800 text-cream font-bold text-xs shadow-sm transition-colors active:scale-95 duration-200"
                  >
                    {isBn ? 'বিস্তারিত' : 'View Details'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRUST SECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">{isBn ? 'কেন চাষী ভাইয়েরা আমাদের খোঁজেন' : 'Aquaculture Support Priorities'}</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-900 mt-1">{t('home.trustTitle')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {/* Trust 1 */}
          <div className="flex flex-col items-center p-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-900/5 flex items-center justify-center text-teal-900 mb-4">
              <ShieldCheck className="w-8 h-8 text-amber-500" />
            </div>
            <h4 className="text-base font-extrabold text-teal-900">{t('home.trust1Title')}</h4>
            <p className="text-xs text-charcoal-light mt-2 max-w-[200px] leading-relaxed">
              {t('home.trust1Desc')}
            </p>
          </div>

          {/* Trust 2 */}
          <div className="flex flex-col items-center p-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-900/5 flex items-center justify-center text-teal-900 mb-4">
              <Waves className="w-8 h-8 text-teal-900" />
            </div>
            <h4 className="text-base font-extrabold text-teal-900">{t('home.trust2Title')}</h4>
            <p className="text-xs text-charcoal-light mt-2 max-w-[200px] leading-relaxed">
              {t('home.trust2Desc')}
            </p>
          </div>

          {/* Trust 3 */}
          <div className="flex flex-col items-center p-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-900/5 flex items-center justify-center text-teal-900 mb-4">
              <HelpCircle className="w-8 h-8 text-teal-900" />
            </div>
            <h4 className="text-base font-extrabold text-teal-900">{t('home.trust3Title')}</h4>
            <p className="text-xs text-charcoal-light mt-2 max-w-[200px] leading-relaxed">
              {t('home.trust3Desc')}
            </p>
          </div>

          {/* Trust 4 */}
          <div className="flex flex-col items-center p-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-900/5 flex items-center justify-center text-teal-900 mb-4">
              <Phone className="w-8 h-8 text-teal-900" />
            </div>
            <h4 className="text-base font-extrabold text-teal-900">{t('home.trust4Title')}</h4>
            <p className="text-xs text-charcoal-light mt-2 max-w-[200px] leading-relaxed">
              {t('home.trust4Desc')}
            </p>
          </div>
        </div>

        {/* Statistical Banner */}
        <div className="mt-16 p-8 md:p-10 rounded-3xl bg-teal-900 text-cream relative overflow-hidden text-left shadow-lg border border-amber-500/10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal-800/40 rounded-bl-full z-0"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <span className="text-3xl md:text-4xl font-extrabold text-amber-400">{t('home.stats1')}</span>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mt-1">{t('home.stats1Desc')}</h4>
              <p className="text-xs text-cream/70 mt-1 max-w-xs leading-relaxed">
                {isBn ? '২০১৬ সাল থেকে পূর্ব বর্ধমানের এড়ুয়ার ও ভাতাড় ব্লকে সফল সেবা।' : 'Serving the Eruar fishery and agricultural farming cooperatives.'}
              </p>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-extrabold text-amber-400">{t('home.stats2')}</span>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mt-1">{t('home.stats2Desc')}</h4>
              <p className="text-xs text-cream/70 mt-1 max-w-xs leading-relaxed">
                {isBn ? 'পুকুরের জলের গ্যাস ও অ্যামোনিয়া দূরীকরণে সফল অবদান।' : 'Helped farmers calculate Bigha dosage charts accurately.'}
              </p>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-extrabold text-amber-400">{t('home.stats3')}</span>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mt-1">{t('home.stats3Desc')}</h4>
              <p className="text-xs text-cream/70 mt-1 max-w-xs leading-relaxed">
                {isBn ? 'সকাল ৭টা থেকে রাত ৯টা পর্যন্ত আমরা দোকানে সরাসরি ও ফোনে সাহায্য দিই।' : 'Providing door-to-door farmer support 7 days a week.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL-TO-ACTION SECTION */}
      <section className="bg-gradient-to-br from-amber-500 to-amber-600 text-teal-950 py-12 px-4 sm:px-6 lg:px-8 text-center border-t border-amber-400/20">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold">{t('home.ctaTitle')}</h2>
          <p className="text-sm sm:text-base font-semibold text-teal-950/80 mt-2 max-w-xl">
            {t('home.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <a
              href={`tel:${rawPhone}`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-teal-900 hover:bg-teal-800 text-cream font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>{t('home.ctaCall')}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-teal-50 text-teal-900 font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 border border-teal-900/10"
            >
              <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
              <span>{t('home.ctaWhatsapp')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
