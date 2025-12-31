'use client';

// @project
import { Error500Page } from '@/blocks/maintenance';
import ThemeProviders from '@/components/ThemeProvider';

/***************************  ERROR 500 - DATA  ***************************/

const data = {
  primaryBtn: { children: 'Back to Home Page' },
  heading: 'Please try again later or feel free to contact us if the problem persists.'
};

/***************************  ERROR - 500  ***************************/

export default function InternalServerError() {
  return (
    <ThemeProviders>
      <Error500Page {...data} />
    </ThemeProviders>
  );
}
