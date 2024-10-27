// @project
import Other1 from '@/blocks/other/Other1';
import { PAGE_PATH, SECTION_PATH } from '@/path';

// @asssets
const imagePrefix = '/assets/images/presentation';

/***************************  OTHER 1 - DATA  ***************************/

const data = {
  heading: 'Customizable Building Blocks',
  description: 'Kickstart your SaaS landing page design with pre-designed templates featuring versatile components.',
  primaryBtn: { children: 'Explore All Components', href: SECTION_PATH },
  sections: [
    {
      title: 'Hero',
      subTitle: '16 Different Variants',
      image: `${imagePrefix}/hero-light.svg`,
      link: PAGE_PATH.hero
    },
    {
      title: 'Call to Action',
      subTitle: '11 Different Variants',
      image: `${imagePrefix}/cta-light.svg`,
      link: PAGE_PATH.cta
    },
    {
      title: 'Feature',
      subTitle: '7 Different Variants',
      image: `${imagePrefix}/feature-light.svg`,
      link: PAGE_PATH.feature
    },
    {
      title: 'Benefits',
      subTitle: '9 Different Variants',
      image: `${imagePrefix}/benefits-light.svg`,
      link: PAGE_PATH.benefit
    },
    {
      title: 'Process',
      subTitle: '7 Different Variants',
      image: `${imagePrefix}/process-light.svg`,
      link: PAGE_PATH.process
    },
    {
      title: 'Integration',
      subTitle: '8 Different Variants',
      image: `${imagePrefix}/integration-light.svg`,
      link: PAGE_PATH.integration
    }
  ]
};

/***************************  BLOCK - OTHER 1  ***************************/

export default function BlockOther1() {
  return <Other1 {...data} />;
}
