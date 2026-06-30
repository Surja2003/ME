import React from 'react';
import { MapPin, Clock, Phone, Navigation, CornerDownRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FindUs: React.FC = () => {
  const { t } = useLanguage();

  // Official GPS coordinates of Mahamaya Enterprise, Eruar
  const latitude  = '23.466258332381454';
  const longitude = '87.87078764126294';

  // Google Maps directions link to exact pin
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  // Google Maps satellite embed (t=k = satellite layer, z=19 = maximum zoom)
  const embedSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&t=k&z=19&output=embed&hl=en`;

  const rawPhone = '9434661990';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-left">
      {/* Page Header */}
      <div className="text-center md:text-left mb-10">
        <h1 className="text-3xl font-extrabold text-teal-900 leading-tight">
          {t('find.title')}
        </h1>
        <p className="text-charcoal-light text-sm sm:text-base mt-2">
          {t('find.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* Left Column: Details */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-2xl border border-teal-900/5 shadow-sm flex flex-col gap-5">
            <h3 className="text-lg font-extrabold text-teal-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-500" />
              <span>{t('find.addressTitle')}</span>
            </h3>

            <p className="text-sm sm:text-base text-charcoal-light leading-relaxed whitespace-pre-line">
              <strong className="text-charcoal">Mahamaya Enterprise</strong><br />
              {t('find.addressDetails')}
            </p>

            <div className="p-3.5 bg-cream rounded-xl border border-teal-900/5 text-xs text-teal-900/80 leading-relaxed font-semibold">
              <span className="text-amber-500 font-bold block mb-1">
                {t('find.landmarkTitle')}
              </span>
              <p>{t('find.landmarkDesc')}</p>
            </div>
          </div>

          {/* Opening hours */}
          <div className="bg-white p-6 rounded-2xl border border-teal-900/5 shadow-sm flex flex-col gap-4">
            <h3 className="text-lg font-extrabold text-teal-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-500" />
              <span>{t('find.hoursTitle')}</span>
            </h3>

            <div className="text-sm text-charcoal-light space-y-2">
              <div className="flex justify-between py-1 border-b border-teal-900/5 font-semibold">
                <span>{t('find.hoursWeek')}</span>
                <strong className="text-charcoal">{t('find.hoursTime')}</strong>
              </div>
              <div className="flex justify-between py-1 text-emerald-600 font-bold">
                <span>{t('find.hoursSunday')}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-teal-900 font-extrabold text-sm py-4 rounded-xl shadow-md border border-amber-400/20 transition-transform active:scale-95 duration-200"
            >
              <Navigation className="w-4.5 h-4.5" />
              <span>{t('find.btnDirections')}</span>
            </a>
            <a
              href={`tel:${rawPhone}`}
              className="px-6 py-4 rounded-xl border border-teal-900/20 hover:bg-teal-900/5 text-teal-900 font-bold text-sm text-center transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>{t('find.btnCall')}</span>
            </a>
          </div>

          {/* Delivery banner */}
          <div className="bg-teal-900 text-cream p-5 rounded-2xl border border-amber-500/10 flex gap-3">
            <CornerDownRight className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white text-xs uppercase tracking-wider block">
                {t('find.deliveryTitle')}
              </strong>
              <p className="text-xs text-cream/70 mt-1 leading-relaxed">
                {t('find.deliveryDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Google Maps Satellite — pinned to exact shop location */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-teal-900/5 overflow-hidden shadow-sm aspect-square md:aspect-video lg:aspect-auto lg:h-full min-h-[350px]">
          <iframe
            title="Mahamaya Enterprise — Satellite Location Map"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={embedSrc}
            className="border-none min-h-[350px] h-full w-full"
            allowFullScreen
          />
        </div>

      </div>
    </div>
  );
};
