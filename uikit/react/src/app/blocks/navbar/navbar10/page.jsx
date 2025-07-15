// @project
import { Other2 } from '@/blocks/other';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';
import { MegaMenuType } from '@/enum';

/***************************  NAVBAR 10 - DATA  ***************************/

const navbar = {
  primaryBtn: { children: 'Get Started' },
  secondaryBtn: { children: 'Sign in' },
  navItems: [
    { id: 'overview', title: 'Overview' },
    { id: 'products', title: 'Products' },
    { id: 'pricing', title: 'Pricing' },
    {
      id: 'resource',
      title: 'Resource',
      megaMenu: {
        type: MegaMenuType.MEGAMENU2,
        toggleBtn: { children: 'Resource', size: 'small', sx: { color: 'text.primary', py: 1.5 } },
        menuItems: [
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
        ]
      }
    },
    { id: 'help', title: 'Help', icon: 'tabler-help' }
  ]
};

/***************************  BLOCK - NAVBAR 10  ***************************/

export default function BlockNavbar10() {
  return (
    <>
      <Navbar10>
        <NavbarContent10 {...navbar} />
      </Navbar10>
      <Other2 />
    </>
  );
}
