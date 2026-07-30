// @project
import { extendPaletteWithChannels } from '@/utils/colorUtils';

/***************************  CRYPTO THEME - PALETTE  ***************************/

export function buildPalette() {
  const textPrimary = '#0D1612'; // CRYPTO/neutral/10 - on surface
  const textSecondary = '#3B4B43'; // CRYPTO/neutral variant/30 - on surface variant
  const divider = '#BFD7CA'; // CRYPTO/neutral variant/80 - outline variant
  const background = '#F7FCF8';

  const textPrimaryDark = '#E5EFE9'; // CRYPTO/neutral/90 - on surface
  const textSecondaryDark = '#B9CBC0'; // CRYPTO/neutral variant/80 - on surface variant
  const dividerDark = '#35483D'; // CRYPTO/neutral variant/30 - outline variant
  const backgroundDark = '#07110D'; // CRYPTO/neutral/04 - container lowest

  const lightPalette = {
    primary: {
      lighter: '#D7F3E4', // CRYPTO/primary/90 - primary container / primary fixed
      light: '#AEE6C7', // CRYPTO/primary/80 - primary fixed dim
      main: '#106B43', // CRYPTO/primary/40 - primary
      dark: '#0A5434', // CRYPTO/primary/30 - on primary fixed variant
      darker: '#042316' // CRYPTO/primary/10 - on primary container / on primary fixed
    },
    secondary: {
      lighter: '#E1F1E8', // CRYPTO/secondary/90 - secondary container / secondary fixed
      light: '#BFD8CA', // CRYPTO/secondary/80 - secondary fixed dim
      main: '#4F6759', // CRYPTO/secondary/40 - secondary
      dark: '#304A3C', // CRYPTO/secondary/30 - on secondary fixed variant
      darker: '#12261B' // CRYPTO/secondary/10 - on secondary container / on secondary fixed
    },
    grey: {
      50: '#F7FCF8', // CRYPTO/neutral/98 - surface / surface bright
      100: '#EFF9F2', // CRYPTO/neutral/96 - surface container low
      200: '#E5F3EA', // CRYPTO/neutral/94 - surface container
      300: '#DCECE3', // CRYPTO/neutral/92 - surface container high
      400: '#D2E3DA', // CRYPTO/neutral/90 - surface container highest
      500: '#C7D9D0', // CRYPTO/neutral/87 - surface dim
      600: divider, // CRYPTO/neutral variant/80 - outline variant
      700: '#6F8378', // CRYPTO/neutral variant/50 - outline
      800: textSecondary, // CRYPTO/neutral variant/30 - on surface variant
      900: textPrimary // CRYPTO/neutral/10 - on surface
    },
    text: {
      primary: textPrimary, // CRYPTO/neutral/10 - on surface
      secondary: textSecondary // CRYPTO/neutral variant/30 - on surface variant
    },
    divider,
    background: {
      default: background
    }
  };

  const darkPalette = {
    primary: {
      lighter: '#1B4B32', // CRYPTO/primary/30 - primary container / on primary fixed variant
      light: '#5DB985', // CRYPTO/primary/60 - primary fixed dim
      main: '#8FD7AE', // CRYPTO/primary/80 - primary
      dark: '#B8EACB', // CRYPTO/primary/90 - on primary container / primary fixed
      darker: '#D8F8E3' // CRYPTO/primary/95 - on primary container / on primary fixed
    },
    secondary: {
      lighter: '#263A30', // CRYPTO/secondary/30 - secondary container / on secondary fixed variant
      light: '#7E9A8B', // CRYPTO/secondary/60 - secondary fixed dim
      main: '#B8CFC3', // CRYPTO/secondary/80 - secondary
      dark: '#D7E7DE', // CRYPTO/secondary/90 - on secondary container / secondary fixed
      darker: '#EBF6EF' // CRYPTO/secondary/95   - on secondary container / on secondary fixed
    },
    grey: {
      50: '#0C1712', // CRYPTO/neutral/06 - surface / surface dim
      100: '#12201A', // CRYPTO/neutral/10 - surface container low
      200: '#182820', // CRYPTO/neutral/12 - surface container
      300: '#21342A', // CRYPTO/neutral/17 - surface container high
      400: '#2A3E33', // CRYPTO/neutral/22 - surface container highest
      500: backgroundDark, // CRYPTO/neutral/04 - surface container lowest
      600: dividerDark, // CRYPTO/neutral variant/30 - outline variant
      700: '#7F9489', // CRYPTO/neutral variant/60 - outline
      800: textSecondaryDark, // CRYPTO/neutral variant/80 - on surface variant
      900: textPrimaryDark // CRYPTO/neutral/90 - on surface
    },
    text: {
      primary: textPrimaryDark, // CRYPTO/neutral/90 - on surface
      secondary: textSecondaryDark // CRYPTO/neutral variant/80 - on surface variant
    },
    divider: dividerDark,
    background: {
      default: backgroundDark,
      paper: backgroundDark
    }
  };

  const commonColor = { common: { black: '#000', white: '#fff' } };

  const extendedLight = extendPaletteWithChannels(lightPalette);
  const extendedDark = extendPaletteWithChannels(darkPalette);
  const extendedCommon = extendPaletteWithChannels(commonColor);

  return {
    light: {
      mode: 'light',
      ...extendedCommon,
      ...extendedLight
    },
    dark: {
      mode: 'dark',
      ...extendedCommon,
      ...extendedDark
    }
  };
}
