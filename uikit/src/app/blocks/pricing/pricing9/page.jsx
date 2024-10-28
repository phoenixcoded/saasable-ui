// @project
import { Pricing9 } from '@/blocks/pricing';

/***************************  PRICING 9 - DATA  ***************************/

const data = {
  heading: 'The Affordable Unfair Advantage.',
  caption: 'Choose the plan that aligns with your cloud management requirements.',
  features: [
    { id: 1, label: '1 Demo Landing' },
    { id: 2, label: '7 Demo Landing' },
    { id: 3, label: '25 Components Blocks' },
    { id: 4, label: '193+ Component Blocks' },
    { id: 5, label: 'Dark/Light Mode' },
    { id: 6, label: 'Typescript Version' },
    { id: 7, label: 'Design File (Figma)' },
    { id: 8, label: 'Multiple Color Options' },
    { id: 9, label: 'RTL' },
    { id: 10, label: 'Supbase Authentication' }
  ],
  plans: [
    {
      title: 'Free',
      price: 0,
      active: false,
      featureTitle: 'Features',
      exploreLink: { children: 'Get Started With Free' },
      featuresID: [1, 3]
    },
    {
      title: 'Pro',
      active: false,
      price: 69,
      featureTitle: 'Features',
      exploreLink: { children: 'Get Started With Pro' },
      featuresID: [2, 4, 5, 6, 7, 8, 9, 10]
    }
  ]
};

/***************************  BLOCK - PRICING 9  ***************************/

export default function BlockPricing9() {
  return <Pricing9 {...data} />;
}
