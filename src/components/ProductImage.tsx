import React from 'react';
import type { Product } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

interface ProductImageProps {
  product: Product;
  className?: string;
  isZoomed?: boolean;
}

export const ProductImage: React.FC<ProductImageProps> = ({ product, className = '', isZoomed = false }) => {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  // Map of slugs to actual image paths in public/images/products/
  const actualImages: Record<string, string> = {
    'anta-care': '/images/products/anta-care.jpg',
    'asco-care': '/images/products/asco-care.jpg',
    'bhalo-jall': '/images/products/bhalo-jall.jpg',
    'cal-care': '/images/products/cal-care-bottle.jpg',
    'cgmm': '/images/products/CGMM.jpg',
    'curein-prawn': '/images/products/curein-prawn.jpg',
    'cure-in': '/images/products/curein.jpg',
    'c-vanna': '/images/products/c-vanna-bag.jpg',
    'dolo-care': '/images/products/dolo-care.jpg',
    'gas-o-cure-plus': '/images/products/gas-o-cure.jpg',
    'geolite': '/images/products/geolite.jpg',
    'gold-plus': '/images/products/gold-plus.jpg',
    'super-gold': '/images/products/super-gold.jpg',
    'kholosh': '/images/products/kholosh.jpg',
    'min-care': '/images/products/min-care.jpg',
    'new-gold': '/images/products/new-gold.jpg',
    'oxicare': '/images/products/oxicare.jpg',
    
    // Almas Agrovet products
    'grow-plus-fish-supplement': '/images/products/almas-supplement-pack.png',
    'multi-vitamins-trace-minerals-fish-feed': '/images/products/almas-supplement-pack.png',
    'vita-gold-multi-vitamin-trace-mineral-supplement': '/images/products/almas-feed-bag.png',
    'cal-v-fish-supplement': '/images/products/almas-supplement-bottle.png',
    'toxi-killer-fish-supplement': '/images/products/almas-supplement-pack.png',
    'yucca-fish-supplement': '/images/products/almas-supplement-pack.png',
    'almos-al-cure-fish-feed-1kg': '/images/products/almas-supplement-pack.png',
    'alcol-liquid-calcium-supplement': '/images/products/almas-supplement-bottle.png',
    'r-sane-pond-sanitizer': '/images/products/almas-supplement-bottle.png',
    'floating-fish-feed-3mm': '/images/products/almas-feed-bag.png'
  };


  // Determine container type based on packSize or name
  const getContainerType = (): 'bottle' | 'sack' | 'jar' | 'pack' => {
    const pack = product.packSize.toLowerCase();
    const name = product.name.toLowerCase();
    
    if (pack.includes('bottle') || pack.includes('l') || pack.includes('liquid') || name.includes('liquid') || name.includes('alcol')) {
      return 'bottle';
    }
    if (pack.includes('sack') || pack.includes('bag') || pack.includes('kg') && (pack.includes('5kg') || pack.includes('10kg') || pack.includes('20kg') || pack.includes('25kg'))) {
      return 'sack';
    }
    if (pack.includes('jar') || pack.includes('tin') || name.includes('gold')) {
      return 'jar';
    }
    return 'pack';
  };

  const containerType = getContainerType();
  const isCareChem = product.brand === 'Care Chem Remedies';
  
  // Design system colors based on brand
  const brandBg = isCareChem ? '#0F4C4C' : '#1B5E5E'; // Teal shades
  const accentColor = '#D9A441'; // Amber/Gold
  const brandTextColor = isCareChem ? '#0F4C4C' : '#1B5E5E';

  // Localized texts inside SVG
  const displayName = isBn ? product.nameBn : product.name;
  const displayCategory = isBn ? product.categoryBn : product.category;
  const displayWeight = isBn ? `নিট ওজন: ${product.packSizeBn}` : `NET WEIGHT: ${product.packSize}`;
  const displayBadge = isBn ? 'বিশ্বস্ত বিক্রেতা' : 'Trusted Dealer';

  // Render vector SVGs of product packaging
  const renderSVG = () => {
    switch (containerType) {
      case 'bottle':
        return (
          <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`grad-bottle-${product.slug}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F5F5F0" />
                <stop offset="70%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E6E6DF" />
              </linearGradient>
              <linearGradient id={`grad-label-${product.slug}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={isCareChem ? "#0F4C4C" : "#1B5E5E"} />
                <stop offset="100%" stopColor={isCareChem ? "#072424" : "#0D3333"} />
              </linearGradient>
            </defs>
            {/* Bottle cap */}
            <rect x="80" y="20" width="40" height="25" rx="4" fill={accentColor} />
            <path d="M80 40H120V45H80V40Z" fill="#B2842E" />
            
            {/* Bottle neck */}
            <path d="M86 45H114V75H86V45Z" fill={`url(#grad-bottle-${product.slug})`} />
            <path d="M86 75C86 90 70 100 60 110V260C60 270 70 280 85 280H115C130 280 140 270 140 260V110C130 100 114 90 114 75H86Z" fill={`url(#grad-bottle-${product.slug})`} stroke="#D4D4CA" strokeWidth="2" />
            
            {/* Liquid level indicator (translucent side stripe) */}
            <line x1="134" y1="120" x2="134" y2="240" stroke="#0F4C4C" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
            
            {/* Product Label */}
            <rect x="64" y="115" width="72" height="125" rx="2" fill={`url(#grad-label-${product.slug})`} />
            
            {/* Brand Text on Label */}
            <text x="100" y="132" fill="#FAF8F3" fontSize="6.2" fontWeight="bold" textAnchor="middle" letterSpacing="0.2">
              {product.brand.toUpperCase()}
            </text>
            
            {/* Leaf/Water drop icon on label */}
            <path d="M100 145C104 145 106 148 106 151C106 154 100 158 100 158C100 158 94 154 94 151C94 148 96 145 100 145Z" fill={accentColor} />
            
            {/* Product Name on Label */}
            <text x="100" y="178" fill="#FFFFFF" fontSize={isBn ? "9.5" : "10"} fontWeight="bold" textAnchor="middle">
              {displayName.split(' ').slice(0, 2).join(' ')}
            </text>
            <text x="100" y="190" fill="#FFFFFF" fontSize={isBn ? "6.5" : "7"} textAnchor="middle" opacity="0.9">
              {displayName.split(' ').slice(2).join(' ')}
            </text>
            
            {/* Category / Sub-label on Label */}
            <rect x="72" y="202" width="56" height="10" rx="2.5" fill="#FAF8F3" opacity="0.25" />
            <text x="100" y="209" fill="#FAF8F3" fontSize="5.2" fontWeight="600" textAnchor="middle">
              {displayCategory.toUpperCase()}
            </text>
            
            {/* Authorized badge (graphics shape) */}
            {isCareChem && (
              <path d="M116 215L124 220L132 215L132 225L124 230L116 225V215Z" fill={accentColor} />
            )}
            
            {/* Pack Size on Label */}
            <text x="100" y="228" fill={accentColor} fontSize="7" fontWeight="bold" textAnchor="middle">
              {isBn ? product.packSizeBn : product.packSize}
            </text>
            
            {/* Bottom details */}
            <path d="M70 270H130" stroke="#D4D4CA" strokeWidth="1" />
          </svg>
        );
      
      case 'sack':
        return (
          <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`grad-sack-${product.slug}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DFDCCF" />
                <stop offset="30%" stopColor="#EBE8DE" />
                <stop offset="70%" stopColor="#FAF8F3" />
                <stop offset="100%" stopColor="#D2CEBF" />
              </linearGradient>
            </defs>
            {/* Sack outline */}
            <path d="M60 40 C55 35, 45 42, 45 50 C45 60, 52 75, 48 85 C42 100, 35 120, 35 150 C35 210, 42 260, 48 275 C52 285, 65 285, 100 285 C135 285, 148 285, 152 275 C158 260, 165 210, 165 150 C165 120, 158 100, 152 85 C148 75, 155 60, 155 50 C155 42, 145 35, 140 40 C130 45, 115 35, 100 42 C85 35, 70 45, 60 40Z" fill={`url(#grad-sack-${product.slug})`} stroke="#C0BAA8" strokeWidth="2" />
            
            {/* Sack gathered top strings */}
            <circle cx="60" cy="46" r="3" fill={accentColor} />
            <circle cx="100" cy="47" r="3" fill={accentColor} />
            <circle cx="140" cy="46" r="3" fill={accentColor} />
            <path d="M50 48C60 52, 90 48, 100 50C110 48, 140 52, 150 48" stroke={accentColor} strokeWidth="2" />
            
            {/* Printed Brand Panel */}
            <path d="M45 100 H155 V220 H45 Z" fill={brandBg} opacity="0.9" />
            
            {/* Brand text */}
            <text x="100" y="118" fill="#FAF8F3" fontSize="6.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">
              {product.brand.toUpperCase()}
            </text>
            
            {/* Inner frame */}
            <rect x="52" y="128" width="96" height="82" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.6" />
            
            {/* Product Name */}
            <text x="100" y="152" fill="#FFFFFF" fontSize={isBn ? "10" : "10.5"} fontWeight="bold" textAnchor="middle">
              {displayName.split(' ').slice(0, 2).join(' ')}
            </text>
            <text x="100" y="165" fill="#FFFFFF" fontSize={isBn ? "7" : "7.5"} textAnchor="middle">
              {displayName.split(' ').slice(2).join(' ')}
            </text>
            
            {/* Category */}
            <text x="100" y="185" fill={accentColor} fontSize="6" fontWeight="700" textAnchor="middle" letterSpacing="0.2">
              {displayCategory.toUpperCase()}
            </text>
            
            {/* Heavy-duty icon */}
            <path d="M100 193C98.5 193 97 194.5 97 196C97 197.5 98.5 199 100 199C101.5 199 103 197.5 103 196C103 194.5 101.5 193 100 193Z" fill="#FAF8F3" opacity="0.8" />
            
            {/* Pack Size printed below banner */}
            <text x="100" y="248" fill={brandTextColor} fontSize="8" fontWeight="bold" textAnchor="middle">
              {displayWeight}
            </text>
            
            {/* Stitching lines at bottom */}
            <line x1="50" y1="275" x2="150" y2="275" stroke="#C0BAA8" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
        );
      
      case 'jar':
        return (
          <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`grad-jar-${product.slug}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ECEBE1" />
                <stop offset="30%" stopColor="#FFFFFF" />
                <stop offset="80%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#DBD8CA" />
              </linearGradient>
              <linearGradient id={`grad-jar-cap-${product.slug}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#BD8B2B" />
                <stop offset="50%" stopColor="#D9A441" />
                <stop offset="100%" stopColor="#9C701B" />
              </linearGradient>
            </defs>
            {/* Cap */}
            <rect x="62" y="25" width="76" height="25" rx="3" fill={`url(#grad-jar-cap-${product.slug})`} stroke="#9C701B" strokeWidth="1" />
            <line x1="68" y1="30" x2="68" y2="45" stroke="#FAF8F3" strokeWidth="1.5" opacity="0.4" />
            <line x1="74" y1="30" x2="74" y2="45" stroke="#FAF8F3" strokeWidth="1.5" opacity="0.4" />
            <line x1="80" y1="30" x2="80" y2="45" stroke="#FAF8F3" strokeWidth="1.5" opacity="0.4" />
            <line x1="120" y1="30" x2="120" y2="45" stroke="#FAF8F3" strokeWidth="1.5" opacity="0.4" />
            <line x1="126" y1="30" x2="126" y2="45" stroke="#FAF8F3" strokeWidth="1.5" opacity="0.4" />
            <line x1="132" y1="30" x2="132" y2="45" stroke="#FAF8F3" strokeWidth="1.5" opacity="0.4" />
            
            {/* Neck */}
            <rect x="68" y="50" width="64" height="15" fill="#EAE8DF" stroke="#D3D0C2" strokeWidth="1" />
            
            {/* Jar body */}
            <path d="M68 65C52 65 45 75 45 92V255C45 268 55 278 70 278H130C145 278 155 268 155 255V92C155 75 148 65 132 65H68Z" fill={`url(#grad-jar-${product.slug})`} stroke="#CFCBBA" strokeWidth="2" />
            
            {/* Label wrapper */}
            <path d="M46 110 H154 V220 H46 Z" fill={brandBg} />
            
            {/* Brand Logo & Name */}
            <text x="100" y="128" fill="#FAF8F3" fontSize="6.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">
              {product.brand.toUpperCase()}
            </text>
            
            {/* Divider */}
            <line x1="60" y1="136" x2="140" y2="136" stroke={accentColor} strokeWidth="1" opacity="0.5" />
            
            {/* Product Name */}
            <text x="100" y="158" fill="#FFFFFF" fontSize={isBn ? "11" : "12"} fontWeight="bold" textAnchor="middle">
              {displayName.split(' ').slice(0, 2).join(' ')}
            </text>
            <text x="100" y="172" fill="#FFFFFF" fontSize={isBn ? "7.5" : "8"} textAnchor="middle" opacity="0.9">
              {displayName.split(' ').slice(2).join(' ')}
            </text>
            
            {/* Category */}
            <rect x="70" y="182" width="60" height="11" rx="2.5" fill={accentColor} />
            <text x="100" y="190" fill="#FAF8F3" fontSize="5.5" fontWeight="bold" textAnchor="middle">
              {displayCategory.toUpperCase()}
            </text>
            
            {/* Ribbon badge */}
            <path d="M135 95 L142 110 L135 125 L128 110 Z" fill={accentColor} />
            
            {/* Pack Size */}
            <text x="100" y="210" fill="#FFFFFF" fontSize="7.5" fontWeight="bold" textAnchor="middle" opacity="0.9">
              {isBn ? product.packSizeBn : product.packSize}
            </text>
            
            {/* Bottom details */}
            <path d="M55 255H145" stroke="#CFCBBA" strokeWidth="1" />
          </svg>
        );
      
      case 'pack':
      default:
        return (
          <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-md select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`grad-pack-${product.slug}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="10%" stopColor="#FCFAF2" />
                <stop offset="90%" stopColor="#FAF8F3" />
                <stop offset="100%" stopColor="#EDEAE0" />
              </linearGradient>
              <linearGradient id={`grad-pack-border-${product.slug}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={isCareChem ? "#0F4C4C" : "#1B5E5E"} />
                <stop offset="100%" stopColor={accentColor} />
              </linearGradient>
            </defs>
            
            {/* Sealed Pack outline */}
            <rect x="42" y="30" width="116" height="240" rx="10" fill={`url(#grad-pack-${product.slug})`} stroke={`url(#grad-pack-border-${product.slug})`} strokeWidth="2" />
            <rect x="42" y="30" width="116" height="240" rx="10" fill="none" stroke={`url(#grad-pack-border-${product.slug})`} strokeWidth="2" />
            
            {/* Crimp top */}
            <rect x="42" y="30" width="116" height="15" rx="2" fill="#E6E3D5" />
            <line x1="42" y1="45" x2="158" y2="45" stroke="#D3D0C2" strokeWidth="1" />
            <line x1="45" y1="35" x2="45" y2="40" stroke="#A8A599" strokeWidth="1" />
            <line x1="50" y1="35" x2="50" y2="40" stroke="#A8A599" strokeWidth="1" />
            <line x1="55" y1="35" x2="55" y2="40" stroke="#A8A599" strokeWidth="1" />
            <line x1="60" y1="35" x2="60" y2="40" stroke="#A8A599" strokeWidth="1" />
            <line x1="140" y1="35" x2="140" y2="40" stroke="#A8A599" strokeWidth="1" />
            <line x1="145" y1="35" x2="145" y2="40" stroke="#A8A599" strokeWidth="1" />
            <line x1="150" y1="35" x2="150" y2="40" stroke="#A8A599" strokeWidth="1" />
            <line x1="155" y1="35" x2="155" y2="40" stroke="#A8A599" strokeWidth="1" />
            
            {/* Brand Header Banner */}
            <path d="M42 60 H158 V95 H42 Z" fill={brandBg} />
            
            <text x="100" y="78" fill="#FAF8F3" fontSize="7" fontWeight="bold" textAnchor="middle" letterSpacing="0.4">
              {product.brand.toUpperCase()}
            </text>
            
            {/* Product Logo / Icon */}
            <circle cx="100" cy="135" r="22" fill="#FAF8F3" stroke={accentColor} strokeWidth="1.5" />
            
            {/* Stylized shrimp icon inside circle */}
            <path d="M92 135 C92 125, 108 125, 108 135 C108 140, 102 145, 100 148 C98 145, 92 140, 92 135Z" fill={brandBg} opacity="0.8" />
            <circle cx="100" cy="133" r="2" fill={accentColor} />
            
            {/* Product Name */}
            <text x="100" y="185" fill={brandTextColor} fontSize={isBn ? "10.5" : "11.5"} fontWeight="800" textAnchor="middle">
              {displayName}
            </text>
            
            {/* Category Tag */}
            <rect x="65" y="196" width="70" height="12" rx="3" fill="#F0F7F7" stroke="#0F4C4C" strokeWidth="0.5" />
            <text x="100" y="204" fill="#0F4C4C" fontSize="5.2" fontWeight="bold" textAnchor="middle">
              {displayCategory.toUpperCase()}
            </text>
            
            {/* Benefits summary lines */}
            <line x1="60" y1="222" x2="70" y2="222" stroke={accentColor} strokeWidth="1.5" />
            <line x1="75" y1="222" x2="135" y2="222" stroke="#4A4A4A" strokeWidth="1" opacity="0.4" />
            
            <line x1="60" y1="229" x2="70" y2="229" stroke={accentColor} strokeWidth="1.5" />
            <line x1="75" y1="229" x2="135" y2="229" stroke="#4A4A4A" strokeWidth="1" opacity="0.4" />
            
            {/* Pack Size */}
            <path d="M42 245 H158 V255 H42 Z" fill="#E6E3D5" opacity="0.5" />
            <text x="100" y="253" fill="#4A4A4A" fontSize="7.5" fontWeight="bold" textAnchor="middle">
              {displayWeight}
            </text>
            
            {/* Crimp bottom */}
            <rect x="42" y="260" width="116" height="10" rx="1" fill="#E6E3D5" />
            <line x1="42" y1="260" x2="158" y2="260" stroke="#D3D0C2" strokeWidth="1" />
          </svg>
        );
    }
  };

  return (
    <div className={`relative flex items-center justify-center p-4 bg-gradient-to-br from-white to-cream border border-teal-900/5 rounded-xl overflow-hidden aspect-square ${className}`}>
      {/* Absolute Decorative elements */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-teal-900/10 rounded-tl-xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-teal-900/10 rounded-br-xl pointer-events-none"></div>
      
      {/* Brand Watermark / Stamp */}
      <div className="absolute top-2 right-3 font-semibold text-[8px] tracking-wider uppercase opacity-40 select-none text-teal-800">
        {isCareChem ? '✓ CCR Rem.' : 'Almas'}
      </div>

      {/* Actual Image or SVG Container */}
      <div className={`transition-all duration-300 w-full h-full flex items-center justify-center ${isZoomed ? 'scale-110' : 'hover:scale-105'}`}>
        {actualImages[product.slug] ? (
          <img 
            src={actualImages[product.slug]} 
            alt={displayName} 
            className="object-contain max-h-[85%] max-w-[85%] drop-shadow-md select-none rounded-lg"
          />
        ) : (
          renderSVG()
        )}
      </div>

      {/* Ribbon overlay */}
      <div className="absolute bottom-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider text-amber-500 bg-teal-900/90 shadow-sm border border-amber-500/20 select-none">
        <span className="text-[6px]">★</span> {displayBadge}
      </div>
    </div>
  );
};
