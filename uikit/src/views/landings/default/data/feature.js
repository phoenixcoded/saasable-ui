// @project
import branding from '@/branding.json';
import { IconType } from '@/enum';
import { SECTION_PATH, BUY_NOW_URL, ADMIN_PATH, DOCS_URL } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const feature2 = {
  heading: 'Culture of Innovation',
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
  image1: '/assets/images/graphics/ai/graphics3-light.svg',
  image2: '/assets/images/graphics/ai/graphics2-light.svg',
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
      title: 'Automated Scaling',
      content: 'Embrace a flexible work environment, allowing you to balance work.'
    },
    {
      icon: 'tabler-users',
      title: 'Real-Time',
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
  actionBtn: { children: 'Explore all Features', href: '#' }
};

export const feature9 = {
  heading: 'Streamline Your Business with Our CRM Solution',
  caption: 'Discover the features that will transform your customer relationships',
  features: [
    {
      icon: 'custom-brain',
      title: 'AI-Powered Analytics',
      content: 'Leverage AI for Predictive Insights and Sales Opportunities.'
    },
    {
      icon: 'custom-path',
      title: 'Journey Mapping',
      content: 'Customer experiences at every touchpoint with it.'
    },
    {
      icon: 'custom-statastic',
      title: 'Voice & Speech Analytics',
      content: 'Actionable insights from customer interactions through it.'
    },
    {
      icon: 'custom-remote',
      title: 'Sales Gamification',
      content: 'Boost sales team motivation and performance with it.'
    },
    {
      icon: 'custom-lock',
      title: 'Subscription Management',
      content: 'Effortlessly handle and optimize subscriptions with it.'
    },
    {
      icon: 'custom-interface',
      title: 'Intuitive Interface',
      content: 'Simplify user interactions & enhance usability with it.'
    }
  ]
};

export const feature10 = {
  heading: 'Design Seamlessly with Figma',
  caption: 'Use Figma tools like Component Architecture and Dark Mode to speed up your design process.',
  typesetPosition: 'center',
  primaryBtn: { children: 'Buy Figma' },
  secondaryBtn: { children: 'Live Figma Preview' },
  features: [
    {
      animationDelay: 0.1,
      icon: { name: 'tabler-components', type: IconType.STROKE, stroke: 1.25 },
      title: 'Component Architecture',
      content: 'Organize and reuse components for scalable design.'
    },
    {
      animationDelay: 0.2,
      icon: { name: 'tabler-layout-list', type: IconType.STROKE, stroke: 1.25 },
      title: 'Auto-layout',
      content: 'Auto-layout system for effortless design alignment and responsiveness.'
    },
    {
      animationDelay: 0.3,
      icon: { name: 'tabler-clipboard-text', type: IconType.STROKE, stroke: 1.25 },
      title: 'Clear Guidance',
      content: 'Easy-to-follow instructions for seamless navigation & understanding.'
    },
    {
      animationDelay: 0.1,
      icon: { name: 'tabler-devices-code', type: IconType.STROKE, stroke: 1.25 },
      title: 'Responsive',
      content: 'Design adaptable layouts for all screen sizes effortlessly.'
    },

    {
      animationDelay: 0.2,
      icon: { name: 'tabler-keyframe-align-center', type: IconType.STROKE, stroke: 1.25 },
      title: 'Dark Mode',
      content: 'Seamlessly switch to dark mode with a single click.'
    },

    {
      animationDelay: 0.3,
      icon: { name: 'tabler-settings-2', type: IconType.STROKE, stroke: 1.25 },
      title: 'Variables',
      content: 'Manage color and typography settings efficiently with variables.'
    }
  ],
  video: {
    thumbnail: '/assets/images/graphics/ai/background2.svg',
    src: '/assets/videos/test.mp4'
  }
};

export const feature20 = {
  heading: 'Comprehensive UI Kit Tailored to your Need',
  caption: 'Ready to transform your SaaS designs with one powerful UI Kit?',
  actionBtn: { children: 'Buy Now', href: BUY_NOW_URL, ...linkProps },
  secondaryBtn: { children: 'Explore Blocks', href: SECTION_PATH },
  features: [
    {
      icon: 'tabler-accessible',
      title: 'WCAG Compliant',
      content: 'Ensure accessibility with WCAG compliant design for browsing.'
    },
    {
      icon: 'tabler-brand-google',
      title: 'SEO Friendly',
      content: 'Boost visibility with SEO-friendly features for better search rankings.'
    },
    {
      icon: 'tabler-stack-2',
      title: 'MUI Components',
      content: 'Customize Material 3 design MUI components for enhanced aesthetics.'
    },
    {
      icon: 'tabler-rocket',
      title: 'High Performance UI',
      content: 'Adjust content layout for visual coherence on various screen sizes.'
    },
    {
      icon: 'tabler-help',
      title: 'Detailed Documentation',
      content: 'Access comprehensive documentation for easy guidance on platform usage.'
    },
    {
      icon: 'tabler-refresh',
      title: 'Regular Updates',
      content: 'Receive consistent updates to keep the platform secure and up-to-date with the latest features.'
    }
  ]
};

export const feature21 = {
  heading: `Design Faster, Smarter with ${branding.brandName} Figma`,
  caption: 'Unlock Figma’s advanced tools for streamlined, scalable, and responsive SaaS UI design.',
  image: '/assets/images/graphics/ai/desktop1-light.svg',
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
      title: 'Component Architecture'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-moon',
      title: 'Dark Mode'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-brightness-auto',
      title: 'Auto Layout'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-accessible',
      title: 'WCAG Compliant'
    },
    {
      animationDelay: 0.1,
      icon: 'tabler-icons',
      title: 'Custom Icons'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-file-stack',
      title: 'Page Demos'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-brand-matrix',
      title: 'Material 3 Guideline'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-click',
      title: 'Quick Customization'
    }
  ]
};

export const feature = {
  heading: `What’s Inside of ${branding.brandName} Plus Version`,
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
      title: 'Check Out Our Pricing Plan',
      content: 'Choose the plan that aligns with your SaaS product requirements.',
      actionBtn: { children: 'Pricing Plan', href: BUY_NOW_URL, ...linkProps }
    }
  ]
};

export const feature7 = {
  heading: 'Real-Time Performance Insights',
  caption: 'Gain a competitive edge with real-time performance monitoring.',
  testimonials: [
    {
      image: '/assets/images/graphics/ai/graphics6-light.svg',
      features: [
        {
          icon: 'tabler-star',
          title: 'Core Value',
          content: 'Unlock growth potential through continuous monitoring, enabling proactive strategies in a competitive landscape.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics8-light.svg',
      features: [
        {
          icon: 'tabler-route',
          title: 'Multi-Cloud Orchestration',
          content: 'Enhances flexibility and resilience in a multi-cloud environment.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics3-light.svg',
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
  heading: 'Culture of Innovation',
  caption:
    'Join a team that embraces forward-thinking ideas, fosters innovation, and cultivates an environment where your creativity can flourish.',
  heading2: 'Growth',
  caption2: 'Our culture prioritizes continuous learning, encouraging personal and professional development. ',
  image: '/assets/images/graphics/default/feature23-light.png',
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

export const feature18 = {
  heading: 'Powerful Admin Interface',
  caption: 'Manage data, users, and workflows effortlessly with intuitive, customizable admin controls and features.',
  topics: [
    {
      icon: 'tabler-sparkles',
      title: 'Material UI Powered',
      title2: 'Leverage Power of Material UI Components',
      description: 'The power and flexibility of Material UI components in admin template',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      list: [
        { primary: 'Nextjs JavaScript/TypeScript' },
        { primary: 'Customizable Themes' },
        { primary: 'Rich Form and Table Components' },
        { primary: 'Responsive Grid System' }
      ],
      actionBtn: { children: 'View Dashboard', href: ADMIN_PATH, ...linkProps },
      actionBtn2: { children: 'Docs', href: DOCS_URL, ...linkProps }
    },
    {
      icon: 'tabler-palette',
      title: 'Customizable Themes',
      title2: 'Flexible Theming Options',
      description: 'Tailor themes effortlessly with MUI v6 robust theming system.',
      image: '/assets/images/graphics/default/admin-dashboard-2.png',
      list: [
        { primary: 'Easy options for Theming' },
        { primary: 'Layout Options' },
        { primary: 'Color Presets tailored to your Web Apps' },
        { primary: 'Consistency in Design' }
      ],
      actionBtn: { children: 'View Dashboard', href: ADMIN_PATH, ...linkProps },
      actionBtn2: { children: 'Docs', href: DOCS_URL, ...linkProps }
    },
    {
      icon: 'tabler-rocket',
      title: 'Faster Development',
      title2: 'Rapid Development',
      description: 'Launch projects quicker with pre-built layouts and components.',
      image: '/assets/images/graphics/default/admin-dashboard-3.png',
      list: [
        { primary: 'Time Saving' },
        { primary: 'Tested and Reliable' },
        { primary: 'Customization Ready' },
        { primary: 'Enhanced User Experience' }
      ],
      actionBtn: { children: 'View Dashboard', href: ADMIN_PATH, ...linkProps },
      actionBtn2: { children: 'Docs', href: DOCS_URL, ...linkProps }
    },
    {
      icon: 'tabler-scale',
      title: 'Scalability',
      title2: 'Build to Scale',
      description: 'Easily scale your app with flexible, modular, and extensible templates.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      list: [
        { primary: 'Modular Architecture' },
        { primary: 'Performance Optimized' },
        { primary: 'Extensible Codebase' },
        { primary: 'Future Proof Design' }
      ],
      actionBtn: { children: 'View Dashboard', href: ADMIN_PATH, ...linkProps },
      actionBtn2: { children: 'Docs', href: DOCS_URL, ...linkProps }
    }
  ]
};
