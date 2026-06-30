import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ShieldCheck, Clock, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

// Official WhatsApp Logo SVG
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.488 1.459 5.416 1.46h.005c5.441 0 9.866-4.43 9.87-9.877.002-2.64-1.018-5.12-2.87-6.97C17.216 1.916 14.733.894 12.01.894c-5.44 0-9.865 4.43-9.87 9.88-.001 1.928.502 3.812 1.46 5.418l-.985 3.597 3.68-.966zm10.155-7.004c-.302-.15-1.784-.882-2.06-.982-.277-.1-.478-.15-.678.15-.2.3-.778.98-.953 1.18-.175.2-.35.225-.65.075-.3-.15-1.268-.467-2.414-1.49-1.127-1.005-1.888-2.25-2.11-2.625-.224-.375-.024-.578.126-.727.136-.134.302-.35.453-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.633-.93-2.235-.246-.597-.517-.514-.71-.524-.184-.01-.397-.01-.61-.01-.213 0-.56.08-.853.4-.294.32-1.126 1.1-1.126 2.68 0 1.582 1.15 3.11 1.31 3.32.16.21 2.264 3.457 5.485 4.85.766.33 1.363.528 1.83.676.77.244 1.472.21 2.025.127.618-.093 1.785-.73 2.036-1.436.25-.707.25-1.31.175-1.437-.075-.125-.276-.2-.578-.35z" />
  </svg>
);

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.findUs'), path: '/find-us' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const phoneNumber = '+919434661990';
  const rawPhone = '9434661990';
  const whatsappNumber = '9475653294';
  
  // Localized whatsapp prefilled message
  const whatsappMessage = encodeURIComponent(
    language === 'bn' 
      ? 'নমস্কার! আমি মহামায়া এন্টারপ্রাইজের ওয়েবসাইটে এসেছি। আমার পুকুরের ঔষধ ও খাবারের জন্য তথ্য চাই।' 
      : 'Hello! I am visiting the website of Mahamaya Enterprise. I would like information regarding aquaculture products and feed.'
  );
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${whatsappMessage}`;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans antialiased text-charcoal">
      {/* LOCALBUSINESS SCHEMA INJECTION */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Mahamaya Enterprise",
          "image": "https://mahamayaenterprise.com/logo-preview.jpg",
          "@id": "https://mahamayaenterprise.com",
          "url": "https://mahamayaenterprise.com",
          "telephone": phoneNumber,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Eruar Road, Near Bus Stand",
            "addressLocality": "Bhatar, Purba Bardhaman",
            "addressRegion": "West Bengal",
            "postalCode": "713121",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 23.4182,
            "longitude": 87.9048
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "07:00",
            "closes": "21:00"
          }
        })}
      </script>

      {/* TOP NOTIFICATION STRIP - Key Stockist Status */}
      <div className="bg-teal-900 text-cream py-1 px-4 text-center text-xs md:text-sm font-semibold border-b border-amber-500/20 z-50 select-none">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
          <span>{t('nav.dealerBadge')} (Purba Bardhaman)</span>
        </span>
      </div>

      {/* STICKY GLASS HEADER */}
      <header className="sticky top-0 z-40 w-full glass-header transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          
          {/* Logo & Shop Name */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-teal-900 flex items-center justify-center text-cream shadow-md group-hover:bg-teal-800 transition-colors">
              <span className="text-lg md:text-xl font-extrabold tracking-tighter text-amber-400">ME</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-extrabold tracking-tight text-teal-900 uppercase leading-none">
                MAHAMAYA
              </span>
              <span className="text-[9px] md:text-[10px] text-teal-800 font-bold uppercase tracking-widest leading-normal">
                Enterprise
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-extrabold tracking-tight whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'text-teal-900 bg-teal-900/5 border border-teal-900/10'
                      : 'text-charcoal-light hover:text-teal-900 hover:bg-teal-900/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Header Actions (Language switch, Call, WhatsApp) */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-3 shrink-0">
            {/* Functional Language toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg border border-teal-900/15 text-[10px] lg:text-xs font-extrabold text-teal-900 hover:bg-teal-900/5 transition-all select-none cursor-pointer whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 text-amber-500" />
              <span>{t('nav.langToggle')}</span>
            </button>

            <a
              href={`tel:${rawPhone}`}
              className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-teal-900 hover:text-teal-800 transition-colors px-2 py-1.5 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>+91 94346 61990</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-[10px] lg:text-xs px-2.5 lg:px-4 py-2 lg:py-2.5 rounded-lg shadow-sm border border-emerald-500/20 transition-all active:scale-95 duration-200 whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{t('nav.whatsappBtn')}</span>
            </a>
          </div>

          {/* Mobile Actions: Language switch + Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-teal-900/15 text-[10px] font-extrabold text-teal-900 bg-white"
            >
              <Globe className="w-3.5 h-3.5 text-amber-500" />
              <span>{t('nav.langToggle')}</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-teal-900 hover:bg-teal-900/5 transition-all duration-200"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE DRAWER NAVIGATION (Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.25 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] h-full z-50 glass-nav-drawer shadow-2xl flex flex-col justify-between p-6 md:hidden"
            >
              <div>
                {/* Header of Drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-teal-900/10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-teal-900 flex items-center justify-center">
                      <span className="text-sm font-extrabold text-amber-400">ME</span>
                    </div>
                    <span className="text-sm font-extrabold text-teal-900 uppercase">Mahamaya Ent.</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-teal-900 hover:bg-teal-900/5 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Items list */}
                <div className="flex flex-col gap-2 mt-6">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `py-2.5 px-4 rounded-xl text-sm font-extrabold tracking-tight transition-all duration-200 ${
                          isActive
                            ? 'text-teal-900 bg-teal-900/5 border border-teal-900/10'
                            : 'text-charcoal-light hover:text-teal-900 hover:bg-teal-900/5'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Drawer Bottom - Contact Strip & Brands */}
              <div className="flex flex-col gap-4 border-t border-teal-900/10 pt-6">
                {/* Dealer Certification Badge */}
                <div className="flex items-center gap-2.5 p-3 bg-teal-900/5 rounded-xl border border-teal-900/5">
                  <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-[10px] font-bold text-teal-900 leading-tight">
                    {t('nav.dealerBadge')}<br />Care Chem & Almas Agrovet
                  </span>
                </div>

                {/* Direct buttons inside drawer */}
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${rawPhone}`}
                    className="flex items-center justify-center gap-2.5 w-full bg-teal-900 hover:bg-teal-800 text-cream font-bold text-sm py-3 rounded-xl shadow-sm border border-teal-950 transition-transform active:scale-95 duration-200"
                  >
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span>{t('nav.callBtn')}</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm py-3 rounded-xl shadow-sm border border-emerald-500/20 transition-transform active:scale-95 duration-200"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>{t('nav.whatsappBtn')}</span>
                  </a>
                </div>

                {/* Brands labels */}
                <div className="flex items-center justify-between text-[8px] font-bold text-charcoal/50 uppercase tracking-widest text-center mt-2 px-1">
                  <span>Care Chem</span>
                  <span>•</span>
                  <span>Almas Agrovet</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MAIN VIEWPORT CONTENT */}
      <main className="flex-grow">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-teal-900 text-cream/90 py-16 border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          
          {/* Brand & Mission Statement */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center">
                <span className="text-lg font-extrabold text-teal-900">ME</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-white leading-none">MAHAMAYA</span>
                <span className="text-[9px] text-amber-400 font-bold uppercase tracking-widest leading-normal">
                  Enterprise
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream/70 max-w-sm mt-2">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mt-1">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{t('nav.dealerBadge')}</span>
            </div>
          </div>

          {/* Fast Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-amber-400">
              {t('footer.quickLinks')}
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm font-semibold">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className="hover:text-amber-400 transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details & Hours */}
          <div className="flex flex-col gap-4 text-sm text-cream/80">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-amber-400">
              {t('footer.storeInfo')}
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                <p className="leading-tight whitespace-pre-line">
                  <strong className="text-white">Mahamaya Enterprise Showroom</strong><br />
                  {t('footer.address')}<br />
                  <span className="text-[11px] text-cream/65">({t('footer.landmark')})</span>
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                <p>{t('footer.hours')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50 font-medium">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-4">
            <span>{t('footer.credentials')}</span>
            <span>•</span>
            <span>Bilingual local aquaculture platform</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
