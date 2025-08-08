// @mui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import branding from '@/branding.json';
import ComponentsWrapper from '@/components/ComponentsWrapper';
import MainCard from '@/components/MainCard';

/***************************  TYPOGRAPHY - DATA  ***************************/

const typographyData = [
  {
    heading: 'Headings',
    items: [
      {
        title: 'Heading 01',
        sizeValue: '40px',
        lineHeight: '44px',
        letterSpacing: '0px',
        variant: 'h1',
        label: 'h1 - Heading',
        fontWeight: 'Medium (500)'
      },
      {
        title: 'Heading 02',
        sizeValue: '32px',
        lineHeight: '36px',
        letterSpacing: '0px',
        variant: 'h2',
        label: 'h2 - Heading',
        fontWeight: 'Medium (500)'
      },
      {
        title: 'Heading 03',
        sizeValue: '28px',
        lineHeight: '32px',
        letterSpacing: '0px',
        variant: 'h3',
        label: 'h3 - Heading',
        fontWeight: 'Medium (500)'
      },
      {
        title: 'Heading 04',
        sizeValue: '24px',
        lineHeight: '28px',
        letterSpacing: '0px',
        variant: 'h4',
        label: 'h4 - Heading',
        fontWeight: 'Medium (500)'
      },
      {
        title: 'Heading 05',
        sizeValue: '20px',
        lineHeight: '24px',
        letterSpacing: '0px',
        variant: 'h5',
        label: 'h5 - Heading',
        fontWeight: 'Medium (500)'
      },
      {
        title: 'Heading 06',
        sizeValue: '18px',
        lineHeight: '22px',
        letterSpacing: '0px',
        variant: 'h6',
        label: 'h6 - Heading',
        fontWeight: 'Medium (500)'
      }
    ]
  },
  {
    heading: 'Subtitle',
    items: [
      {
        title: 'Subtitle 01',
        sizeValue: '16px',
        lineHeight: '20px',
        letterSpacing: '0px',
        variant: 'subtitle1',
        label: 'subtitle1',
        fontWeight: 'Medium (500)'
      },
      {
        title: 'Subtitle 02',
        sizeValue: '14px',
        lineHeight: '18px',
        letterSpacing: '0px',
        variant: 'subtitle2',
        label: 'subtitle2',
        fontWeight: 'Medium (500)'
      }
    ]
  },
  {
    heading: 'Body / Paragraph',
    items: [
      {
        title: 'Body 01',
        sizeValue: '16px',
        lineHeight: '20px',
        letterSpacing: '0px',
        variant: 'body1',
        label: 'body1 - Paragraph',
        fontWeight: 'Regular (400)'
      },
      {
        title: 'Body 02',
        sizeValue: '14px',
        lineHeight: '18px',
        letterSpacing: '0px',
        variant: 'body2',
        label: 'body2 - Paragraph',
        fontWeight: 'Regular (400)'
      }
    ]
  },
  {
    heading: 'Caption',
    items: [
      {
        title: 'Caption',
        sizeValue: '12px',
        lineHeight: '16px',
        letterSpacing: '0px',
        variant: 'caption',
        label: 'caption',
        fontWeight: 'Regular (400)'
      },
      {
        title: 'Caption 01',
        sizeValue: '12px',
        lineHeight: '16px',
        letterSpacing: '0px',
        variant: 'caption1',
        label: 'caption1',
        fontWeight: 'Medium (500)'
      }
    ]
  }
];

/***************************  COMPONENT - TYPOGRAPHY  ***************************/

export default function TypographyComponent() {
  return (
    <ComponentsWrapper title="Typography">
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {typographyData.map((list, index) => (
          <Grid key={index} size={12}>
            <Stack sx={{ gap: { xs: 2, sm: 3 } }}>
              <Typography variant="subtitle1">{list.heading}</Typography>
              {list.items.map((block, index) => (
                <MainCard key={index} sx={{ p: { xs: 3, sm: 4 } }}>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 3, md: 2 }}>
                      <Typography variant="h4">{block.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'grey.700' }}>
                        {block.label}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                      <Stack sx={{ gap: 2.5 }}>
                        <Typography variant="subtitle1">{block.fontWeight}</Typography>
                        <Grid container spacing={1}>
                          <Grid size={4}>
                            <Stack sx={{ gap: 0.5 }}>
                              <Typography variant="body2" sx={{ color: 'grey.700' }}>
                                Font Size
                              </Typography>
                              <Typography variant="subtitle1">{block.sizeValue}</Typography>
                            </Stack>
                          </Grid>
                          <Grid size={4}>
                            <Stack sx={{ gap: 0.5 }}>
                              <Typography variant="body2" sx={{ color: 'grey.700' }}>
                                Line Height
                              </Typography>
                              <Typography variant="subtitle1">{block.lineHeight}</Typography>
                            </Stack>
                          </Grid>
                          <Grid size={4}>
                            <Stack sx={{ gap: 0.5 }}>
                              <Typography variant="body2" sx={{ color: 'grey.700' }}>
                                Letter Spacing
                              </Typography>
                              <Typography variant="subtitle1">{block.letterSpacing}</Typography>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography variant={block.variant}>
                        {block.variant} - {branding.brandName} for every industry
                      </Typography>
                    </Grid>
                  </Grid>
                </MainCard>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </ComponentsWrapper>
  );
}
