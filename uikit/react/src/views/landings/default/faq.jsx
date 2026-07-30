// @mui
import Box from '@mui/material/Box';

// @project
import { Cta5 } from '@/blocks/cta';
import { Faq6 } from '@/blocks/faq';

// @data
import { cta5, faq } from './data';

/***************************  PAGE - FAQ  ***************************/

export default function Faq() {
  return (
    <>
      <Box sx={{ pt: { xs: 8, sm: 9, md: 10.5 } }} />
      <Faq6 {...faq} />
      <Cta5 {...cta5} />
    </>
  );
}
