// @project
import { ContactUs4 } from '@/blocks/contact-us';

/***************************  CONTACT US 4 - DATA  ***************************/

const data = {
  heading: 'We’d love to hear from you',
  caption: 'Explore key statistics and trends shaping our understanding of the current landscape.',
  list: [
    {
      icon: 'tabler-phone',
      title: 'Contact Sale',
      content: 'Speak to someone from our sales team.',
      link: { children: 'Contact Sales' }
    },
    {
      icon: 'tabler-help-circle',
      title: 'Have a Question',
      content: 'See our frequently asked question',
      link: { children: 'Get Answers' }
    },
    {
      icon: 'tabler-folder-check',
      title: 'Press & Media',
      content: 'Get in touch with our PR team',
      link: { children: 'Press Contact' }
    }
  ]
};

/***************************  BLOCK - CONTACT US 4  ***************************/

export default function BlockContactUs4() {
  return <ContactUs4 {...data} />;
}
