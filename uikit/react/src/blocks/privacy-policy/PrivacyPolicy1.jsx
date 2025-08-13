'use client';
import { useEffect, useState } from 'react';

// @mui
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// Helper functions for scrollspy
const clamp = (value) => Math.max(0, value);
const isBetween = (value, floor, ceil) => value >= floor && value <= ceil;

/***************************  HOOKS - SCROLLSPY  ***************************/

function useScrollspy(ids, offset = 0) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || '');
    };

    window.addEventListener('scroll', listener);
    window.addEventListener('resize', listener);
    listener(); // Initial call to set the activeId

    return () => {
      window.removeEventListener('scroll', listener);
      window.removeEventListener('resize', listener);
    };
  }, [ids, offset]);

  return activeId;
}

/***************************  PRIVACY POLICY - DATA  ***************************/

const menuItems = [
  {
    id: 'acceptance-of-terms',
    heading: 'Acceptance of terms',
    caption:
      'By accessing and using this website, you agree to be bound by these Terms and Conditions of Use. If you do not agree with any part of these terms, you must not use the website. shares information about you when you use our website or services. By accessing or using our website, you consent to the practices described in this policy.'
  },
  {
    id: 'changes-to-terms',
    heading: 'Changes to terms',
    caption:
      'We reserve the right to modify or replace these terms at our sole discretion. It is your responsibility to check these terms periodically for changes. Your continued use of the website after the posting of any changes constitutes acceptance of those changes.'
  },
  {
    id: 'user-conduct',
    heading: 'User conduct',
    caption:
      'You agree to use this website only for lawful purposes and in a manner consistent with all applicable local, national, and international laws and regulations.'
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual property',
    caption:
      'All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, digital downloads, and data compilations, is the property of [Your Company Name] or its content suppliers and protected by international copyright laws.'
  },
  {
    id: 'privacy-policy',
    heading: 'Privacy policy',
    caption:
      'We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website, conducting our business, or servicing you.'
  },
  {
    id: 'user-generated-content',
    heading: 'User-generated content',
    caption:
      'If you submit any material to this website, you grant [Your Company Name] a perpetual, royalty-free, worldwide license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such material.'
  },
  {
    id: 'limitation-of-liability',
    heading: 'Limitation of liability',
    caption:
      'In no event shall [Your Company Name] or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this website.'
  },
  {
    id: 'indemnity',
    heading: 'Indemnity',
    caption:
      "You agree to indemnify and hold harmless [Your Company Name] and its affiliates from any claims, actions, demands, damages, liabilities, costs, or expenses, including reasonable attorneys' fees, arising out of or related to your use of the website or any violation of these terms."
  },
  {
    id: 'governing-law',
    heading: 'Governing law',
    caption:
      'These terms are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.'
  }
];

/***************************  PRIVACY POLICY - 1 ***************************/

/**
 *
 * Demos:
 * - [PrivacyPolicy1](https://www.saasable.io/blocks/privacy-policy/privacy-policy1)
 */

export default function PrivacyPolicy1() {
  const ids = menuItems.map((item) => item.id);

  // Adjust offset as per header height
  const activeId = useScrollspy(ids, 60);
  const [selectedID, setSelectedID] = useState(activeId);

  useEffect(() => {
    if (activeId) {
      setSelectedID(activeId);
    }
  }, [activeId]);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid size={{ xs: 12, sm: 4, md: 3 }}>
          <List component="div" sx={{ position: 'sticky', top: 20 }} disablePadding>
            {menuItems.map((item, index) => (
              <ListItemButton
                key={index}
                href={`#${item.id}`}
                sx={{
                  py: 1.25,
                  px: 1.5,
                  borderRadius: 3,
                  mb: 0.75,
                  ...(selectedID === item.id && { color: 'primary.main', bgcolor: 'grey.100' }),
                  '&:hover': { bgcolor: 'grey.50' }
                }}
                onClick={() => setSelectedID(item.id)}
              >
                <ListItemText primary={item.heading} slotProps={{ primary: { variant: 'subtitle1' } }} sx={{ my: 0 }} />
              </ListItemButton>
            ))}
          </List>
          <Divider sx={{ display: { xs: 'block', sm: 'none' } }} />
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 9 }}>
          {menuItems.map((item, index) => (
            <Stack
              key={index}
              id={item.id}
              sx={{ py: { xs: 1, sm: 1.5, md: 3 }, px: { md: 3 }, gap: 1, '&:first-of-type': { pt: { sm: 0 } } }}
            >
              <Typography variant="h4">{item.heading}</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {item.caption}
              </Typography>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}
