// @project
import branding from '@/branding.json';

export const contactUS = {
  heading: 'We’d love to hear from you',
  caption: 'Explore key statistics and trends shaping our understanding of the current landscape.',
  list: [
    {
      icon: 'tabler-phone',
      title: 'Contact Sale',
      content: 'Speak to someone from our sales team.',
      link: { children: 'Contact Sales', href: branding.company.socialLink.support, target: '_blank', rel: 'noopener noreferrer' }
    },
    {
      icon: 'tabler-help-circle',
      title: 'Have a Question',
      content: 'See our frequently asked question',
      link: { children: 'Get Answers', href: '/faq' }
    },
    {
      icon: 'tabler-folder-check',
      title: 'Press & Media',
      content: 'Get in touch with our PR team',
      link: { children: 'Press Contact', href: '/contact' }
    }
  ]
};
