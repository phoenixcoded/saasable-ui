import PropTypes from 'prop-types';
// @mui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import Typeset from '@/components/Typeset';

/***************************  TYPOGRAPHY - DATA  ***************************/

const typographyData = [
  {
    heading: 'Headings',
    items: [
      {
        title: 'Heading 01',
        sizeValue: { desktop: '57px', tablet: '45px', mobile: '36px' },
        lineHeight: { desktop: '64px', tablet: '52px', mobile: '44px' },
        letterSpacing: { desktop: '-0.25px', tablet: '0px', mobile: '0px' },
        variant: 'h1',
        label: 'h1 - Heading Large',
        fontWeight: 'Regular (400)'
      },
      {
        title: 'Heading 02',
        sizeValue: { desktop: '45px', tablet: '36px', mobile: '24px' },
        lineHeight: { desktop: '52px', tablet: '44px', mobile: '32px' },
        letterSpacing: { desktop: '0px', tablet: '0px', mobile: '0px' },
        variant: 'h2',
        label: 'h2 - Heading Medium',
        fontWeight: 'Regular (400)'
      },
      {
        title: 'Heading 03',
        sizeValue: { desktop: '28px', tablet: '24px', mobile: '20px' },
        lineHeight: { desktop: '36px', tablet: '32px', mobile: '28px' },
        letterSpacing: { desktop: '0px', tablet: '0px', mobile: '0px' },
        variant: 'h3',
        label: 'h3 - Display Medium',
        fontWeight: 'Regular (400)'
      },
      {
        title: 'Heading 04',
        sizeValue: { desktop: '24px', tablet: '20px', mobile: '16px' },
        lineHeight: { desktop: '32px', tablet: '28px', mobile: '24px' },
        letterSpacing: { desktop: '0px', tablet: '0px', mobile: '0px' },
        variant: 'h4',
        label: 'h4 - Display Small',
        fontWeight: 'Regular (400)'
      },
      {
        title: 'Heading 05',
        sizeValue: { desktop: '22px', tablet: '16px', mobile: '16px' },
        lineHeight: { desktop: '28px', tablet: '24px', mobile: '24px' },
        letterSpacing: { desktop: '0px', tablet: '0.15px', mobile: '0.15px' },
        variant: 'h5',
        label: 'h5 - Label Large',
        fontWeight: 'Medium (500)'
      },
      {
        title: 'Heading 06',
        sizeValue: { desktop: '22px', tablet: '16px', mobile: '16px' },
        lineHeight: { desktop: '30px', tablet: '24px', mobile: '24px' },
        letterSpacing: { desktop: '0px', tablet: '0.5px', mobile: '0.5px' },
        variant: 'h6',
        label: 'h6 - Paragraph Large',
        fontWeight: 'Regular (400)'
      }
    ]
  },
  {
    heading: 'Body / Paragraph',
    items: [
      {
        title: 'Body 01',
        sizeValue: { desktop: '16px', tablet: '14px', mobile: '14px' },
        lineHeight: { desktop: '24px', tablet: '20px', mobile: '20px' },
        letterSpacing: { desktop: '0.5px', tablet: '0.25px', mobile: '0.25px' },
        variant: 'body1',
        label: 'body1 - Paragraph Medium',
        fontWeight: 'Regular (400)'
      },
      {
        title: 'Body 02',
        sizeValue: { desktop: '14px', tablet: '12px', mobile: '12px' },
        lineHeight: { desktop: '20px', tablet: '18px', mobile: '18px' },
        letterSpacing: { desktop: '0.25px', tablet: '0.25px', mobile: '0.25px' },
        variant: 'body2',
        label: 'body2 - Paragraph Small',
        fontWeight: 'Regular (400)'
      }
    ]
  },
  {
    heading: 'Subtitle',
    items: [
      {
        title: 'Subtitle 01',
        sizeValue: { desktop: '16px', tablet: '14px', mobile: '14px' },
        lineHeight: { desktop: '24px', tablet: '20px', mobile: '20px' },
        letterSpacing: { desktop: '0.15px', tablet: '0.1px', mobile: '0.1px' },
        variant: 'subtitle1',
        label: 'subtitle1 - Label Medium',
        fontWeight: 'Medium (500)'
      },
      {
        title: 'Subtitle 02',
        sizeValue: { desktop: '14px', tablet: '12px', mobile: '12px' },
        lineHeight: { desktop: '20px', tablet: '18px', mobile: '18px' },
        letterSpacing: { desktop: '0.1px', tablet: '0.1px', mobile: '0.1  px' },
        variant: 'subtitle2',
        label: 'subtitle2 - Label Small',
        fontWeight: 'Semibold (600)'
      }
    ]
  },
  {
    heading: 'Caption',
    items: [
      {
        title: 'Caption',
        sizeValue: { desktop: '12px', tablet: '12px', mobile: '12px' },
        lineHeight: { desktop: '16px', tablet: '16px', mobile: '16px' },
        letterSpacing: { desktop: '0px', tablet: '0px', mobile: '0 px' },
        variant: 'caption',
        label: 'caption - Hyperlink Small',
        fontWeight: 'Semibold (600)'
      },
      {
        title: 'Caption 01',
        sizeValue: { desktop: '16px', tablet: '16px', mobile: '16px' },
        lineHeight: { desktop: '24px', tablet: '24px', mobile: '24px' },
        letterSpacing: { desktop: '0.5px', tablet: '0.5px', mobile: '0.5px' },
        variant: 'caption1',
        label: 'caption1 - Hyperlink Large',
        fontWeight: 'Regular (400)'
      },
      {
        title: 'Caption 02',
        sizeValue: { desktop: '14px', tablet: '14px', mobile: '14px' },
        lineHeight: { desktop: '20px', tablet: '20px', mobile: '20px' },
        letterSpacing: { desktop: '0.1px', tablet: '0.1 px', mobile: '0.1px' },
        variant: 'caption2',
        label: 'caption2 - Hyperlink Medium',
        fontWeight: 'Medium (500)'
      }
    ]
  }
];

/***************************  TYPOGRAPHY - BLOCK  ***************************/

function FontSizeBlock({ desktop, tablet, mobile, type }) {
  let label1 = 'Desktop';
  let label2 = 'Tablet';
  let label3 = 'Mobile';

  if (type === 'letter-spacing') {
    label1 = label2 = label3 = 'Letter Spacing';
  }

  if (type === 'line-height') {
    label1 = label2 = label3 = 'Line Height';
  }

  return (
    <Grid container spacing={1}>
      <Grid size={4}>
        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="body2" sx={{ color: 'grey.700' }}>
            {label1}
          </Typography>
          <Typography variant="subtitle1">{desktop}</Typography>
        </Stack>
      </Grid>
      <Grid size={4}>
        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="body2" sx={{ color: 'grey.700' }}>
            {label2}
          </Typography>
          <Typography variant="subtitle1">{tablet}</Typography>
        </Stack>
      </Grid>
      <Grid size={4}>
        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="body2" sx={{ color: 'grey.700' }}>
            {label3}
          </Typography>
          <Typography variant="subtitle1">{mobile}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

/***************************  SECTIONS - TYPOGRAPHY  ***************************/

/**
 *
 * Demos:
 * - [Typography](https://www.saasable.io/sections/typography)
 */

export default function TypographyPage() {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, md: 4 }}>
      {typographyData.map((item, index) => (
        <Grid key={index} size={12}>
          <Stack sx={{ gap: { xs: 1.5 } }}>
            <Typeset {...{ heading: item.heading, stackProps: { sx: { mb: 1 } } }} />
            {item.items.map((block, index) => (
              <GraphicsCard key={index}>
                <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 3, md: 2 }}>
                      <Typography variant="h4">{block.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'grey.700' }}>
                        {block.label}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 11, sm: 6, md: 4 }}>
                      <Stack sx={{ gap: 2.5 }}>
                        <Typography variant="subtitle1">{block.fontWeight}</Typography>
                        <FontSizeBlock {...block.sizeValue} type="font-size" />
                        <FontSizeBlock {...block.lineHeight} type="line-height" />
                        <FontSizeBlock {...block.letterSpacing} type="letter-spacing" />
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography variant={block.variant}>Quick brown fox jumps!</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </GraphicsCard>
            ))}
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

FontSizeBlock.propTypes = { desktop: PropTypes.string, tablet: PropTypes.string, mobile: PropTypes.string, type: PropTypes.string };
