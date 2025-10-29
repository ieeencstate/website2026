// Internationalization (i18n) configuration for IEEE at NC State website
// This infrastructure is set up to support multiple languages (bonus requirement)

export const i18nConfig = {
  // Default language
  defaultLocale: 'en',
  
  // Supported locales (ready for expansion)
  locales: ['en', 'es', 'zh'], // English, Spanish, Mandarin
  
  // Locale detection settings
  localeDetection: {
    // Detect locale from browser settings
    browser: true,
    // Detect locale from URL path
    path: true,
    // Fallback to default locale
    fallback: true,
  },
  
  // URL structure for different locales
  urlStructure: {
    // Default: /about, /events, etc.
    // Spanish: /es/about, /es/events, etc.
    // Mandarin: /zh/about, /zh/events, etc.
    prefix: 'as-needed', // Only add prefix for non-default locales
  },
};

// Translation keys structure (ready for implementation)
export const translationKeys = {
  // Navigation
  nav: {
    home: 'nav.home',
    about: 'nav.about',
    events: 'nav.events',
    gallery: 'nav.gallery',
    awards: 'nav.awards',
    scholarship: 'nav.scholarship',
    sponsors: 'nav.sponsors',
    contact: 'nav.contact',
  },
  
  // Common UI elements
  common: {
    readMore: 'common.readMore',
    learnMore: 'common.learnMore',
    contactUs: 'common.contactUs',
    joinIEEE: 'common.joinIEEE',
    viewEvents: 'common.viewEvents',
    comingSoon: 'common.comingSoon',
    loading: 'common.loading',
  },
  
  // Page-specific content
  pages: {
    home: {
      title: 'pages.home.title',
      subtitle: 'pages.home.subtitle',
      description: 'pages.home.description',
    },
    about: {
      title: 'pages.about.title',
      history: 'pages.about.history',
      mission: 'pages.about.mission',
    },
    events: {
      title: 'pages.events.title',
      upcoming: 'pages.events.upcoming',
      calendar: 'pages.events.calendar',
    },
    // ... other pages
  },
  
  // Form labels and messages
  forms: {
    email: 'forms.email',
    subject: 'forms.subject',
    message: 'forms.message',
    submit: 'forms.submit',
    required: 'forms.required',
  },
  
  // Accessibility labels
  a11y: {
    skipToMain: 'a11y.skipToMain',
    openMenu: 'a11y.openMenu',
    closeMenu: 'a11y.closeMenu',
    socialLink: 'a11y.socialLink',
  },
};

// Sample translations (ready for professional translation)
export const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.events': 'Calendar',
    'nav.gallery': 'Gallery',
    'nav.awards': 'Awards',
    'nav.scholarship': 'Scholarship',
    'nav.sponsors': 'Sponsors',
    'nav.contact': 'Contact Us',
    
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.contactUs': 'Contact Us',
    'common.joinIEEE': 'Join IEEE',
    'common.viewEvents': 'View Events',
    'common.comingSoon': 'Coming Soon',
    'common.loading': 'Loading...',
    
    'pages.home.title': 'IEEE at NC State',
    'pages.home.subtitle': 'Student Branch',
    'pages.home.description': 'Engaging students and fostering connections to companies, providing access to industry knowledge through workshops, talks, and events.',
    
    'a11y.skipToMain': 'Skip to main content',
    'a11y.openMenu': 'Open navigation menu',
    'a11y.closeMenu': 'Close navigation menu',
    'a11y.socialLink': 'Visit our {{platform}} page',
  },
  
  // Spanish translations (placeholder - would be professionally translated)
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.events': 'Calendario',
    'nav.gallery': 'Galería',
    'nav.awards': 'Premios',
    'nav.scholarship': 'Beca',
    'nav.sponsors': 'Patrocinadores',
    'nav.contact': 'Contacto',
    
    'common.readMore': 'Leer Más',
    'common.learnMore': 'Aprender Más',
    'common.contactUs': 'Contáctanos',
    'common.joinIEEE': 'Únete a IEEE',
    'common.viewEvents': 'Ver Eventos',
    'common.comingSoon': 'Próximamente',
    'common.loading': 'Cargando...',
    
    'pages.home.title': 'IEEE en NC State',
    'pages.home.subtitle': 'Rama Estudiantil',
    'pages.home.description': 'Involucrando estudiantes y fomentando conexiones con empresas, proporcionando acceso al conocimiento de la industria a través de talleres, charlas y eventos.',
    
    'a11y.skipToMain': 'Ir al contenido principal',
    'a11y.openMenu': 'Abrir menú de navegación',
    'a11y.closeMenu': 'Cerrar menú de navegación',
    'a11y.socialLink': 'Visita nuestra página de {{platform}}',
  },
  
  // Mandarin translations (placeholder - would be professionally translated)
  zh: {
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.events': '日历',
    'nav.gallery': '画廊',
    'nav.awards': '奖项',
    'nav.scholarship': '奖学金',
    'nav.sponsors': '赞助商',
    'nav.contact': '联系我们',
    
    'common.readMore': '阅读更多',
    'common.learnMore': '了解更多',
    'common.contactUs': '联系我们',
    'common.joinIEEE': '加入IEEE',
    'common.viewEvents': '查看活动',
    'common.comingSoon': '即将推出',
    'common.loading': '加载中...',
    
    'pages.home.title': 'IEEE北卡州立大学',
    'pages.home.subtitle': '学生分会',
    'pages.home.description': '通过研讨会、讲座和活动，让学生参与并促进与公司的联系，提供获得行业知识的机会。',
    
    'a11y.skipToMain': '跳转到主要内容',
    'a11y.openMenu': '打开导航菜单',
    'a11y.closeMenu': '关闭导航菜单',
    'a11y.socialLink': '访问我们的{{platform}}页面',
  },
};

// Utility function to get translation
export function getTranslation(key: string, locale: string = 'en', params?: Record<string, string>): string {
  const translation = translations[locale as keyof typeof translations];
  if (!translation) {
    return translations.en[key as keyof typeof translations.en] || key;
  }
  
  let text = translation[key as keyof typeof translation] || translations.en[key as keyof typeof translations.en] || key;
  
  // Replace parameters if provided
  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{{${param}}}`, value);
    });
  }
  
  return text;
}

// Hook for using translations in components (ready for implementation)
export function useTranslation(locale: string = 'en') {
  return {
    t: (key: string, params?: Record<string, string>) => getTranslation(key, locale, params),
    locale,
    availableLocales: i18nConfig.locales,
  };
}

// Export for Next.js middleware configuration
export default i18nConfig;