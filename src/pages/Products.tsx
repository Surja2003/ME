import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, RefreshCw, ShoppingBag } from 'lucide-react';
import { products, parentCategories, getParentCategoryBn } from '../data/products';
import { ProductImage } from '../components/ProductImage';
import { useLanguage } from '../context/LanguageContext';

export const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { language, t } = useLanguage();
  const isBn = language === 'bn';
  
  // Search and Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<'All' | 'Care Chem Remedies' | 'Almas Agrovet'>('All');
  const [visibleCount, setVisibleCount] = useState(9); // Pagination: load 9 at a time

  // Get active category from URL params if present
  const activeCategory = searchParams.get('category') || 'All';

  // Sync category filter click to URL params
  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
    setVisibleCount(9); // Reset pagination
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedBrand('All');
    setSearchParams({});
    setVisibleCount(9);
  };

  // Filtered products list memoized for performance
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // 1. Text search match (name, granular category, benefits) in both English and Bengali
      const q = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(q) ||
        product.nameBn.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.categoryBn.toLowerCase().includes(q) ||
        product.benefits.some(b => b.toLowerCase().includes(q)) ||
        product.benefitsBn.some(b => b.toLowerCase().includes(q));

      // 2. Brand match
      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;

      // 3. Parent category match
      const matchesCategory = activeCategory === 'All' || product.parentCategory === activeCategory;

      return matchesSearch && matchesBrand && matchesCategory;
    });
  }, [searchQuery, selectedBrand, activeCategory]);

  // Paginated subset of filtered products
  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-left">
      {/* Page Header */}
      <div className="text-center md:text-left mb-10">
        <h1 className="text-3xl font-extrabold text-teal-900 leading-tight">
          {t('products.title')}
        </h1>
        <p className="text-charcoal-light text-sm sm:text-base mt-2">
          {t('products.desc')}
        </p>
      </div>

      {/* FILTER BAR & SEARCH PANEL */}
      <div className="bg-white rounded-2xl p-4 md:p-6 border border-teal-900/5 shadow-sm flex flex-col gap-5 mb-10">
        
        {/* Search Input & Brand Pill Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          
          {/* Search bar */}
          <div className="lg:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(9);
              }}
              placeholder={t('products.searchPlaceholder')}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-cream border border-teal-900/10 focus:border-amber-500 focus:outline-none text-sm transition-colors"
            />
          </div>

          {/* Brand toggle */}
          <div className="lg:col-span-6 flex flex-wrap gap-2 items-center justify-start lg:justify-end">
            <span className="text-xs font-bold text-charcoal/50 uppercase tracking-wider mr-2">
              {t('products.brandLabel')}
            </span>
            {(['All', 'Care Chem Remedies', 'Almas Agrovet'] as const).map((brand) => (
              <button
                key={brand}
                onClick={() => {
                  setSelectedBrand(brand);
                  setVisibleCount(9);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  selectedBrand === brand
                    ? 'bg-teal-900 text-cream border-teal-950 shadow-sm'
                    : 'bg-cream text-charcoal hover:bg-teal-900/5 border-teal-900/5'
                }`}
              >
                {brand === 'All' ? (isBn ? 'সব কোম্পানি' : 'All') : brand}
              </button>
            ))}
          </div>

        </div>

        {/* Parent Category Horizontal Scroll Pill Filters */}
        <div className="border-t border-teal-900/5 pt-4">
          <span className="block text-xs font-bold text-charcoal/50 uppercase tracking-wider mb-3">
            {t('products.categoryLabel')}
          </span>
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 select-none">
            {/* "All" pill */}
            <button
              onClick={() => handleCategoryChange('All')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all border ${
                activeCategory === 'All'
                  ? 'bg-amber-500 text-teal-950 border-amber-500 shadow-sm'
                  : 'bg-cream text-charcoal hover:bg-teal-900/5 border-teal-900/5'
              }`}
            >
              {t('products.allCategories')}
            </button>
            
            {/* Map 6 taxonomy parent filters */}
            {parentCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-teal-950 border-amber-500 shadow-sm'
                    : 'bg-cream text-charcoal hover:bg-teal-900/5 border-teal-900/5'
                }`}
              >
                {isBn ? getParentCategoryBn(cat) : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Active filter count & reset */}
        {(searchQuery || selectedBrand !== 'All' || activeCategory !== 'All') && (
          <div className="border-t border-teal-900/5 pt-3.5 flex items-center justify-between text-xs">
            <span className="font-bold text-teal-900/70">
              {t('products.matchingCount').replace('{count}', filteredProducts.length.toString())}
            </span>
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1 text-red-600 hover:text-red-700 font-extrabold"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{t('products.clearFilters')}</span>
            </button>
          </div>
        )}

      </div>

      {/* PRODUCTS DISPLAY GRID */}
      {filteredProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {paginatedProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={product.slug}
                  className="bg-white rounded-2xl p-4 border border-teal-900/5 flex flex-col justify-between shadow-sm relative group"
                >
                  {/* Brand logo label */}
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
                    {/* Packaging vector */}
                    <ProductImage product={product} className="mb-4" />

                    {/* Pack size */}
                    <div className="flex items-center justify-between mt-1 text-[10px] text-charcoal/50 font-bold uppercase tracking-wider">
                      <span>{t('products.packLabel')} {isBn ? product.packSizeBn : product.packSize}</span>
                    </div>

                    {/* Product title */}
                    <h3 className="text-base font-extrabold text-teal-900 mt-1 leading-snug group-hover:text-amber-500 transition-colors">
                      {isBn ? product.nameBn : product.name}
                    </h3>

                    {/* Taxonomy Category pills */}
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="text-[8.5px] font-extrabold text-teal-900 bg-teal-50 px-2 py-0.5 rounded border border-teal-900/5">
                        {isBn ? product.parentCategoryBn : product.parentCategory}
                      </span>
                      <span className="text-[8.5px] font-bold text-charcoal/40 bg-cream px-1.5 py-0.5 rounded">
                        {isBn ? product.categoryBn : product.category}
                      </span>
                    </div>

                    {/* Primary Benefit list */}
                    <ul className="text-xs text-charcoal-light mt-4 space-y-1 text-left list-disc list-inside">
                      {(isBn ? product.benefitsBn : product.benefits).slice(0, 2).map((benefit, i) => (
                        <li key={i} className="line-clamp-2 leading-relaxed">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buy / View actions footer */}
                  <div className="mt-6 pt-4 border-t border-teal-900/5 flex items-center justify-between">
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-bold text-charcoal/45 uppercase tracking-wider">
                        {t('products.priceLabel')}
                      </span>
                      <span className="text-xs font-bold text-teal-900">
                        {product.price 
                          ? t('products.approxPrice').replace('{price}', product.price)
                          : t('products.contactForPrice')
                        }
                      </span>
                    </div>
                    
                    <Link
                      to={`/products/${product.slug}`}
                      className="px-4.5 py-2.5 rounded-lg bg-teal-900 hover:bg-teal-800 text-cream font-bold text-xs shadow-sm transition-colors flex items-center gap-1 active:scale-95 duration-200"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{t('products.viewDetails')}</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* LOAD MORE PAGINATION */}
          {filteredProducts.length > visibleCount && (
            <div className="flex justify-center mt-12">
              <button
                onClick={loadMore}
                className="px-8 py-3.5 rounded-xl border-2 border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-cream font-bold text-sm shadow-sm transition-all duration-200 cursor-pointer"
              >
                {t('products.loadMore').replace('{count}', (filteredProducts.length - visibleCount).toString())}
              </button>
            </div>
          )}
        </>
      ) : (
        /* Empty search/filter state */
        <div className="bg-white border border-teal-900/5 rounded-2xl p-12 text-center max-w-md mx-auto mt-8 shadow-sm">
          <p className="text-4xl">🔍</p>
          <h3 className="text-lg font-extrabold text-teal-900 mt-4">{t('products.notFoundTitle')}</h3>
          <p className="text-xs text-charcoal-light mt-1">
            {t('products.notFoundDesc')}
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-6 px-6 py-2.5 rounded-xl bg-teal-900 hover:bg-teal-800 text-cream font-bold text-xs shadow-sm transition-colors cursor-pointer"
          >
            {t('products.notFoundBtn')}
          </button>
        </div>
      )}
    </div>
  );
};
