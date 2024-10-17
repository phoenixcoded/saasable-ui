import PropTypes from 'prop-types';

// @style
import './globals.css';

// @mui
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

// @third-party
import { GoogleAnalytics } from '@next/third-parties/google';

// @project
import ProviderWrapper from './ProviderWrapper';
import { mainMetadata } from '@/metadata';

// @types

/***************************  METADATA - MAIN  ***************************/

export const viewport = {
  userScalable: false
};

export const metadata = { ...mainMetadata };

/***************************  LAYOUT - MAIN  ***************************/

// Root layout component that wraps the entire application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ProviderWrapper>{children}</ProviderWrapper>
        </AppRouterCacheProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_ANALYTICS_ID || ''} />
      </body>
    </html>
  );
}

RootLayout.propTypes = { children: PropTypes.any };
