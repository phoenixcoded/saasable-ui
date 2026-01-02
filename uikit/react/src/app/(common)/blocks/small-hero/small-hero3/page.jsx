// @mui
import Typography from '@mui/material/Typography';

// @project
import { SmallHero3 } from '@/blocks/small-hero';
import GraphicsImage from '@/components/GraphicsImage';

/***************************  SMALL HERO 3 - HEADLINE  ***************************/

function HeadlineText() {
  return (
    <Typography variant="h1" sx={{ width: { lg: '90%' } }}>
      Effortless CRM Management, Seamless Business
      <GraphicsImage
        sx={{
          display: 'inline-block',
          height: { xs: 32, sm: 45, md: 57 },
          width: { xs: 61, sm: 86, md: 109 },
          backgroundSize: 'contain',
          mx: { xs: 0.5, sm: 1, md: 1.5 },
          verticalAlign: 'sub'
        }}
        image="/assets/images/graphics/ai/rocket.svg"
      />
      Growth
    </Typography>
  );
}

/***************************  SMALL HERO 3 - DATA  ***************************/

const data = {
  chip: {
    label: 'New Beta Version is Release ',
    link: { children: 'explore now', href: '#' }
  },
  captionLine: 'Empowering Businesses with a Customizable, Data-Driven CRM Solution.',
  headLine: <HeadlineText />,
  exploreBtn: { children: 'Explore More' }
};

/***************************  BLOCK - SMALL HERO 3  ***************************/

export default function BlockSmallHero3() {
  return <SmallHero3 {...data} />;
}
