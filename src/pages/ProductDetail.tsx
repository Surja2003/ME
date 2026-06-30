import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ShieldCheck, ArrowLeft, CheckCircle2, ZoomIn, X, Info } from 'lucide-react';
import { products } from '../data/products';
import { ProductImage } from '../components/ProductImage';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppIcon } from '../components/Layout';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const isBn = language === 'bn';
  const [isZoomed, setIsZoomed] = useState(false);

  // Find product by slug
  const product = useMemo(() => {
    return products.find(p => p.slug === slug);
  }, [slug]);

  // Find related products (same brand or same parentCategory)
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.slug !== product.slug && (p.brand === product.brand || p.parentCategory === product.parentCategory))
      .slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <p className="text-5xl">⚠️</p>
        <h2 className="text-2xl font-extrabold text-teal-900 mt-4">Product Not Found / পাওয়া যায়নি</h2>
        <p className="text-sm text-charcoal-light mt-2">
          The product you are looking for does not exist in our store catalogue.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-900 text-cream font-bold text-sm shadow transition-colors hover:bg-teal-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalogue / ফিরে যান</span>
        </Link>
      </div>
    );
  }

  const isCareChem = product.brand === 'Care Chem Remedies';
  const rawPhone = '9434661990';
  const whatsappNumber = '9475653294';

  // Construct bilingual, dynamic WhatsApp prefilled text
  const whatsappText = isBn 
    ? `নমস্কার মহামায়া এন্টারপ্রাইজ! আমি আপনার ওয়েবসাইট থেকে ${product.nameBn} (${product.brand}) সম্পর্কে জানতে চাই। দয়া করে দাম ও স্টক জানান।`
    : `Hello Mahamaya Enterprise! I am interested in buying ${product.name} (${product.brand}). Please share the current price and stock availability.`;
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  // Determine "Best For" tags based on category or name
  const getBestForTags = (): string[] => {
    const name = product.name.toLowerCase();
    const cat = product.parentCategory.toLowerCase();
    
    const tags: string[] = [];
    
    if (isBn) {
      tags.push('পুকুর পরিচর্যা');
      if (name.includes('prawn') || name.includes('vanna') || name.includes('kholosh') || name.includes('cal care')) {
        tags.push('চিংড়ি চাষ (Prawn)');
      }
      if (name.includes('fish') || cat.includes('feed') || name.includes('fry') || name.includes('cure in')) {
        tags.push('মাছ চাষ (Fish)');
      }
      if (cat.includes('oxygen') || name.includes('oxi') || name.includes('jall') || name.includes('gas')) {
        tags.push('জরুরি এয়ারেশন');
      }
    } else {
      tags.push('Pond Maintenance');
      if (name.includes('prawn') || name.includes('vanna') || name.includes('kholosh') || name.includes('cal care')) {
        tags.push('Prawn Farming');
      }
      if (name.includes('fish') || cat.includes('feed') || name.includes('fry') || name.includes('cure in')) {
        tags.push('Fish Farming');
      }
      if (cat.includes('oxygen') || name.includes('oxi') || name.includes('jall') || name.includes('gas')) {
        tags.push('Emergency Aeration');
      }
    }
    
    return tags;
  };

  const bestForTags = getBestForTags();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 text-left">
      {/* Back button link */}
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-amber-500 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{t('detail.backBtn')}</span>
      </Link>

      {/* PRODUCT CORE DETAILS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-white p-4 md:p-8 rounded-3xl border border-teal-900/5 shadow-sm">
        
        {/* Left Column: Product Vector with zoom trigger */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div 
            onClick={() => setIsZoomed(true)}
            className="w-full relative group cursor-pointer border border-teal-900/5 rounded-2xl overflow-hidden aspect-square flex items-center justify-center bg-cream/35"
          >
            <ProductImage product={product} className="w-full h-full" />
            
            {/* Hover overlay with zoom hint */}
            <div className="absolute inset-0 bg-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="px-4 py-2 bg-teal-950/80 backdrop-blur-md text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-md">
                <ZoomIn className="w-4 h-4 text-amber-500" />
                <span>{t('detail.zoomHint')}</span>
              </div>
            </div>
          </div>
          <span className="text-[11px] text-charcoal/40 font-bold uppercase tracking-wider mt-3 text-center w-full">
            {isBn ? 'বিশদ বিবরণ দেখতে ইমেজে ক্লিক করুন' : 'Click image to view high-resolution packaging'}
          </span>
        </div>

        {/* Right Column: Descriptions & CTAs */}
        <div className="lg:col-span-7 flex flex-col text-left">
          {/* Brand & Stockist Status */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              isCareChem 
                ? 'bg-teal-900 text-amber-400 border border-amber-500/25' 
                : 'bg-teal-100 text-teal-900'
            }`}>
              {product.brand}
            </span>
            <span className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-500/5 border border-amber-500/15 px-2.5 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t('detail.dealerBadge')}</span>
            </span>
          </div>

          {/* Product Name */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-teal-900 leading-tight">
            {isBn ? product.nameBn : product.name}
          </h1>

          {/* Granular & Mapped Categories */}
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs font-bold text-teal-900 bg-teal-50 px-3 py-1 rounded border border-teal-900/5">
              {isBn ? product.parentCategoryBn : product.parentCategory}
            </span>
            <span className="text-xs font-bold text-charcoal/50 bg-cream px-2.5 py-1 rounded">
              {isBn ? `সাব-ক্যাটাগরি: ${product.categoryBn}` : `Sub-Category: ${product.category}`}
            </span>
          </div>

          {/* Pack size & Price Policy Banner */}
          <div className="grid grid-cols-2 gap-4 mt-6 py-4 px-5 rounded-2xl bg-cream border border-teal-900/5">
            <div>
              <span className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-wider">
                {t('detail.packSizeLabel')}
              </span>
              <strong className="text-lg font-extrabold text-teal-900">
                {isBn ? product.packSizeBn : product.packSize}
              </strong>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-wider">
                {t('detail.indicativePrice')}
              </span>
              <strong className="text-sm sm:text-base font-extrabold text-teal-900 leading-snug">
                {product.price 
                  ? (isBn ? `প্রায় ${product.price} (${t('detail.approxPriceSuffix')})` : `${product.price} (${t('detail.approxPriceSuffix')})`)
                  : t('detail.contactPrice')
                }
              </strong>
            </div>
          </div>

          {/* Pricing Policy Disclaimer */}
          <div className="flex gap-2 p-3.5 bg-teal-50 rounded-xl border border-teal-950/5 mt-4 text-xs text-teal-900/80 leading-relaxed font-semibold">
            <Info className="w-4 h-4 text-teal-900 shrink-0 mt-0.5" />
            <p>{t('detail.b2bNotice')}</p>
          </div>

          {/* Key Benefits */}
          <div className="mt-8">
            <h3 className="text-sm font-extrabold text-teal-900 uppercase tracking-wider">
              {t('detail.benefitsTitle')}
            </h3>
            <ul className="mt-3.5 space-y-2.5">
              {(isBn ? product.benefitsBn : product.benefits).map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-charcoal-light leading-snug">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application and Dosage table */}
          <div className="mt-8">
            <h3 className="text-sm font-extrabold text-teal-900 uppercase tracking-wider">
              {t('detail.applicationTitle')}
            </h3>
            <div className="mt-3.5 p-5 bg-gradient-to-r from-teal-900 to-teal-950 text-cream rounded-2xl border border-teal-950 shadow-inner">
              <p className="text-sm sm:text-base font-semibold leading-relaxed text-cream/90">
                {isBn ? product.applicationBn : product.application}
              </p>
              <div className="mt-4 pt-3 border-t border-cream/10 text-[10px] font-medium text-amber-400 uppercase tracking-wider">
                {t('detail.dosageNotice')}
              </div>
            </div>
          </div>

          {/* Best For Tags */}
          <div className="mt-8">
            <span className="text-xs font-bold text-charcoal/50 uppercase tracking-wider block">
              {t('detail.bestFor')}
            </span>
            <div className="flex flex-wrap gap-2 mt-2">
              {bestForTags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-cream border border-teal-900/5 text-xs font-bold text-teal-900 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base py-4 rounded-xl shadow-lg border border-emerald-500/20 transition-transform active:scale-95 duration-200"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>{t('detail.contactToBuy')}</span>
            </a>
            <a
              href={`tel:${rawPhone}`}
              className="px-6 py-4 rounded-xl border border-teal-900/20 hover:bg-teal-900/5 text-teal-900 font-bold text-base text-center transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>{t('detail.callToBuy')}</span>
            </a>
          </div>

        </div>

      </div>

      {/* RELATED PRODUCTS STRIP */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 border-t border-teal-900/5 pt-12">
          <h2 className="text-xl sm:text-2xl font-extrabold text-teal-900 text-left">
            {t('detail.relatedTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {relatedProducts.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="bg-white rounded-2xl p-4 border border-teal-900/5 flex flex-col justify-between shadow-sm hover:-translate-y-1 transition-all"
              >
                <div>
                  <ProductImage product={p} className="mb-3" />
                  <span className="text-[9px] text-charcoal/50 font-bold uppercase tracking-wider">
                    {p.brand} • {isBn ? p.packSizeBn : p.packSize}
                  </span>
                  <h4 className="text-sm font-extrabold text-teal-900 mt-1 line-clamp-1">
                    {isBn ? p.nameBn : p.name}
                  </h4>
                  <p className="text-[10px] text-charcoal-light line-clamp-2 mt-2 leading-relaxed">
                    {isBn ? p.benefitsBn[0] : p.benefits[0]}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-teal-900/5 text-xs text-teal-900 font-bold text-right hover:text-amber-500">
                  {isBn ? 'বিস্তারিত বিবরণ দেখুন \u2192' : 'View Details \u2192'}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* IMAGE ZOOM MODAL */}
      <AnimatePresence>
        {isZoomed && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomed(false)}
              className="absolute inset-0 bg-teal-950/95"
            />
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 bg-white max-w-lg w-full rounded-3xl overflow-hidden p-6 shadow-2xl flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-cream hover:bg-teal-900/5 text-teal-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center p-4">
                <ProductImage product={product} className="w-full h-full border-none shadow-none bg-transparent" isZoomed={true} />
              </div>
              
              <div className="mt-4 text-center">
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">{product.brand}</span>
                <h3 className="text-lg font-extrabold text-teal-900 mt-0.5">
                  {isBn ? product.nameBn : product.name}
                </h3>
                <p className="text-xs text-charcoal-light mt-1 px-4">
                  {isBn ? product.benefitsBn[0] : product.benefits[0]}
                </p>
                <span className="inline-block mt-4 px-4 py-1.5 bg-teal-50 border border-teal-900/5 rounded-full text-xs font-bold text-teal-900">
                  {t('products.packLabel')} {isBn ? product.packSizeBn : product.packSize}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
