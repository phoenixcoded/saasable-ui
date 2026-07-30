// @project
import branding from '@/branding.json';
import { IconType } from '@/enum';
import { SECTION_PATH, BUY_NOW_URL } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const feature2 = {
  heading: 'Culture of innovation',
  caption:
    'Join a team that embraces forward-thinking ideas, fosters innovation, and cultivates an environment where your creativity can flourish.',
  features: [
    {
      icon: { name: 'tabler-users', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Teamwork',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: { name: 'tabler-star', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Inclusivity',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: { name: 'tabler-chart-histogram', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Growth',
      content: 'Our culture prioritizes continuous learning, encouraging personal and professional development. '
    }
  ]
};

export const feature5 = {
  heading: 'Beyond the 9-to-5',
  caption: 'Our benefits go beyond the standard, ensuring your life outside of work is just as fulfilling.',
  image1: '/assets/images/crypto/graphics/graphics12-light.svg',
  image2: '/assets/images/crypto/graphics/graphics14-light.svg',
  features: [
    {
      icon: 'tabler-coin',
      title: 'Compensation',
      content: 'Enjoy a competitive salary that recognizes your skills and contributions.'
    },
    {
      icon: 'tabler-health-recognition',
      title: 'Healthcare',
      content: "Access to a comprehensive healthcare plan, ensuring you and your family's well-being."
    }
  ],
  features2: [
    {
      icon: 'tabler-briefcase',
      title: 'Automated scaling',
      content: 'Embrace a flexible work environment, allowing you to balance work.'
    },
    {
      icon: 'tabler-users',
      title: 'Real-time',
      content: 'Support your family commitments with family-friendly policies and benefits.'
    }
  ],
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '10k+ Reviews (4.5 out of 5)'
  },
  content: 'Explore diverse career paths within the company through our internal mobility programs.',
  actionBtn: { children: 'Explore all Features', href: '#', sx: { textTransform: 'none' } }
};

export const feature20 = {
  heading: 'Comprehensive UI Kit tailored to your need',
  caption: 'Ready to transform your SaaS designs with one powerful UI Kit?',
  actionBtn: { children: 'Buy Now', href: BUY_NOW_URL, ...linkProps },
  secondaryBtn: { children: 'Explore Blocks', href: SECTION_PATH },
  features: [
    {
      icon: 'tabler-accessible',
      title: 'WCAG complaints',
      content: 'Ensure accessibility with WCAG compliant design for browsing.'
    },
    {
      icon: 'tabler-brand-google',
      title: 'SEO friendly',
      content: 'Boost visibility with SEO-friendly features for better search rankings.'
    },
    {
      icon: 'tabler-stack-2',
      title: 'MUI components',
      content: 'Customize Material 3 design MUI components for enhanced aesthetics.'
    },
    {
      icon: 'tabler-rocket',
      title: 'High performance UI',
      content: 'Adjust content layout for visual coherence on various screen sizes.'
    },
    {
      icon: 'tabler-help',
      title: 'Detailed documentation',
      content: 'Access comprehensive documentation for easy guidance on platform usage.'
    },
    {
      icon: 'tabler-refresh',
      title: 'Regular updates',
      content: 'Receive consistent updates to keep the platform secure and up-to-date with the latest features.'
    }
  ]
};

export const feature21 = {
  heading: `Design faster, Smarter with ${branding.brandName} Figma`,
  caption: 'Unlock Figma’s advanced tools for streamlined, scalable, and responsive SaaS UI design.',
  image: '/assets/images/graphics/default/saasable-figma.png',
  primaryBtn: { children: 'Free Figma', href: 'https://www.figma.com/community/file/1425095061180549847', ...linkProps },
  secondaryBtn: {
    children: 'Preview Pro Figma',
    href: 'https://www.figma.com/design/mlkXfeqxUKqIo0GQhPBqPb/SaasAble---UI-Kit---Preview-only?node-id=11-1833&t=JBHOIIEuYZpmN6v8-1',
    ...linkProps
  },
  features: [
    {
      animationDelay: 0.1,
      icon: 'tabler-components',
      title: 'Component architecture'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-moon',
      title: 'Dark mode'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-rosette-discount-check',
      title: 'Auto layout'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-code',
      title: 'WCAG compliant'
    },
    {
      animationDelay: 0.1,
      icon: { name: 'custom-locked', type: IconType.CUSTOM },
      title: 'Custom icons'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-git-branch',
      title: 'Page demos'
    },
    {
      animationDelay: 0.3,
      icon: { name: 'custom-material', type: IconType.CUSTOM },
      title: 'Material 3 guideline'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-bolt',
      title: 'Quick customization'
    }
  ]
};

export const feature = {
  heading: `What’s inside of ${branding.brandName} plus version`,
  features: [
    {
      image: '/assets/images/shared/react.svg',
      title: 'CRA JavaScript',
      content: 'Ensure accessibility with WCAG compliant design for browsing.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Next.js JavaScript',
      content: 'Tailor typography for optimal readability across all screen sizes.'
    },
    {
      image: '/assets/images/shared/react.svg',
      title: 'CRA TypeScript',
      content: 'Customize Material 3 design MUI components for enhanced aesthetics.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Next.js TypeScript',
      content: 'Adjust content layout for visual coherence on various screen sizes.'
    },
    {
      image: '/assets/images/shared/figma.svg',
      title: 'Figma ',
      content: 'Boost visibility with SEO-friendly features for better search rankings.'
    },
    {
      title: 'Check out our pricing plan',
      content: 'Choose the plan that aligns with your SaaS product requirements.',
      actionBtn: { children: 'Pricing Plan', href: BUY_NOW_URL, ...linkProps }
    }
  ]
};

export const feature7 = {
  heading: 'Real-time performance insights',
  caption: 'Gain a competitive edge with real-time performance monitoring.',
  testimonials: [
    {
      image: '/assets/images/crypto/graphics/graphics10-light.svg',
      features: [
        {
          icon: 'tabler-star',
          title: 'Core value',
          content: 'Unlock growth potential through continuous monitoring, enabling proactive strategies in a competitive landscape.'
        }
      ]
    },
    {
      image: '/assets/images/crypto/graphics/graphics11-light.svg',
      features: [
        {
          icon: 'tabler-route',
          title: 'Multi-cloud orchestration',
          content: 'Enhances flexibility and resilience in a multi-cloud environment.'
        }
      ]
    },
    {
      image: '/assets/images/crypto/graphics/graphics12-light.svg',
      features: [
        {
          icon: 'tabler-history',
          title: 'Story',
          content: 'Real-time performance insights empower teams to respond swiftly, optimizing operations and driving growth.'
        }
      ]
    }
  ],
  breadcrumbs: [{ title: 'Core Value' }, { title: 'Culture' }, { title: 'Story' }]
};

export const feature23 = {
  heading: 'Culture of innovation',
  caption:
    'Join a team that embraces forward-thinking ideas, fosters innovation, and cultivates an environment where your creativity can flourish.',
  heading2: 'Growth',
  caption2: 'Our culture prioritizes continuous learning, encouraging personal and professional development. ',
  image: '/assets/images/graphics/default/about-light.png',
  primaryBtn: { children: 'Join  Our Team', href: '#' },

  features: [
    {
      icon: 'tabler-users',
      title: 'Teamwork',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: 'tabler-star',
      title: 'Inclusivity',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    }
  ]
};
