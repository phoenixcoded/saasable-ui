import PropTypes from 'prop-types';

// @style
import './globals.css';

// @mui
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

// @project
import branding from '@/branding.json';
import ProviderWrapper from './ProviderWrapper';

/***************************  METADATA - MAIN  ***************************/

// Configures the viewport settings for the application.
export const viewport = {
  userScalable: false // Disables user scaling of the viewport.
};

export const metadata = {
  title: `${branding.brandName} React MUI Dashboard Template`,
  description: `${branding.brandName} React MUI Dashboard Template`
};

/***************************  LAYOUT - ROOT  ***************************/

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://fomo.codedthemes.com/pixel/gkPddwTcjNYydfr7v3FcZuToUb9ZAevo" defer data-nscript="lazyOnload"></script>
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ProviderWrapper>{children}</ProviderWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = { children: PropTypes.any };
