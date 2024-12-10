// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

// @project
import { Hero17 } from '@/blocks/hero';

/***************************  HERO 17 - DATA  ***************************/

const data = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Over 200+
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              Design Blocks
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
  headLine: 'Real-time Performance Monitoring',
  captionLine: 'Identify and resolve issues proactively for uninterrupted operations.',
  primaryBtn: { children: 'Try Predictive Cost Analytics' },
  videoSrc: 'https://d2elhhoq00m1pj.cloudfront.net/saasable-intro.mp4',
  videoThumbnail: '/assets/videos/thumbnails/intro-thumbnail.png',
  listData: [
    { image: '/assets/images/shared/react.svg', title: 'React 18' },
    { image: '/assets/images/shared/next-js.svg', title: 'Next.js' },
    { image: '/assets/images/shared/material-ui.svg', title: 'Material UI v6' },
    { image: '/assets/images/shared/typescript.svg', title: 'TypeScript' },
    { image: '/assets/images/shared/javascript.svg', title: 'JavaScript' },
    { image: '/assets/images/shared/m3.svg', title: 'Material 3' },
    { image: '/assets/images/shared/figma.svg', title: 'Figma' }
  ]
};

/***************************  BLOCK - HERO 17  ***************************/

export default function BlockHero17() {
  return <Hero17 {...data} />;
}
