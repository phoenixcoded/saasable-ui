// @project
import branding from '@/branding.json';

/***************************  SEO METADATA - MAIN LAYOUT  ***************************/

const title = `${branding.brandName}`;
const description = `${branding.brandName} is a cutting-edge software solution designed to revolutionize the way businesses operate. Our platform offers a comprehensive suite of features that enable businesses to streamline their operations, enhance productivity, and drive growth. With ${branding.brandName}, businesses can easily manage their customers, track sales, optimize marketing campaigns, and streamline their internal processes. Whether you're a startup or a large enterprise, ${branding.brandName} has the tools and expertise to help you succeed in today's fast-paced business landscape. Join the ${branding.brandName} community and experience the power of innovative software solutions for business success`;

export const mainMetadata = {
  title: {
    template: `%s | ${title}`,
    default: title // a default is required when creating a template
  },
  description,
  applicationName: title,
  keywords: [
    'SaaS',
    `${branding.brandName}`,
    'Software as a Service',
    'Cloud-based software',
    'Project management tools',
    'Enterprise software'
  ],
  creator: `${branding.company.name}`,
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'http://localhost:3000'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title,
    description,
    images: '/assets/images/metadata/dashboard.png', // recommended dimensions of 1200x630
    url: '/'
  }
};

/***************************  SEO METADATA - SECTIONS  ***************************/

export const SEO_CONTENT = {
  about: {
    title: 'About',
    description: 'About'
  },

  benefit: {
    title: 'Benifit',
    description: 'Benifit'
  },

  forgotPassword: {
    title: 'Forgot Password',
    description: 'Forgot-password'
  },

  login: {
    title: 'Login',
    description: 'Login'
  },

  newPassword: {
    title: 'New Password',
    description: 'New-Password'
  },

  otpVerification: {
    title: 'OTP Verification',
    description: 'Otp-Verification'
  },

  register: {
    title: 'Register',
    description: 'Register'
  },

  cliental: {
    title: 'Cliental',
    description: 'Cliental'
  },

  blog: {
    title: 'Blog',
    description: 'Blog'
  },

  color: {
    title: 'Color',
    description: 'Color'
  },

  comingSoon: {
    title: 'Coming Soon',
    description: 'Coming-Soon'
  },

  contactUs: {
    title: 'Contact US',
    description: 'Contact-US'
  },

  cookie: {
    title: 'Cookie',
    description: 'Cookie'
  },

  cta: {
    title: 'Call to Action',
    description: 'Call to action'
  },

  earlyAccess: {
    title: 'Early Access',
    description: 'EarlyAccess'
  },

  error404: {
    title: 'Error 404',
    description: 'Error-404'
  },

  error500: {
    title: 'Error 500',
    description: 'Error-500'
  },

  faq: {
    title: 'FAQ',
    description: 'FAQ'
  },

  feature: {
    title: 'Feature',
    description: 'Feature'
  },

  footer: {
    title: 'Footer',
    description: 'Footer'
  },

  gallery: {
    title: 'Gallery',
    description: 'Gallery'
  },

  hero: {
    title: 'Hero',
    description: 'Hero'
  },

  icon: {
    title: 'Icon',
    description: 'Icon'
  },

  integration: {
    title: 'Integration',
    description: 'Integration'
  },

  megaMenu: {
    title: 'Mega Menu',
    description: 'Mega-Menu'
  },

  navbar: {
    title: 'Navbar',
    description: 'Navbar'
  },

  onBoard: {
    title: 'On Board',
    description: 'OnBoard'
  },

  other: {
    title: 'Other',
    description: 'Other'
  },

  pricing: {
    title: 'Pricing',
    description: 'Pricing'
  },

  process: {
    title: 'Process',
    description: 'Process'
  },
  privacyPolicy: {
    title: 'Privacy Policy',
    description: 'Privacy-Policy'
  },

  smallHero: {
    title: 'Small Hero',
    description: 'Small-Hero'
  },

  team: {
    title: 'Team',
    description: 'Team'
  },

  testimonial: {
    title: 'Testimonial',
    description: 'Testimonial'
  },

  topOffer: {
    title: 'Top Offer',
    description: 'Top-Offer'
  },

  typography: {
    title: 'Typoghaphy',
    description: 'Typoghaphy'
  },

  underMaintenance: {
    title: 'Under Maintenance',
    description: 'Under-Maintenance'
  }
};
