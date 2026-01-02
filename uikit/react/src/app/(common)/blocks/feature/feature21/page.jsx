// @project
import branding from '@/branding.json';
import { Feature21 } from '@/blocks/feature';

/***************************  FEATURE 21 - DATA  ***************************/

const data = {
  heading: `Unlock the Power of ${branding.brandName}`,
  caption: 'Discover the myriad benefits that come with our innovative platform.',
  image: '/assets/images/graphics/ai/desktop1-light.svg',
  primaryBtn: { children: 'Buy Now' },
  secondaryBtn: { children: 'Get free figma' },
  features: [
    {
      icon: 'tabler-app-window',
      title: 'Tested in multiple browsers'
    },
    {
      icon: 'tabler-box-model',
      title: 'Ready to use template'
    },
    {
      icon: 'tabler-folder-check',
      title: 'Always updated package'
    },
    {
      icon: 'tabler-code',
      title: 'Optimised code structure'
    },
    {
      icon: 'tabler-lock',
      title: 'Pre Define Authentication'
    },
    {
      icon: 'tabler-git-branch',
      title: 'Clean folder structure to adapt'
    },
    {
      icon: 'tabler-toggle-right',
      title: 'Easy to switch themes'
    },
    {
      icon: 'tabler-components',
      title: 'Pluggable components'
    }
  ]
};

/***************************  BLOCK - FEATURE 21  ***************************/

export default function BlockFeature21() {
  return <Feature21 {...data} />;
}
