// @project
import branding from '@/branding.json';
import { Cta5 } from '@/blocks/cta';

/***************************  CALL TO ACTION 5 - DATA  ***************************/

const data = {
  heading: `${branding.brandName} Community`,
  caption: 'Collaborate confidently with granular access controls and regulatory compliance. ',
  label: 'Join Community',
  input: {
    adornmentBtn: { children: 'Get Started' },
    helpertext: '1 email per week. No spam. Ever. Unsubscribe anytime'
  },
  saleData: { count: 10, defaultUnit: 'X', caption: 'Achieving faster sales through streamlined' },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '10k+ Reviews (4.5 out of 5)'
  }
};

/***************************  BLOCK - CALL TO ACTION 5  ***************************/

export default function BlockCta5() {
  return <Cta5 {...data} />;
}
