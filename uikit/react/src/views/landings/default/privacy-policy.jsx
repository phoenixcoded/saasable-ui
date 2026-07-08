// @mui
import Box from '@mui/material/Box';

// @project
import { PrivacyPolicy1 } from '@/blocks/privacy-policy';
import { SmallHero3 } from '@/blocks/small-hero';

// @data
import { smallHero } from './data';

/***************************  PAGE - PRIVACY POLICY  ***************************/

export default function PrivacyPolicy() {
  return (
    <>
      <Box sx={{ pt: { xs: 8, sm: 9, md: 10.5 } }} />
      <SmallHero3 {...smallHero} />
      <PrivacyPolicy1 />
    </>
  );
}
