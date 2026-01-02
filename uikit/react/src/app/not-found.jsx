'use client';

// @project
import { Error404Page } from '@/blocks/maintenance';
import ThemeProviders from '@/components/ThemeProvider';

/***************************  ERROR 404 - DATA  ***************************/

const data = {
  primaryBtn: { children: 'Back to Home Page', onClick: () => window.history.back() },
  heading: `Looks like you've taken a wrong turn. Lets get you back on track!`
};

/***************************  ERROR - 404  ***************************/

export default function notfound() {
  return (
    <ThemeProviders>
      <Error404Page {...data} />
    </ThemeProviders>
  );
}
