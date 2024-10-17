// @next
import NextLink from 'next/link';

// @mui
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const cta4 = {
  headLine: 'Why Trust Phoenixcoded for Your Dashboard Template Needs?',
  primaryBtn: { children: 'Get Started Today' },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '250+ Reviews (4.62 out of 5)'
  },
  list: [
    { primary: '10+ Years Expertise' },
    { primary: '8+ Satisfied Customers' },
    { primary: 'Elite Envato Author' },
    { primary: 'Timely Support, Guaranteed' },
    { primary: 'Regular Updates Provided' },
    { primary: 'Proven Industry Leader' }
  ],
  clientContent: 'Learn More Here'
};

function DescriptionLine() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      Have questions? Our community is here to help. Learn more{' '}
      <Link component={NextLink} variant="caption2" color="primary" href="" underline="hover">
        here
      </Link>{' '}
    </Typography>
  );
}

export const cta5 = {
  label: 'Join the Community',
  heading: 'Connect with SaaS Developers on Discord',
  caption: 'Get support, share insights, and grow together.',
  primaryBtn: { children: 'Join Discord Community' },
  description: <DescriptionLine />,
  saleData: { count: 8, defaultUnit: 'k+', caption: 'Trusted by professionals worldwide' },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '250k+ Reviews (4.65 out of 5)'
  }
};

export const cta10 = {
  heading: "Couldn't find the perfect role for you?",
  caption: 'No worries – we encourage you to apply anyway! Your unique skills and talents might be just what we need.',
  primaryBtn: { children: 'Send Your Resume' },
  secondaryBtn: { children: 'Contact Us' },
  image: '/assets/images/graphics/ai/graphics15-light.svg',
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
