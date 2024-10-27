// @project
import { BUY_NOW_URL } from '@/path';

export const pricing = {
  heading: 'The Affordable Unfair Advantage.',
  caption: 'Choose the plan that aligns with your SaaS product requirements.',
  features: [
    { id: 1, label: 'One end product' },
    { id: 2, label: 'UI kit & Admin Interface' },
    { id: 3, label: '1 year free updates' },
    { id: 4, label: '6 months of support' },
    { id: 5, label: 'Lifetime license' },
    { id: 6, label: 'Next.js JavaScript' },
    { id: 7, label: 'Next.js TypeScript' },
    { id: 8, label: 'Figma design system' },
    { id: 9, label: 'Use for SaaS end product' }
  ],
  plans: [
    {
      title: 'Standard',
      price: 69,
      active: false,
      featureTitle: 'Includes',
      content: 'Learn more about the standard',
      contentLink: { children: 'license', href: 'https://mui.com/store/license/', target: '_blank' },
      exploreLink: { children: 'Get Started', href: BUY_NOW_URL, target: '_blank' },
      featuresID: [1, 2, 3, 4, 5, 6]
    },
    {
      title: 'Plus',
      active: true,
      price: 129,
      featureTitle: 'Recommended',
      content: 'Learn more about the standard',
      contentLink: { children: 'license', href: 'https://mui.com/store/license/', target: '_blank' },
      exploreLink: { children: 'Get Started', href: BUY_NOW_URL, target: '_blank' },
      featuresID: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
      title: 'Extended',
      price: 599,
      active: false,
      featureTitle: 'Includes',
      content: 'Learn more about the standard',
      contentLink: { children: 'license', href: 'https://mui.com/store/license/', target: '_blank' },
      link: { children: 'Contact Us', href: '/contact' },
      exploreLink: { children: 'Get Started', href: BUY_NOW_URL, target: '_blank' },
      featuresID: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  ]
};

export const pricing9 = {
  features: [
    { id: 1, label: 'One end product' },
    { id: 2, label: 'UI kit & Admin Interface' },
    { id: 3, label: '1 year free updates' },
    { id: 4, label: '6 months of support' },
    { id: 5, label: 'Lifetime license' },
    { id: 6, label: 'Next.js JavaScript' },
    { id: 7, label: 'Next.js TypeScript' },
    { id: 8, label: 'Figma design system' },
    { id: 9, label: 'Use for SaaS end product' }
  ],
  plans: [
    {
      title: 'Standard',
      price: 69,
      active: false,
      featureTitle: 'Includes',
      content: 'Learn more about the standard',
      contentLink: { children: 'license', href: '#' },
      exploreLink: { children: 'Get Started' },
      featuresID: [1, 2, 3, 4, 5, 6]
    },
    {
      title: 'Plus',
      active: true,
      price: 129,
      featureTitle: 'Recommended',
      content: 'Learn more about the standard',
      contentLink: { children: 'license', href: '#' },
      exploreLink: { children: 'Get Started' },
      featuresID: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
      title: 'Extended',
      price: 599,
      active: false,
      featureTitle: 'Includes',
      content: 'Learn more about the standard',
      contentLink: { children: 'license', href: '#' },
      link: { children: 'Contact Us', href: '#' },
      exploreLink: { children: 'Get Started' },
      featuresID: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  ]
};
