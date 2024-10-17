import PropTypes from 'prop-types';
import { lazy } from 'react';

// @project
import { Themes } from '@/config';
import useConfig from '@/hooks/useConfig';

// @ui-themes
const ThemeAI = lazy(() => import(`@/views/landings/ai/theme`));

// @types

/***************************  COMMON - THEME PROVIDER  ***************************/

export default function ThemeProvider({ children }) {
  const { currentTheme } = useConfig();

  switch (currentTheme) {
    case Themes.THEME_AI:
    default:
      return <ThemeAI>{children}</ThemeAI>;
  }
}

ThemeProvider.propTypes = { children: PropTypes.any };
