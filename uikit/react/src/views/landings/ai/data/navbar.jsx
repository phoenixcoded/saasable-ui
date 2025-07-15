// @project
import { MegaMenuType } from '@/enum';
import { SECTION_PATH } from '@/routes/Path';

const menuItems = [
  {
    title: 'Blog',
    content: 'Explore our latest articles and insights.'
  },
  {
    title: 'Help Center',
    content: 'Find answers to common questions and support topics.',
    selected: true
  },
  {
    title: 'Guides',
    content: 'Follow our comprehensive guides to get started.'
  },
  {
    title: 'Events',
    content: 'Stay informed about upcoming events and webinars.'
  },
  {
    title: 'Security',
    content: 'Learn about our security measures to protect your data.'
  },
  {
    title: 'Payments',
    content: 'Get help with billing and payment options.'
  }
];

export const navItems = [
  { id: 'products   ', title: 'Products' },
  { id: 'components', title: 'Components', link: SECTION_PATH },
  { id: 'crm-theme', title: 'CRM Theme', link: '/' },
  {
    id: 'resource',
    title: 'Resource',
    megaMenu: {
      type: MegaMenuType.MEGAMENU2,
      toggleBtn: { children: 'Resource', sx: { color: 'text.primary', py: 1.5 } },
      menuItems
    }
  },
  { id: 'generative-ai', title: 'Generative AI' }
];
