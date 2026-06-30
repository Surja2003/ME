import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav & Layout
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.gallery': 'Gallery',
    'nav.findUs': 'Find Us',
    'nav.contact': 'Contact Us',
    'nav.langToggle': 'বাংলা',
    'nav.dealerBadge': 'Leading Trader & Stockist',
    'nav.callUs': 'Call Us: +91 94346 61990',
    'nav.callBtn': 'Call Now',
    'nav.whatsappBtn': 'WhatsApp Us',
    'footer.description': 'Serving Purba Bardhaman\'s aquaculture farms. Leading supplier of Care Chem Remedies pond conditioners and high-nutrition Almas Agrovet fish feeds.',
    'footer.quickLinks': 'Quick Links',
    'footer.storeInfo': 'Store Information',
    'footer.address': 'Mahamaya Enterprise\nEruar, Bhatar,\nPurba Bardhaman, WB - 713121',
    'footer.landmark': 'Near Eruar HDS Balika Vidyalaya, near bus stand',
    'footer.hours': 'Mon - Sun: 7:00 AM - 9:00 PM',
    'footer.copyright': '© 2026 Mahamaya Enterprise. All rights reserved.',
    'footer.credentials': 'Care Chem Remedies & Almas Agrovet Key Trader • Eruar Hub',

    // Home Page
    'home.heroTag': 'Leading Trader & Stockist',
    'home.heroTitle': 'Aquaculture Health Solutions for Higher Yields',
    'home.heroDesc': 'Providing Purba Bardhaman\'s fish and prawn farmers with certified water treatments, oxygenators, and nutritious feeds from Care Chem Remedies & Almas Agrovet.',
    'home.heroBtnCatalog': 'Browse Catalog',
    'home.heroBtnContact': 'Get Free Advice',
    'home.brandTitle': 'Distributed Premium Brands',
    'home.brandDesc': 'Trusted products from India\'s top aquaculture suppliers.',
    'home.brandCcDesc': 'Pond water conditioners, prawn sanitizers & growth health remedies.',
    'home.brandAlmasDesc': 'Highly palatable floating fish feeds and mineral supplements.',
    'home.problemTitle': 'Shop by Pond Problem',
    'home.problemDesc': 'Identify the correct remedy based on the specific symptom of your pond.',
    'home.featuredTitle': 'Featured Bestsellers',
    'home.featuredDesc': 'Our most trusted pond treatments and feed supplements.',
    'home.featuredAll': 'See All 27 Products',
    'home.trustTitle': 'Why Farmers Trust Mahamaya Enterprise',
    'home.trustDesc': 'We provide scientific support, verified products, and direct local stock.',
    'home.trust1Title': '100% Genuine Stock',
    'home.trust1Desc': 'Direct supply of original products from Care Chem Remedies & Almas Agrovet.',
    'home.trust2Title': 'Water Quality Advice',
    'home.trust2Desc': 'Bring your pond water sample to our Eruar store for a basic parameter test.',
    'home.trust3Title': 'Dosage Guidance',
    'home.trust3Desc': 'Clear advice on application rates per Bigha to avoid chemical wastage.',
    'home.trust4Title': 'Bulk Supply Delivery',
    'home.trust4Desc': 'Vehicle delivery directly to nearby village centers for bulk farmer orders.',
    'home.stats1': '10+ Years',
    'home.stats1Desc': 'Serving local fish farmers',
    'home.stats2': '2,500+ Ponds',
    'home.stats2Desc': 'Conditioned & treated successfully',
    'home.stats3': '7 Days',
    'home.stats3Desc': 'Weekly service & advisory support',
    'home.ctaTitle': 'Need Dosage Guidance or Placing a Bulk Order?',
    'home.ctaDesc': 'Call our shop directly or send your pond dimensions via WhatsApp.',
    'home.ctaCall': 'Call Shop: +91 94346 61990',
    'home.ctaWhatsapp': 'WhatsApp Advisory',

    // Products Page
    'products.title': 'Aquaculture Product Catalogue',
    'products.desc': 'Search 27 trusted treatments, oxygenators, and feeds. Filter by brand or category.',
    'products.searchPlaceholder': 'Search product name or symptom (e.g. ammonia, oxygen)...',
    'products.brandLabel': 'Brand:',
    'products.categoryLabel': 'Filter by Category:',
    'products.allCategories': 'All Categories',
    'products.matchingCount': 'Showing {count} matching products',
    'products.clearFilters': 'Clear All Filters',
    'products.priceLabel': 'Price',
    'products.contactForPrice': 'Contact for price',
    'products.approxPrice': 'Approx. {price} — confirm at order',
    'products.packLabel': 'Pack Size:',
    'products.viewDetails': 'View Details',
    'products.loadMore': 'Load More Products ({count} left)',
    'products.notFoundTitle': 'No Products Found',
    'products.notFoundDesc': 'We couldn\'t find any products matching your search query. Try typing another term.',
    'products.notFoundBtn': 'Clear Filters',

    // Product Detail Page
    'detail.backBtn': 'Back to Catalogue',
    'detail.dealerBadge': 'Key Stockist Item',
    'detail.packSizeLabel': 'Pack Weight / Size',
    'detail.indicativePrice': 'Indicative Price',
    'detail.contactPrice': 'Contact showroom',
    'detail.approxPriceSuffix': 'retail approx. — confirm at order',
    'detail.b2bNotice': 'B2B Notice: Rates vary based on quantities and seasonal dealer schemes. Tap Contact to Buy to get an exact quotation.',
    'detail.benefitsTitle': 'Key Benefits & Efficacy',
    'detail.applicationTitle': 'Application & Recommended Dosage',
    'detail.dosageNotice': 'Note: Mix properly with food/sand as indicated or consult our store technician.',
    'detail.bestFor': 'Best Suited For:',
    'detail.contactToBuy': 'Contact to Buy',
    'detail.callToBuy': 'Call Shop',
    'detail.relatedTitle': 'Related Aquaculture Products',
    'detail.zoomHint': 'Tap to Zoom',
    'detail.zoomClose': 'Close',

    // About Us Page
    'about.title': 'About Mahamaya Enterprise',
    'about.desc': 'Our journey in supporting Purba Bardhaman\'s freshwater fish and prawn farmers with certified feeds and remedies.',
    'about.subTitle': 'Our Foundation',
    'about.heading': 'Empowering Local Fishery with Trusted Remedies & Feeds',
    'about.storyP1': 'Established in Eruar, Bhatar, Mahamaya Enterprise has become a leading trader and stockist of aquaculture products in Purba Bardhaman. We understand that success in fish and shrimp cultivation depends entirely on proper pond environment management, water conditioning, and high-quality nutrition.',
    'about.storyP2': 'We stock the full range of Care Chem Remedies water conditioners, soil purifiers, and health therapeutics alongside Almas Agrovet\'s high-yield floating fish feeds. We serve as a trusted bridge between manufacturers and farmers, ensuring availability of original stock at fair rates.',
    'about.bilingualCalloutTitle': 'Local Farmer Advisory Services:',
    'about.bilingualCalloutDesc': 'Chaoi brothers and cooperative farms visit our Eruar center to check their water samples. Our staff helps test key parameters and outlines clear dosage guides before you purchase any chemical.',
    'about.credTitle': 'Store Credentials',
    'about.cred1Title': 'Leading Regional Stockist',
    'about.cred1Desc': 'We maintain fresh inventory of Care Chem Remedies & Almas Agrovet feeds directly from the manufacturers.',
    'about.cred2Title': 'Technical Guidance',
    'about.cred2Desc': 'Staff trained in water chemistry parameters (DO, pH, and ammonia level indicators) available for consultation.',
    'about.cred3Title': 'Prawn & Carp Specialists',
    'about.cred3Desc': 'Specific dosage program structures for Bagda, Vannamei, and local Carp species.',
    'about.valuesTitle': 'Our Core Values',
    'about.val1Title': 'Scientific Dosage',
    'about.val1Desc': 'We advise precise application quantities to reduce farm costs and prevent chemical residue issues.',
    'about.val2Title': 'Bilingual Clarity',
    'about.val2Desc': 'All critical application methods and chating features are translated so farmers can read them in Bengali.',
    'about.val3Title': 'Emergency Reserve',
    'about.val3Desc': 'We maintain emergency buffers of oxygen generators to support ponds during heavy rainfall or temperature shifts.',

    // Find Us Page
    'find.title': 'Locate Mahamaya Enterprise',
    'find.desc': 'Find our physical store in Eruar, Bhatar. Visit us for purchases, water checks, or consulting.',
    'find.addressTitle': 'Showroom Address',
    'find.addressDetails': 'Mahamaya Enterprise\nEruar, Bhatar,\nPurba Bardhaman, West Bengal - 713121',
    'find.landmarkTitle': 'Landmark Navigation:',
    'find.landmarkDesc': 'Located near Eruar HDS Balika Vidyalaya and close to the local bus stand. Easily accessible by road for loading feed sacks.',
    'find.hoursTitle': 'Store Working Hours',
    'find.hoursWeek': 'Monday - Sunday',
    'find.hoursTime': '7:00 AM - 9:00 PM',
    'find.hoursSunday': 'Open Daily (সপ্তাহের ৭ দিনই খোলা)',
    'find.btnDirections': 'Get Directions on Maps',
    'find.btnCall': 'Call Store Desk',
    'find.deliveryTitle': 'Village Delivery Network',
    'find.deliveryDesc': 'For cooperative aquaculture farms and bulk feed purchases, we arrange vehicle deliveries directly to ponds within Bhatar and neighboring blocks of Purba Bardhaman.',

    // Contact Us Page
    'contact.title': 'Contact Mahamaya Enterprise',
    'contact.desc': 'Submit a request, call our desk directly, or read our faq guides.',
    'contact.formHeading': 'Send an Inquiry',
    'contact.formSubmittedTitle': 'Enquiry Submitted',
    'contact.formSubmittedDesc': 'Thank you! Our shop staff will review your query and call your phone number shortly.',
    'contact.formBtnReset': 'Send Another Message',
    'contact.labelName': 'Your Name',
    'contact.labelPhone': 'Phone Number',
    'contact.labelProduct': 'Product of Interest',
    'contact.labelMessage': 'Pond Symptom / Inquiry details',
    'contact.btnSubmit': 'Submit Form',
    'contact.infoHeading': 'Store Contacts',
    'contact.infoPhone': 'Phone support:',
    'contact.infoWhatsapp': 'WhatsApp Chat:',
    'contact.infoEmail': 'Email address:',
    'contact.emergencyHeading': 'Emergency Warning',
    'contact.emergencyDesc': 'If your fish are gasping at the surface or prawns show soft shells, CALL us immediately. Do not wait for email replies. We keep emergency oxygenators in stock.',
    'contact.faqHeading': 'Frequently Asked Questions',

    // Gallery Page
    'gallery.title': 'Gallery & Trust Badges',
    'gallery.desc': 'View our business credentials, verified certificates, and success stories from local farmers.',
    'gallery.certTitle': 'Verified Store Status',
    'gallery.certDesc': 'Direct supply channels for aquaculture feeds and remedies.',
    'gallery.certHeader': 'STATEMENT OF TRADE',
    'gallery.certBody': 'Mahamaya Enterprise is a certified stockist and leading regional trader of aquaculture supplements, distributing Care Chem Remedies therapeutics and Almas Agrovet feeds in Bhatar, Purba Bardhaman.',
    'gallery.certFooter': 'Eruar Trade Division',
    'gallery.stockDescTitle': 'Freshness Guarantee',
    'gallery.stockDesc': 'All feed sacks and chemical canisters are stored in dry, elevated platforms in our Eruar godown, avoiding humidity degradation.',
    'gallery.testimonialTitle': 'Success Stories from Purba Bardhaman Farmers'
  },
  bn: {
    // Nav & Layout
    'nav.home': 'হোম',
    'nav.products': 'পণ্যসমূহ',
    'nav.about': 'পরিচিতি',
    'nav.gallery': 'গ্যালারি',
    'nav.findUs': 'অবস্থান',
    'nav.contact': 'যোগাযোগ',
    'nav.langToggle': 'English',
    'nav.dealerBadge': 'প্রধান বিক্রেতা ও স্টকিস্ট',
    'nav.callUs': 'ফোন করুন: +৯১ ৯৪৩৪৬ ৬১৯৯০',
    'nav.callBtn': 'কল করুন',
    'nav.whatsappBtn': 'হোয়াটসঅ্যাপ চ্যাট',
    'footer.description': 'পূর্ব বর্ধমানের মৎস্য চাষীদের সেবায় নিয়োজিত। কেয়ার কেম রেমেডিস পুকুরের কন্ডিশনার এবং পুষ্টিকর আলমাস অ্যাগ্রোভেট মাছের খাবারের নির্ভরযোগ্য বিক্রেতা।',
    'footer.quickLinks': 'দ্রুত লিঙ্ক',
    'footer.storeInfo': 'দোকানের বিবরণ',
    'footer.address': 'মহামায়া এন্টারপ্রাইজ\nএড়ুয়ার, ভাতাড়,\nপূর্ব বর্ধমান, পশ্চিমবঙ্গ - ৭১৩১২১',
    'footer.landmark': 'এড়ুয়ার এইচ.ডি.এস বালিকা বিদ্যালয় এবং বাস স্ট্যান্ডের কাছে',
    'footer.hours': 'সোম - রবি: সকাল ৭:০০ - রাত ৯:০০ (প্রতিদিন খোলা)',
    'footer.copyright': '© ২০২৬ মহামায়া এন্টারপ্রাইজ। সর্বস্বত্ব সংরক্ষিত।',
    'footer.credentials': 'কেয়ার কেম রেমেডিস ও আলমাস ফিডসের নির্ভরযোগ্য বিক্রেতা • এড়ুয়ার হাব',

    // Home Page
    'home.heroTag': 'প্রধান বিক্রেতা ও স্টকিস্ট',
    'home.heroTitle': 'পুকুরের জলের সঠিক শোধন ও মাছের দ্রুত বৃদ্ধির ঔষধ',
    'home.heroDesc': 'পূর্ব বর্ধমানের মৎস্য ও চিংড়ি চাষীদের জন্য কেয়ার কেম ও আলমাস ফিডসের অনুমোদিত ও আসল ঔষধ, অক্সিজেন পাউডার এবং পুষ্টিকর খাবার সরবরাহ করছি।',
    'home.heroBtnCatalog': 'ঔষধের তালিকা',
    'home.heroBtnContact': 'বিনামূল্যে পরামর্শ',
    'home.brandTitle': 'অনুমোদিত ব্র্যান্ডসমূহ',
    'home.brandDesc': 'ভারতের শীর্ষস্থানীয় অ্যাকুয়াকালচার প্রস্তুতকারক কোম্পানির নির্ভরযোগ্য প্রোডাক্ট।',
    'home.brandCcDesc': 'পুকুরের জল শোধক, চিংড়ির জীবাণুনাশক এবং খোলস শক্ত করার ঔষধ।',
    'home.brandAlmasDesc': 'মাছের দ্রুত বৃদ্ধির জন্য ভাসমান খাবার এবং খনিজ পুষ্টি উপাদান।',
    'home.problemTitle': 'পুকুরের সমস্যা অনুযায়ী সমাধান',
    'home.problemDesc': 'আপনার পুকুরের নির্দিষ্ট লক্ষণ দেখে সঠিক ঔষধ নির্বাচন করুন।',
    'home.featuredTitle': 'বিশেষ আকর্ষণীয় প্রোডাক্ট',
    'home.featuredDesc': 'চাষীদের সবচেয়ে পছন্দের এবং বেশি ব্যবহৃত পুকুরের ঔষধ ও ফিড।',
    'home.featuredAll': 'সবকটি ২৭টি ঔষধ দেখুন',
    'home.trustTitle': 'কেন চাষীরা মহামায়া এন্টারপ্রাইজের ওপর ভরসা করেন',
    'home.trustDesc': 'আমরা সঠিক বৈজ্ঞানিক পরামর্শ, আসল ঔষধ এবং সরাসরি স্টক সরবরাহ করে থাকি।',
    'home.trust1Title': '১০০% আসল ঔষধের গ্যারান্টি',
    'home.trust1Desc': 'সরাসরি কোম্পানি থেকে আনা আসল কেয়ার কেম এবং আলমাস ফিডের নিশ্চয়তা।',
    'home.trust2Title': 'জলের গুণমান পরীক্ষা',
    'home.trust2Desc': 'আপনার পুকুরের জলের নমুনা এড়ুয়ার দোকানে নিয়ে আসুন, আমরা পরীক্ষা করে দেব।',
    'home.trust3Title': 'সঠিক পরিমাপের নির্দেশিকা',
    'home.trust3Desc': 'বিঘা প্রতি ঔষধ ব্যবহারের সঠিক ডোজের পরামর্শ দেওয়া হয়, যাতে খরচ বাঁচে।',
    'home.trust4Title': 'খামারে সরাসরি ডেলিভারি',
    'home.trust4Desc': 'সমবায় সমিতি বা বড় চাষীদের জন্য সরাসরি পুকুর পাড়ে গাড়ি করে ফিড পৌঁছে দেওয়া হয়।',
    'home.stats1': '১০+ বছর',
    'home.stats1Desc': 'স্থানীয় চাষীদের সেবায়',
    'home.stats2': '২,৫০০+ পুকুর',
    'home.stats2Desc': 'সফলভাবে জল শোধন ও চিকিৎসা',
    'home.stats3': '৭ দিনই',
    'home.stats3Desc': 'সাপ্তাহিক সেবা ও টেকনিক্যাল সাপোর্ট',
    'home.ctaTitle': 'ঔষধ ব্যবহারের নিয়ম বা পাইকারি অর্ডারের জন্য যোগাযোগ করুন',
    'home.ctaDesc': 'সরাসরি দোকানে ফোন করুন অথবা হোয়াটসঅ্যাপে পুকুরের বিবরণ লিখে পাঠান।',
    'home.ctaCall': 'দোকানে ফোন করুন: +৯১ ৯৪৩৪৬ ৬১৯৯০',
    'home.ctaWhatsapp': 'হোয়াটসঅ্যাপে পরামর্শ',

    // Products Page
    'products.title': 'অ্যাকুয়াকালচার প্রোডাক্ট তালিকা',
    'products.desc': '২৭টি নির্ভরযোগ্য ঔষধ ও ফিডের বিবরণ দেখুন। কোম্পানির নাম অথবা ক্যাটাগরি দিয়ে খুঁজুন।',
    'products.searchPlaceholder': 'ঔষধের নাম বা সমস্যা লিখে খুঁজুন (যেমন: অ্যামোনিয়া, অক্সিজেন)...',
    'products.brandLabel': 'কোম্পানি:',
    'products.categoryLabel': 'ক্যাটাগরি ফিল্টার:',
    'products.allCategories': 'সব ক্যাটাগরি',
    'products.matchingCount': '{count}টি প্রোডাক্ট পাওয়া গেছে',
    'products.clearFilters': 'সব ফিল্টার মুছুন',
    'products.priceLabel': 'মূল্য',
    'products.contactForPrice': 'যোগাযোগ করুন',
    'products.approxPrice': 'আনুমানিক {price} — অর্ডারের সময় জেনে নিন',
    'products.packLabel': 'প্যাক সাইজ:',
    'products.viewDetails': 'বিস্তারিত দেখুন',
    'products.loadMore': 'আরও প্রোডাক্ট দেখুন ({count}টি বাকি)',
    'products.notFoundTitle': 'কোনো ঔষধ পাওয়া যায়নি',
    'products.notFoundDesc': 'আপনার খোঁজা নামের কোনো ঔষধ পাওয়া যায়নি। অন্য কিছু লিখে চেষ্টা করুন।',
    'products.notFoundBtn': 'ফিল্টার পরিষ্কার করুন',

    // Product Detail Page
    'detail.backBtn': 'তালিকায় ফিরে যান',
    'detail.dealerBadge': 'প্রধান স্টকিস্ট প্রোডাক্ট',
    'detail.packSizeLabel': 'প্যাকের ওজন / সাইজ',
    'detail.indicativePrice': 'আনুমানিক মূল্য',
    'detail.contactPrice': 'শোরুমে যোগাযোগ করুন',
    'detail.approxPriceSuffix': 'খুচরা মূল্য — অর্ডারের সময় নিশ্চিত করুন',
    'detail.b2bNotice': 'B2B সতর্কীকরণ: ক্রয়ের পরিমাণ ও অফারের ভিত্তিতে দাম পরিবর্তনশীল। সঠিক দাম জানতে কিনতে যোগাযোগ করুন বাটনে ক্লিক করুন।',
    'detail.benefitsTitle': 'প্রধান উপকারিতা ও কার্যকারিতা',
    'detail.applicationTitle': 'প্রয়োগ বিধি ও ডোজের পরিমাণ',
    'detail.dosageNotice': 'দ্রষ্টব্য: নিয়ম অনুযায়ী খাবার অথবা বালির সাথে মিশিয়ে প্রয়োগ করুন অথবা আমাদের টেকনিশিয়ানের পরামর্শ নিন।',
    'detail.bestFor': 'কোন চাষের জন্য উপযোগী:',
    'detail.contactToBuy': 'কিনতে যোগাযোগ করুন',
    'detail.callToBuy': 'ফোনে অর্ডার করুন',
    'detail.relatedTitle': 'সম্পর্কিত অন্যান্য ঔষধ সমূহ',
    'detail.zoomHint': 'বড় করে দেখতে ট্যাপ করুন',
    'detail.zoomClose': 'বন্ধ করুন',

    // About Us Page
    'about.title': 'মহামায়া এন্টারপ্রাইজ সম্পর্কে',
    'about.desc': 'পূর্ব বর্ধমানের মাছ ও চিংড়ি চাষীদের উন্নত খাবার ও আসল ঔষধ সরবরাহ করার আমাদের যাত্রা।',
    'about.subTitle': 'আমাদের পথচলা',
    'about.heading': 'বিজ্ঞানসম্মত পরামর্শ ও উন্নত মানের ফিড দিয়ে মাছ চাষের উন্নতি',
    'about.storyP1': 'পূর্ব বর্ধমানের ভাতাড়ের এড়ুয়ার এলাকায় মহামায়া এন্টারপ্রাইজ আজ মাছ চাষীদের জন্য একটি বিশ্বস্ত প্রতিষ্ঠান। আমরা বিশ্বাস করি মৎস্য চাষের সফলতা শুধুমাত্র ভালো খাবারের ওপর নির্ভর করে না, তার জন্য প্রয়োজন নিয়মিত জলের কন্ডিশনিং, অ্যামোনিয়া নিয়ন্ত্রণ এবং সঠিক চিকিৎসার ঔষধ।',
    'about.storyP2': 'আমরা কেয়ার কেম রেমেডিসের জলের কন্ডিশনার, মাটি শোধক ও চিংড়ির চিকিৎসার ঔষধের পাশাপাশি আলমাস অ্যাগ্রোভেটের পুষ্টিকর ভাসমান ফিড পর্যাপ্ত পরিমাণে স্টক রাখি। আমরা সরাসরি ফ্যাক্টরি থেকে পণ্য সংগ্রহ করি, ফলে চাষীদের আসল পণ্য ন্যায্য মূল্যে দেওয়া সম্ভব হয়।',
    'about.bilingualCalloutTitle': 'স্থানীয় চাষীদের জন্য জল পরীক্ষা পরিষেবা:',
    'about.bilingualCalloutDesc': 'চাষী ভাইয়েরা আমাদের এড়ুয়ার কেন্দ্রে এসে তাঁদের পুকুরের জল পরীক্ষা করাতে পারেন। আমাদের কর্মীরা অ্যামোনিয়া ও পিএইচ লেভেল মেপে সঠিক ঔষধ নেওয়ার নিখরচায় পরামর্শ দিয়ে থাকেন।',
    'about.credTitle': 'শোরুমের শংসাপত্র ও যোগ্যতা',
    'about.cred1Title': 'প্রধান আঞ্চলিক স্টকিস্ট',
    'about.cred1Desc': 'আমরা সরাসরি কেয়ার কেম এবং আলমাস কোম্পানি থেকে সরাসরি তাজা স্টক সংগ্রহ ও সংরক্ষণ করি।',
    'about.cred2Title': 'টেকনিক্যাল সাপোর্ট',
    'about.cred2Desc': 'পুকুরের জলের বিভিন্ন প্যারামিটার (DO, pH, Ammonia) পরিমাপে অভিজ্ঞ কর্মী সাহায্য করে থাকেন।',
    'about.cred3Title': 'চিংড়ি ও সাদা মাছের স্পেশালিস্ট',
    'about.cred3Desc': 'ভেনামি, বাগদা এবং রুই-কাতলা চাষের জন্য বয়স ও ওজন অনুযায়ী আলাদা ঔষধের নির্দেশিকা রয়েছে।',
    'about.valuesTitle': 'আমাদের মূল লক্ষ্য',
    'about.val1Title': 'সঠিক ডোজের প্রয়োগ',
    'about.val1Desc': 'আমরা অতিরিক্ত ঔষধ ব্যবহারের বিরোধী। জলের পরীক্ষায় ঠিক যতটুকু প্রয়োজন, ততটুকুই ব্যবহার করতে বলি।',
    'about.val2Title': 'সহজ বাংলা বিবরণ',
    'about.val2Desc': 'ঔষধের প্রয়োগবিধি ও পরামর্শ সম্পূর্ণ বাংলায় প্রস্তুত করা হয়েছে যাতে চাষীভাইদের বুঝতে সুবিধা হয়।',
    'about.val3Title': 'জরুরি ব্যাকআপ স্টক',
    'about.val3Desc': 'আবহাওয়া পরিবর্তনের সময় পুকুরে অক্সিজেনের ঘাটতি মেটাতে আমরা জরুরি অক্সিজেন ট্যাবলেটের পর্যাপ্ত স্টক রাখি।',

    // Find Us Page
    'find.title': 'মহামায়া এন্টারপ্রাইজের অবস্থান',
    'find.desc': 'ভাতাড়ের এড়ুয়ার শোরুমে আমাদের ঠিকানা। জল পরীক্ষা ও সরাসরি ঔষধ কিনতে আমাদের অফিসে আসুন।',
    'find.addressTitle': 'শোরুমের ঠিকানা',
    'find.addressDetails': 'মহামায়া এন্টারপ্রাইজ\nএড়ুয়ার, ভাতাড়,\nপূর্ব বর্ধমান, পশ্চিমবঙ্গ - ৭১৩১২১',
    'find.landmarkTitle': 'সহজ ল্যান্ডমার্ক নির্দেশিকা:',
    'find.landmarkDesc': 'এড়ুয়ার এইচ.ডি.এস বালিকা বিদ্যালয় এবং লোকাল বাস স্ট্যান্ডের ঠিক কাছেই অবস্থিত। মূল রাস্তার পাশেই আমাদের গোডাউন হওয়ায় ফিডের বস্তা গাড়িতে লোড করা সহজ।',
    'find.hoursTitle': 'শোরুম খোলার সময়সূচী',
    'find.hoursWeek': 'সোমবার - রবিবার',
    'find.hoursTime': 'সকাল ৭:০০ - রাত ৯:০০',
    'find.hoursSunday': 'সপ্তাহের ৭ দিনই খোলা থাকে',
    'find.btnDirections': 'গুগল ম্যাপে রাস্তা দেখুন',
    'find.btnCall': 'শোরুমে ফোন করুন',
    'find.deliveryTitle': 'নিকটবর্তী গ্রামে হোম ডেলিভারি',
    'find.deliveryDesc': 'ভাতাড় ব্লকের অন্তর্গত যেকোনো মাছ চাষী সমবায় সমিতি বা বড় খামারের জন্য আমরা গাড়ি করে সরাসরি পুকুর পাড়ে ফিড ও ঔষধের বস্তা পৌঁছে দিই।',

    // Contact Us Page
    'contact.title': 'মহামায়া এন্টারপ্রাইজের সাথে যোগাযোগ',
    'contact.desc': 'জিজ্ঞাসা পত্র জমা দিন, সরাসরি কল করুন অথবা সাধারণ প্রশ্ন-উত্তর নির্দেশিকা পড়ুন।',
    'contact.formHeading': 'আপনার জিজ্ঞাসা জানান',
    'contact.formSubmittedTitle': 'জিজ্ঞাসা সফলভাবে পাঠানো হয়েছে',
    'contact.formSubmittedDesc': 'ধন্যবাদ! আমাদের প্রতিনিধি আপনার দেওয়া ফোন নম্বরে খুব শীঘ্রই কল করে কথা বলবেন।',
    'contact.formBtnReset': 'আবারও জিজ্ঞাসা পাঠান',
    'contact.labelName': 'আপনার নাম',
    'contact.labelPhone': 'ফোন নম্বর',
    'contact.labelProduct': 'প্রয়োজনীয় ঔষধ বা ফিড',
    'contact.labelMessage': 'পুকুরের সমস্যা / বার্তার বিবরণ',
    'contact.btnSubmit': 'জিজ্ঞাসা জমা দিন',
    'contact.infoHeading': 'সরাসরি যোগাযোগের নম্বর',
    'contact.infoPhone': 'ফোনে যোগাযোগের সময়:',
    'contact.infoWhatsapp': 'হোয়াটসঅ্যাপ চ্যাট করুন:',
    'contact.infoEmail': 'ইমেইল অ্যাড্রেস:',
    'contact.emergencyHeading': 'জরুরি সতর্কতা',
    'contact.emergencyDesc': 'পুকুরের মাছ যদি ভেসে ওঠে বা চিংড়ির নরম খোলসের মড়ক দেখা দেয়, তবে মেইলের অপেক্ষা না করে সরাসরি ফোনে কল করুন। দোকানে জরুরি অক্সিজেন ট্যাবলেট স্টক আছে।',
    'contact.faqHeading': 'সাধারণ চাষীদের কিছু প্রশ্ন ও উত্তর',

    // Gallery Page
    'gallery.title': 'গোডাউন গ্যালারি ও সার্টিফিকেশন',
    'gallery.desc': 'আমাদের ব্যবসায়িক সত্যতা শংসাপত্র এবং পূর্ব বর্ধমানের চাষী ভাইদের সাফল্যের কথা পড়ুন।',
    'gallery.certTitle': 'ব্যবসায়িক বৈধতার শংসাপত্র',
    'gallery.certDesc': 'কোম্পানির থেকে সরাসরি চাষী ভাইদের জেনুইন সাপ্লাই দেওয়ার নিশ্চয়তা।',
    'gallery.certHeader': 'ট্রেড লাইসেন্স বিবৃতি',
    'gallery.certBody': 'মহামায়া এন্টারপ্রাইজ ভাতাড় (পূর্ব বর্ধমান) এলাকার মৎস্য ঔষধের এক অগ্রণী ট্রেডার ও স্টকিস্ট। আমরা কেয়ার কেম রেমেডিসের ঔষধ ও আলমাস ফিড সরাসরি কারখানা থেকে সংগ্রহ ও সংরক্ষণ করি।',
    'gallery.certFooter': 'এড়ুয়ার ট্রেড ডিভিশন',
    'gallery.stockDescTitle': 'গুনাগুন ও সতেজতার গ্যারান্টি',
    'gallery.stockDesc': 'এড়ুয়ার গোডাউনে মাছের ফিড সবসময় শুকনো ও আর্দ্রতামুক্ত কাঠের মাচার ওপর রাখা হয় যাতে ফাঙ্গাস সংক্রমণ না ঘটে।',
    'gallery.testimonialTitle': 'পূর্ব বর্ধমানের চাষীদের মুখে সাফল্যের কথা'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load language from localStorage if exists, default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('mahamaya_lang');
    return (saved === 'bn' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('mahamaya_lang', lang);
  };

  // Translation helper function
  const t = (key: string): string => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    // Fallback to English key value or the key itself
    return translations['en'][key] || key;
  };

  // Sync html lang attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
