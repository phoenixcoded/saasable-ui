// @mui
import Typography from '@mui/material/Typography';

// @project
import branding from '@/branding.json';
import { Cta4 } from '@/blocks/cta';

/***************************  CALL TO ACTION 4 - HEADLINE  ***************************/

function HeadlineText() {
  return (
    <Typography variant="h2">
      Enhance performance{' '}
      <Typography variant="h2" component="span" sx={{ color: 'text.secondary' }}>
        and efficiency. Dive into {branding.brandName} for a{' '}
      </Typography>
      better cloud experience.
    </Typography>
  );
}

/***************************  CALL TO ACTION 4 - DATA  ***************************/

const data = {
  headLine: <HeadlineText />,
  primaryBtn: { children: 'Get Started' },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '10k+ Reviews (4.5 out of 5)'
  },
  list: [{ primary: `Automated Scaling for Efficiency` }, { primary: 'Real-time Performance Insights' }],
  clientContent: '300+ Client Trust Us'
};

/***************************  BLOCK - CALL TO ACTION 4  ***************************/

export default function BlockCta4() {
  return <Cta4 {...data} />;
}
