// @project
import { Integration2 } from '@/blocks/integration';

/***************************  INTEGRATION 2 - DATA  ***************************/

const data = {
  headLine: 'Connect with top-tier tools available Interface',
  captionLine: 'Discover the Features That Will Transform Your Customer Relationships',
  primaryBtn: { children: 'See All Integration' },
  tagList: [
    { label: 'Slack', icon: 'tabler-brand-slack' },
    { label: 'Abstract', icon: 'tabler-brand-abstract' },
    { label: 'Asana', icon: 'tabler-brand-asana' },
    { label: 'Back Bone', icon: 'tabler-brand-backbone' },
    { label: 'Intercom', icon: 'tabler-brand-intercom' },
    { label: 'Master Card', icon: 'tabler-brand-mastercard' },
    { label: 'Skype', icon: 'tabler-brand-skype' },
    { label: 'Google Drive', icon: 'tabler-brand-google-drive' },
    { label: 'Tripadvisor', icon: 'tabler-brand-tripadvisor' },
    { label: 'Facebook Messenger', icon: 'tabler-brand-messenger' },
    { label: 'Paypal', icon: 'tabler-brand-paypal' }
  ]
};

/***************************  BLOCK - INTEGRATION 2  ***************************/

export default function BlockIntegration2() {
  return <Integration2 {...data} />;
}
