// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          One Kit, Endless
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              Possibilities
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
          icon={
            <CardMedia component="img" image="/assets/images/shared/celebration.svg" sx={{ width: 16, height: 16 }} alt="celebration" />
          }
        />
      </>
    )
  },
  headLine: 'Build Beautiful SaaS Applications Faster with SaasAble',
  captionLine: 'Design front-end marketing pages and powerful admin dashboards with ease using our UI Kit',
  primaryBtn: { children: 'Explore Components' },
  videoSrc: '/assets/videos/main-landing.mp4',
  listData: [
    { image: '/assets/images/shared/typescript.svg', title: 'Typescript' },
    { image: '/assets/images/shared/next-js.svg', title: 'Next.js' },
    { image: '/assets/images/shared/jwt.svg', title: 'JWT' },
    { image: '/assets/images/shared/react.svg', title: 'Code Splitting' },
    { image: '/assets/images/shared/figma.svg', title: 'Figma' }
  ]
};
