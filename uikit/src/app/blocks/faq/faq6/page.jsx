// @project
import branding from '@/branding.json';
import { Faq6 } from '@/blocks/faq';

/***************************  FAQ 6 - DATA  ***************************/

const data = {
  heading: 'Frequently Asked Questions',
  caption: `Answers to common queries about ${branding.brandName}.`,
  defaultExpanded: 'Fees & Charges',
  faqList: [
    {
      question: `What makes ${branding.brandName} different from other UI Kits?`,
      answer: `${branding.brandName} offers industry-specific templates, a React Material UI Kit, Figma UI Kit, and flexible customization options that cater to both front-end marketing and admin interfaces.`,
      category: 'General'
    },
    {
      question: `Is ${branding.brandName} suitable for both developers and designers?`,
      answer: {
        content: `Yes, ${branding.brandName} is built for both, with a Figma UI kit for designers and React code for developers.`,
        type: 'list',
        data: [
          { primary: 'Figma UI Kit for Designers.' },
          { primary: 'React Material UI Code for Developers.' },
          { primary: 'Seamless Collaboration.' }
        ]
      },
      category: 'General'
    },
    {
      question: `What is the difference between the Figma and codebase versions?`,
      answer:
        'The Figma version is for design and prototyping, while the codebase version provides ready-to-use React components for development.',
      category: 'General'
    },
    {
      question: 'How can i download the template after purchase?',
      answer: 'You will receive the template in a .zip format immediately after successfully purchasing the template.',
      category: 'General'
    },
    {
      question: `Whats included in the ${branding.brandName} license?`,
      answer: {
        content: 'It includes the Figma UI kit, React Material UI codebase, regular updates, and customer support.',
        type: 'list',
        data: [
          { primary: `One License = One End Product` },
          { primary: `Separate License for Each Product` },
          { primary: `Comply with License Terms` }
        ]
      },
      category: 'Pricing & Licenses'
    },
    {
      question: `Can I use ${branding.brandName} for multiple projects?`,
      answer: {
        content:
          'No, one license allows usage in a single end product. For each new product or project, you are required to purchase a separate license. This ensures compliance with the licensing terms and provides ongoing support for each individual product. Make sure to obtain the appropriate license for every new project you work on.',
        type: 'list',
        data: [
          { primary: `One License = One End Product` },
          { primary: `Separate License for Each Product` },
          { primary: `Comply with License Terms` }
        ]
      },
      category: 'Pricing & Licenses'
    },

    {
      question: 'Do you offer refunds?',
      answer:
        'Yes, we offer refunds, but only if you provide a valid reason to support your claim. For more details, please review our MUI Store Refund Policy.',
      category: 'Pricing'
    },
    {
      question: 'Do I get access to future updates?',
      answer: {
        content:
          'Yes, you will receive future updates for 1 year from the date of purchase. If you need updates after 1 year, you will need to purchase the license again. However, this is not a renewal—your license is valid for a lifetime, but updates are limited to the 1-year period.',
        type: 'list',
        data: [{ primary: `1 Year Free Updates` }, { primary: `License validity is lifetime` }]
      },
      category: 'Support & Updates'
    },
    {
      question: 'Is support included with the template purchase?',
      answer: {
        content:
          'Support is included for 6 months, but it is limited to resolving issues within the template itself. We do not provide support for installation, customization queries, or troubleshooting unrelated issues. For ongoing support beyond 6 months, you will need to extend the support period with an additional purchase.',
        type: 'list',
        data: [{ primary: `6 Months Support` }, { primary: `No Installation Support` }, { primary: `No Customization Support` }]
      },
      category: 'Support & Updates'
    }
  ],
  getInTouch: { link: { children: 'Get in Touch', href: 'https://support.phoenixcoded.net/', target: '_blank' } },
  categories: ['General', 'Pricing & Licenses', 'Support & Updates'],
  activeCategory: 'General'
};

/***************************  FAQ - 6  ***************************/

export default function BlockFaq6() {
  return <Faq6 {...data} />;
}
