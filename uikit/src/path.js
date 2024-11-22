function path(urlChunks) {
  return urlChunks.join('/');
}

export const SECTION_PATH = '/sections';
export const ADMIN_PATH = 'https://admin.saasable.io/';
export const BUY_NOW_URL = 'https://mui.com/store/items/saasable-multipurpose-ui-kit-and-dashboard-template';
export const FREEBIES_URL = 'https://github.com/phoenixcoded/saasable-ui';
export const DOCS_URL = 'https://phoenixcoded.gitbook.io/saasable ';
export const BLOCK_PATH = '/blocks';
const AUTH_PATH = 'auth';

export const PAGE_PATH = {
  // auth pages path
  login: path([SECTION_PATH, AUTH_PATH, 'login']),
  forgotPassword: path([SECTION_PATH, AUTH_PATH, 'forgot-password']),
  newPassword: path([SECTION_PATH, AUTH_PATH, 'new-password']),
  otpVerification: path([SECTION_PATH, AUTH_PATH, 'otp-verification']),
  register: path([SECTION_PATH, AUTH_PATH, 'register']),

  about: path([SECTION_PATH, 'about']),
  benefit: path([SECTION_PATH, 'benefit']),
  blog: path([SECTION_PATH, 'blog']),
  clientele: path([SECTION_PATH, 'clientele']),
  color: path([SECTION_PATH, 'color']),
  comingSoon: path([SECTION_PATH, 'coming-soon']),
  contactUs: path([SECTION_PATH, 'contact-us']),
  cookie: path([SECTION_PATH, 'cookie']),
  cta: path([SECTION_PATH, 'cta']),
  earlyAccess: path([SECTION_PATH, 'early-access']),
  error404: path([SECTION_PATH, 'error404']),
  error500: path([SECTION_PATH, 'error500']),
  faq: path([SECTION_PATH, 'faq']),
  feature: path([SECTION_PATH, 'feature']),
  footer: path([SECTION_PATH, 'footer']),
  gallery: path([SECTION_PATH, 'gallery']),
  hero: path([SECTION_PATH, 'hero']),
  icon: path([SECTION_PATH, 'icon']),
  integration: path([SECTION_PATH, 'integration']),
  megaMenu: path([SECTION_PATH, 'mega-menu']),
  navbar: path([SECTION_PATH, 'navbar']),
  onboard: path([SECTION_PATH, 'onboard']),
  other: path([SECTION_PATH, 'other']),
  pricing: path([SECTION_PATH, 'pricing']),
  process: path([SECTION_PATH, 'process']),
  privacyPolicy: path([SECTION_PATH, 'privacy-policy']),
  proPage: path([SECTION_PATH, 'pro-page']),
  smallHero: path([SECTION_PATH, 'small-hero']),
  team: path([SECTION_PATH, 'team']),
  testimonial: path([SECTION_PATH, 'testimonial']),
  termsCondition: path([SECTION_PATH, 'terms-condition']),
  topOffer: path([SECTION_PATH, 'top-offer']),
  typography: path([SECTION_PATH, 'typography']),
  underMaintenance: path([SECTION_PATH, 'under-maintenance']),

  // pages path
  aboutPage: '/about',
  careerPage: '/career',
  contactPage: '/contact',
  faqPage: '/faq',
  pricingPage: '/pricing',
  privacyPolicyPage: '/privacy-policy',
  termsConditionPage: '/terms-condition'
};

export const PRIVIEW_PATH = {
  about: {
    about1: path([BLOCK_PATH, 'about', 'about1']),
    about2: path([BLOCK_PATH, 'about', 'about2']),
    about3: path([BLOCK_PATH, 'about', 'about3'])
  },
  auth: {
    login: {
      login1: path([BLOCK_PATH, AUTH_PATH, 'login/1']),
      login2: path([BLOCK_PATH, AUTH_PATH, 'login/2']),
      login3: path([BLOCK_PATH, AUTH_PATH, 'login/3']),
      login4: path([BLOCK_PATH, AUTH_PATH, 'login/4']),
      login5: path([BLOCK_PATH, AUTH_PATH, 'login/5'])
    },
    register: path([BLOCK_PATH, AUTH_PATH, 'register']),
    forgotPassword: path([BLOCK_PATH, AUTH_PATH, 'forgot-password']),
    newPassword: path([BLOCK_PATH, AUTH_PATH, 'new-password']),
    otpVerification: path([BLOCK_PATH, AUTH_PATH, 'otp-verification'])
  },
  benefit: {
    benefit1: path([BLOCK_PATH, 'benefit', 'benefit1']),
    benefit2: path([BLOCK_PATH, 'benefit', 'benefit2']),
    benefit3: path([BLOCK_PATH, 'benefit', 'benefit3']),
    benefit4: path([BLOCK_PATH, 'benefit', 'benefit4']),
    benefit5: path([BLOCK_PATH, 'benefit', 'benefit5']),
    benefit6: path([BLOCK_PATH, 'benefit', 'benefit6']),
    benefit7: path([BLOCK_PATH, 'benefit', 'benefit7']),
    benefit8: path([BLOCK_PATH, 'benefit', 'benefit8']),
    benefit9: path([BLOCK_PATH, 'benefit', 'benefit9'])
  },
  blog: {
    blog1: path([BLOCK_PATH, 'blog', 'blog1']),
    blog2: path([BLOCK_PATH, 'blog', 'blog2']),
    blog3: path([BLOCK_PATH, 'blog', 'blog3']),
    blog4: path([BLOCK_PATH, 'blog', 'blog4']),
    blog5: path([BLOCK_PATH, 'blog', 'blog5']),
    blog6: path([BLOCK_PATH, 'blog', 'blog6'])
  },
  clientele: {
    clientele1: path([BLOCK_PATH, 'clientele', 'clientele1']),
    clientele2: path([BLOCK_PATH, 'clientele', 'clientele2']),
    clientele3: path([BLOCK_PATH, 'clientele', 'clientele3']),
    clientele4: path([BLOCK_PATH, 'clientele', 'clientele4']),
    clientele5: path([BLOCK_PATH, 'clientele', 'clientele5']),
    clientele6: path([BLOCK_PATH, 'clientele', 'clientele6']),
    clientele7: path([BLOCK_PATH, 'clientele', 'clientele7'])
  },
  cta: {
    cta1: path([BLOCK_PATH, 'cta', 'cta1']),
    cta2: path([BLOCK_PATH, 'cta', 'cta2']),
    cta3: path([BLOCK_PATH, 'cta', 'cta3']),
    cta4: path([BLOCK_PATH, 'cta', 'cta4']),
    cta5: path([BLOCK_PATH, 'cta', 'cta5']),
    cta6: path([BLOCK_PATH, 'cta', 'cta6']),
    cta7: path([BLOCK_PATH, 'cta', 'cta7']),
    cta8: path([BLOCK_PATH, 'cta', 'cta8']),
    cta9: path([BLOCK_PATH, 'cta', 'cta9']),
    cta10: path([BLOCK_PATH, 'cta', 'cta10']),
    cta11: path([BLOCK_PATH, 'cta', 'cta11']),
    cta12: path([BLOCK_PATH, 'cta', 'cta12'])
  },
  comingSoon: path([BLOCK_PATH, 'coming-soon']),
  cookie: {
    cookie1: path([BLOCK_PATH, 'cookie', 'cookie1']),
    cookie2: path([BLOCK_PATH, 'cookie', 'cookie2']),
    cookie3: path([BLOCK_PATH, 'cookie', 'cookie3'])
  },
  contactUs: {
    contactUs1: path([BLOCK_PATH, 'contact-us', 'contact-us1']),
    contactUs2: path([BLOCK_PATH, 'contact-us', 'contact-us2']),
    contactUs3: path([BLOCK_PATH, 'contact-us', 'contact-us3']),
    contactUs4: path([BLOCK_PATH, 'contact-us', 'contact-us4']),
    contactUs5: path([BLOCK_PATH, 'contact-us', 'contact-us5']),
    contactUs6: path([BLOCK_PATH, 'contact-us', 'contact-us6'])
  },
  error404: path([BLOCK_PATH, 'error404']),
  error500: path([BLOCK_PATH, 'error500']),
  earlyAccess: path([BLOCK_PATH, 'early-access']),
  faq: {
    faq1: path([BLOCK_PATH, 'faq', 'faq1']),
    faq2: path([BLOCK_PATH, 'faq', 'faq2']),
    faq3: path([BLOCK_PATH, 'faq', 'faq3']),
    faq4: path([BLOCK_PATH, 'faq', 'faq4']),
    faq5: path([BLOCK_PATH, 'faq', 'faq5']),
    faq6: path([BLOCK_PATH, 'faq', 'faq6']),
    faq7: path([BLOCK_PATH, 'faq', 'faq7'])
  },
  feature: {
    feature1: path([BLOCK_PATH, 'feature', 'feature1']),
    feature2: path([BLOCK_PATH, 'feature', 'feature2']),
    feature3: path([BLOCK_PATH, 'feature', 'feature3']),
    feature4: path([BLOCK_PATH, 'feature', 'feature4']),
    feature5: path([BLOCK_PATH, 'feature', 'feature5']),
    feature6: path([BLOCK_PATH, 'feature', 'feature6']),
    feature7: path([BLOCK_PATH, 'feature', 'feature7']),
    feature8: path([BLOCK_PATH, 'feature', 'feature8']),
    feature9: path([BLOCK_PATH, 'feature', 'feature9']),
    feature10: path([BLOCK_PATH, 'feature', 'feature10']),
    feature11: path([BLOCK_PATH, 'feature', 'feature11']),
    feature12: path([BLOCK_PATH, 'feature', 'feature12']),
    feature13: path([BLOCK_PATH, 'feature', 'feature13']),
    feature14: path([BLOCK_PATH, 'feature', 'feature14']),
    feature15: path([BLOCK_PATH, 'feature', 'feature15']),
    feature16: path([BLOCK_PATH, 'feature', 'feature16']),
    feature17: path([BLOCK_PATH, 'feature', 'feature17']),
    feature18: path([BLOCK_PATH, 'feature', 'feature18']),
    feature19: path([BLOCK_PATH, 'feature', 'feature19']),
    feature20: path([BLOCK_PATH, 'feature', 'feature20']),
    feature21: path([BLOCK_PATH, 'feature', 'feature21']),
    feature22: path([BLOCK_PATH, 'feature', 'feature22']),
    feature23: path([BLOCK_PATH, 'feature', 'feature23'])
  },
  footer: {
    footer1: path([BLOCK_PATH, 'footer', 'footer1']),
    footer2: path([BLOCK_PATH, 'footer', 'footer2']),
    footer3: path([BLOCK_PATH, 'footer', 'footer3']),
    footer4: path([BLOCK_PATH, 'footer', 'footer4']),
    footer5: path([BLOCK_PATH, 'footer', 'footer5']),
    footer6: path([BLOCK_PATH, 'footer', 'footer6']),
    footer7: path([BLOCK_PATH, 'footer', 'footer7'])
  },
  gallery: {
    gallery1: path([BLOCK_PATH, 'gallery', 'gallery1']),
    gallery2: path([BLOCK_PATH, 'gallery', 'gallery2']),
    gallery3: path([BLOCK_PATH, 'gallery', 'gallery3']),
    gallery4: path([BLOCK_PATH, 'gallery', 'gallery4'])
  },
  hero: {
    hero1: path([BLOCK_PATH, 'hero', 'hero1']),
    hero2: path([BLOCK_PATH, 'hero', 'hero2']),
    hero3: path([BLOCK_PATH, 'hero', 'hero3']),
    hero4: path([BLOCK_PATH, 'hero', 'hero4']),
    hero5: path([BLOCK_PATH, 'hero', 'hero5']),
    hero6: path([BLOCK_PATH, 'hero', 'hero6']),
    hero7: path([BLOCK_PATH, 'hero', 'hero7']),
    hero8: path([BLOCK_PATH, 'hero', 'hero8']),
    hero9: path([BLOCK_PATH, 'hero', 'hero9']),
    hero10: path([BLOCK_PATH, 'hero', 'hero10']),
    hero11: path([BLOCK_PATH, 'hero', 'hero11']),
    hero12: path([BLOCK_PATH, 'hero', 'hero12']),
    hero13: path([BLOCK_PATH, 'hero', 'hero13']),
    hero14: path([BLOCK_PATH, 'hero', 'hero14']),
    hero15: path([BLOCK_PATH, 'hero', 'hero15']),
    hero16: path([BLOCK_PATH, 'hero', 'hero16']),
    hero17: path([BLOCK_PATH, 'hero', 'hero17'])
  },
  integration: {
    integration1: path([BLOCK_PATH, 'integration', 'integration1']),
    integration2: path([BLOCK_PATH, 'integration', 'integration2']),
    integration3: path([BLOCK_PATH, 'integration', 'integration3']),
    integration4: path([BLOCK_PATH, 'integration', 'integration4']),
    integration5: path([BLOCK_PATH, 'integration', 'integration5']),
    integration6: path([BLOCK_PATH, 'integration', 'integration6']),
    integration7: path([BLOCK_PATH, 'integration', 'integration7']),
    integration8: path([BLOCK_PATH, 'integration', 'integration8'])
  },
  megamenu: {
    megamenu1: path([BLOCK_PATH, 'megamenu', 'megamenu1']),
    megamenu2: path([BLOCK_PATH, 'megamenu', 'megamenu2']),
    megamenu3: path([BLOCK_PATH, 'megamenu', 'megamenu3']),
    megamenu4: path([BLOCK_PATH, 'megamenu', 'megamenu4']),
    megamenu5: path([BLOCK_PATH, 'megamenu', 'megamenu5'])
  },
  navbar: {
    navbar1: path([BLOCK_PATH, 'navbar', 'navbar1']),
    navbar2: path([BLOCK_PATH, 'navbar', 'navbar2']),
    navbar3: path([BLOCK_PATH, 'navbar', 'navbar3']),
    navbar4: path([BLOCK_PATH, 'navbar', 'navbar4']),
    navbar5: path([BLOCK_PATH, 'navbar', 'navbar5']),
    navbar6: path([BLOCK_PATH, 'navbar', 'navbar6']),
    navbar7: path([BLOCK_PATH, 'navbar', 'navbar7']),
    navbar8: path([BLOCK_PATH, 'navbar', 'navbar8']),
    navbar9: path([BLOCK_PATH, 'navbar', 'navbar9']),
    navbar10: path([BLOCK_PATH, 'navbar', 'navbar10'])
  },
  onboard: path([BLOCK_PATH, 'onboard']),
  other: {
    other1: path([BLOCK_PATH, 'other', 'other1']),
    other2: path([BLOCK_PATH, 'other', 'other2']),
    other3: path([BLOCK_PATH, 'other', 'other3'])
  },
  pricing: {
    pricing1: path([BLOCK_PATH, 'pricing', 'pricing1']),
    pricing2: path([BLOCK_PATH, 'pricing', 'pricing2']),
    pricing3: path([BLOCK_PATH, 'pricing', 'pricing3']),
    pricing4: path([BLOCK_PATH, 'pricing', 'pricing4']),
    pricing5: path([BLOCK_PATH, 'pricing', 'pricing5']),
    pricing6: path([BLOCK_PATH, 'pricing', 'pricing6']),
    pricing7: path([BLOCK_PATH, 'pricing', 'pricing7']),
    pricing8: path([BLOCK_PATH, 'pricing', 'pricing8']),
    pricing9: path([BLOCK_PATH, 'pricing', 'pricing9'])
  },
  process: {
    process1: path([BLOCK_PATH, 'process', 'process1']),
    process2: path([BLOCK_PATH, 'process', 'process2']),
    process3: path([BLOCK_PATH, 'process', 'process3']),
    process4: path([BLOCK_PATH, 'process', 'process4']),
    process5: path([BLOCK_PATH, 'process', 'process5']),
    process6: path([BLOCK_PATH, 'process', 'process6']),
    process7: path([BLOCK_PATH, 'process', 'process7'])
  },
  privacyPolicy: path([BLOCK_PATH, 'privacy-policy']),
  proPage: path([BLOCK_PATH, 'pro-page']),
  smallHero: {
    smallHero1: path([BLOCK_PATH, 'small-hero', 'small-hero1']),
    smallHero2: path([BLOCK_PATH, 'small-hero', 'small-hero2']),
    smallHero3: path([BLOCK_PATH, 'small-hero', 'small-hero3']),
    smallHero4: path([BLOCK_PATH, 'small-hero', 'small-hero4']),
    smallHero5: path([BLOCK_PATH, 'small-hero', 'small-hero5']),
    smallHero6: path([BLOCK_PATH, 'small-hero', 'small-hero6']),
    smallHero7: path([BLOCK_PATH, 'small-hero', 'small-hero7'])
  },
  team: {
    team1: path([BLOCK_PATH, 'team', 'team1']),
    team2: path([BLOCK_PATH, 'team', 'team2']),
    team3: path([BLOCK_PATH, 'team', 'team3']),
    team4: path([BLOCK_PATH, 'team', 'team4']),
    team5: path([BLOCK_PATH, 'team', 'team5']),
    team6: path([BLOCK_PATH, 'team', 'team6']),
    team7: path([BLOCK_PATH, 'team', 'team7']),
    team8: path([BLOCK_PATH, 'team', 'team8'])
  },
  testimonial: {
    testimonial1: path([BLOCK_PATH, 'testimonial', 'testimonial1']),
    testimonial2: path([BLOCK_PATH, 'testimonial', 'testimonial2']),
    testimonial3: path([BLOCK_PATH, 'testimonial', 'testimonial3']),
    testimonial4: path([BLOCK_PATH, 'testimonial', 'testimonial4']),
    testimonial5: path([BLOCK_PATH, 'testimonial', 'testimonial5']),
    testimonial6: path([BLOCK_PATH, 'testimonial', 'testimonial6']),
    testimonial7: path([BLOCK_PATH, 'testimonial', 'testimonial7']),
    testimonial8: path([BLOCK_PATH, 'testimonial', 'testimonial8']),
    testimonial9: path([BLOCK_PATH, 'testimonial', 'testimonial9']),
    testimonial10: path([BLOCK_PATH, 'testimonial', 'testimonial10']),
    testimonial11: path([BLOCK_PATH, 'testimonial', 'testimonial11'])
  },
  termsCondition: path([BLOCK_PATH, 'terms-condition']),
  topOffer: {
    topOffer1: path([BLOCK_PATH, 'top-offer', 'top-offer1']),
    topOffer2: path([BLOCK_PATH, 'top-offer', 'top-offer2']),
    topOffer3: path([BLOCK_PATH, 'top-offer', 'top-offer3']),
    topOffer4: path([BLOCK_PATH, 'top-offer', 'top-offer4']),
    topOffer5: path([BLOCK_PATH, 'top-offer', 'top-offer5'])
  },
  typography: path([BLOCK_PATH, 'typography']),
  underMaintenance: path([BLOCK_PATH, 'under-maintenance'])
};
