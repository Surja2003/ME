import React from 'react';
import { ShieldCheck, Star, Award, Waves, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Testimonial {
  name: string;
  nameBn: string;
  location: string;
  locationBn: string;
  culture: string;
  cultureBn: string;
  quote: string;
  quoteBn: string;
  rating: number;
}

export const Gallery: React.FC = () => {
  const { language, t } = useLanguage();
  const isBn = language === 'bn';

  const testimonials: Testimonial[] = [
    {
      name: "Sudhangshu Mondal",
      nameBn: "সুধাংশু মণ্ডল",
      location: "Basirhat, North 24 Parganas",
      locationBn: "বসিরহাট, উত্তর ২৪ পরগনা",
      culture: "Bagda Prawn Cultivation",
      cultureBn: "বাগদা চিংড়ি চাষ",
      quote: "Using Bhalo Jall water conditioner from Care Chem Remedies controlled my pond pH variations and eliminated toxic ammonia completely in 3 days. My prawns stopped surface-gasping.",
      quoteBn: "কেয়ার কেমের ভালো জল ব্যবহারের ফলে মাত্র ৩ দিনে পুকুরের অ্যামোনিয়া ও পিএইচ ঠিক হয়েছে। চিংড়ি ভাসা বন্ধ হয়ে গেছে। নৈহাটির এই ঔষধের ওপর আমার পূর্ণ বিশ্বাস আছে।",
      rating: 5
    },
    {
      name: "Ramananda Ghorai",
      nameBn: "রামানন্দ ঘোড়াই",
      location: "Contai, Purba Medinipur",
      locationBn: "কাঁথি, পূর্ব মেদিনীপুর",
      culture: "Vannamei Shrimp Farming",
      cultureBn: "ভেনামি চিংড়ি চাষ",
      quote: "Cal Care and Kholosh are mandatory during molting. Prawn shell hardness is excellent now, and I had zero loose-cell mortality this harvest. Direct trader supply guarantees original quality.",
      quoteBn: "খোলস ছাড়ার সময় ক্যাল কেয়ার ও খোলস ঔষধের কার্যকারিতা চমৎকার। নরম খোলসের মড়ক আর দেখা যায়নি। এখানকার ঔষধের সত্যতা ১০০% বিশ্বস্ত।",
      rating: 5
    },
    {
      name: "Bikramjit Santra",
      nameBn: "বিক্রমজিৎ সাঁতরা",
      location: "Kalna, Purba Bardhaman",
      locationBn: "কালনা, পূর্ব বর্ধমান",
      culture: "Rahu & Katla Carp Fishery",
      cultureBn: "রুই-কাতলা চাষ",
      quote: "Almas Agrovet 3mm Floating Fish Feed combined with Vita Gold supplement has improved my average carp weight by 350 grams compared to last year's cycle. Very satisfied with the technical guidance.",
      quoteBn: "আলমাসের ভাসমান খাবার ও ভিটা গোল্ডের জুড়ি মেলা ভার। গত বছরের তুলনায় এবার মাছের গড় ওজন ৩৫০ গ্রাম বেড়েছে। টেকনিশিয়ানের পরামর্শ খুব কাজে দিয়েছে।",
      rating: 5
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-left">
      {/* Page Header */}
      <div className="text-center md:text-left mb-10">
        <h1 className="text-3xl font-extrabold text-teal-900 leading-tight">
          {t('gallery.title')}
        </h1>
        <p className="text-charcoal-light text-sm sm:text-base mt-2">
          {t('gallery.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Certificates */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-2xl border border-teal-900/5 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-teal-900/5 flex items-center justify-center text-amber-500 mb-4">
              <Award className="w-8 h-8" />
            </div>
            
            <h3 className="text-lg font-extrabold text-teal-900">{t('gallery.certTitle')}</h3>
            <p className="text-xs text-charcoal-light mt-1 max-w-xs">
              {t('gallery.certDesc')}
            </p>

            {/* Statement of Trade */}
            <div className="w-full mt-6 p-6 rounded-2xl bg-cream border border-amber-500/20 shadow-inner relative overflow-hidden flex flex-col items-center">
              <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-bl-full pointer-events-none"></div>
              
              <ShieldCheck className="w-12 h-12 text-teal-900 mb-3" />
              
              <span className="text-[9px] font-extrabold text-teal-900 tracking-wider uppercase">
                {t('gallery.certHeader')}
              </span>
              <strong className="text-sm font-extrabold text-teal-950 mt-1 block">MAHAMAYA ENTERPRISE</strong>
              <span className="text-[10px] text-charcoal/60 mt-1 block font-semibold">Eruar Trade Hub • Bhatar</span>
              
              <div className="w-full border-t border-teal-900/10 my-4"></div>
              
              <p className="text-[10.5px] italic text-charcoal/70 leading-relaxed text-center">
                "{t('gallery.certBody')}"
              </p>
              
              <div className="flex justify-between w-full mt-6 text-[8px] font-bold text-teal-900/60 uppercase">
                <span>{isBn ? 'প্রতিষ্ঠিত: ২০১৬' : 'Established: 2016'}</span>
                <span>{t('gallery.certFooter')}</span>
              </div>
            </div>
          </div>

          {/* Godown stocking statistics */}
          <div className="bg-teal-900 text-cream p-6 rounded-2xl border border-amber-500/10">
            <h4 className="text-sm font-extrabold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
              <Waves className="w-4 h-4" />
              <span>{t('gallery.stockDescTitle')}</span>
            </h4>
            <p className="text-xs text-cream/70 mt-2.5 leading-relaxed">
              {t('gallery.stockDesc')}
            </p>
          </div>
        </div>

        {/* Right Column: Customer Testimonials */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h3 className="text-lg font-extrabold text-teal-900 flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-amber-500" />
            <span>{t('gallery.testimonialTitle')}</span>
          </h3>

          <div className="flex flex-col gap-5">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-teal-900/5 shadow-sm text-left flex flex-col justify-between"
              >
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 text-amber-500 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-sm text-charcoal-light italic leading-relaxed">
                    "{isBn ? t.quoteBn : t.quote}"
                  </p>
                </div>

                {/* Farmer Details */}
                <div className="mt-5 pt-4 border-t border-teal-900/5 flex justify-between items-center text-xs">
                  <div>
                    <strong className="text-charcoal block text-sm">
                      {isBn ? t.nameBn : t.name}
                    </strong>
                    <span className="text-charcoal/45 block mt-0.5">
                      {isBn ? t.locationBn : t.location}
                    </span>
                  </div>
                  <span className="bg-teal-50 text-teal-900 border border-teal-900/5 px-2.5 py-1 rounded font-bold uppercase tracking-wide">
                    {isBn ? t.cultureBn : t.culture}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
