/***************************  DEFAULT / AI THEME - PALETTE  ***************************/

export default function palette() {
  const textPrimary = '#1A1C1E'; // AI/neutral/10 - on surface
  const textSecondary = '#42474E'; // AI/neutral variant/30 - on surface variant
  const divider = '#C2C7CE'; // AI/neutral variant/80 - outline variant
  const background = '#FFF';

  const lightPalette = {
    primary: {
      lighter: '#CCE5FF', // AI/primary/90 - primary container / primary fixed
      light: '#92CCFF', // AI/primary/80 - primary fixed dim
      main: '#006397', // AI/primary/40 - primary
      dark: '#004B73', // AI/primary/30 - on primary fixed variant
      darker: '#001D31' // AI/primary/10 - on primary container / on primary fixed
    },
    secondary: {
      lighter: '#D3E4F8', // AI/secondary/90 - secondary container / secondary fixed
      light: '#B7C8DB', // AI/secondary/80 - secondary fixed dim
      main: '#4F6070', // AI/secondary/40 - secondary
      dark: '#384858', // AI/secondary/30 - on secondary fixed variant
      darker: '#0B1D2B' // AI/secondary/10 - on secondary container / on secondary fixed
    },
    grey: {
      50: '#F9F9FC', // AI/neutral/98 - surface / surface bright
      100: '#F1F4F9', // AI/neutral/96 - surface container low
      200: '#EBEEF3', // AI/neutral/94 - surface container
      300: '#E6E8EE', // AI/neutral/92 - surface container high
      400: '#E2E2E5', // AI/neutral/90 - surface container highest
      500: '#D7DADF', // AI/neutral/87 - surface dim
      600: divider, // AI/neutral variant/80 - outline variant
      700: '#72787E', // AI/neutral variant/50 - outline
      800: textSecondary, // AI/neutral variant/30 - on surface variant
      900: textPrimary // AI/neutral/10 - on surface
    },
    text: {
      primary: textPrimary, // AI/neutral/10 - on surface
      secondary: textSecondary // AI/neutral variant/30 - on surface variant
    },
    divider,
    background: {
      default: background
    }
  };

  return {
    ...lightPalette
  };
}
