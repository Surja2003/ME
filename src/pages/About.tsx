import React from 'react';
import { ShieldCheck, Users, Milestone, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-left">
      {/* Page Header */}
      <div className="text-center md:text-left mb-12">
        <h1 className="text-3xl font-extrabold text-teal-900 leading-tight">
          {t('about.title')}
        </h1>
        <p className="text-charcoal-light text-sm sm:text-base mt-2 max-w-2xl">
          {t('about.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Column Left: Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-amber-500 font-extrabold text-sm uppercase tracking-wider">
            <Milestone className="w-4 h-4" />
            <span>{t('about.subTitle')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-900 leading-snug">
            {t('about.heading')}
          </h2>

          <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
            {t('about.storyP1')}
          </p>

          <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
            {t('about.storyP2')}
          </p>

          {/* Bilingual callout */}
          <div className="p-4 bg-teal-900/5 rounded-2xl border border-teal-900/5 text-xs sm:text-sm font-semibold text-teal-900/90 leading-relaxed">
            <span className="text-amber-500 font-bold block mb-1">
              {t('about.bilingualCalloutTitle')}
            </span>
            <p>{t('about.bilingualCalloutDesc')}</p>
          </div>
        </div>

        {/* Column Right: Credentials */}
        <div className="lg:col-span-5 bg-teal-900 text-cream p-8 rounded-3xl relative overflow-hidden shadow-md">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-800/50 rounded-bl-full"></div>
          
          <h3 className="text-lg font-extrabold text-amber-400 mb-6 flex items-center gap-2">
            <Award className="w-5 h-5" />
            <span>{t('about.credTitle')}</span>
          </h3>

          <ul className="space-y-5">
            <li className="flex gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm">{t('about.cred1Title')}</strong>
                <p className="text-xs text-cream/70 mt-0.5 leading-relaxed">{t('about.cred1Desc')}</p>
              </div>
            </li>

            <li className="flex gap-3">
              <Users className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm">{t('about.cred2Title')}</strong>
                <p className="text-xs text-cream/70 mt-0.5 leading-relaxed">{t('about.cred2Desc')}</p>
              </div>
            </li>

            <li className="flex gap-3">
              <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm">{t('about.cred3Title')}</strong>
                <p className="text-xs text-cream/70 mt-0.5 leading-relaxed">{t('about.cred3Desc')}</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 pt-6 border-t border-cream/10 text-center">
            <span className="text-[10px] font-bold text-cream/40 uppercase tracking-widest">
              Stockist center serving Eruar and Bhatar blocks
            </span>
          </div>
        </div>
      </div>

      {/* CORE VALUES GRID */}
      <div className="mt-16 border-t border-teal-900/5 pt-12">
        <h3 className="text-xl font-extrabold text-teal-900 text-center mb-8">{t('about.valuesTitle')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-teal-900/5 rounded-2xl">
            <span className="text-2xl">🔬</span>
            <h4 className="text-base font-extrabold text-teal-900 mt-3">{t('about.val1Title')}</h4>
            <p className="text-xs text-charcoal-light mt-2 leading-relaxed">
              {t('about.val1Desc')}
            </p>
          </div>
          <div className="p-6 bg-white border border-teal-900/5 rounded-2xl">
            <span className="text-2xl">🗣️</span>
            <h4 className="text-base font-extrabold text-teal-900 mt-3">{t('about.val2Title')}</h4>
            <p className="text-xs text-charcoal-light mt-2 leading-relaxed">
              {t('about.val2Desc')}
            </p>
          </div>
          <div className="p-6 bg-white border border-teal-900/5 rounded-2xl">
            <span className="text-2xl">📦</span>
            <h4 className="text-base font-extrabold text-teal-900 mt-3">{t('about.val3Title')}</h4>
            <p className="text-xs text-charcoal-light mt-2 leading-relaxed">
              {t('about.val3Desc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
