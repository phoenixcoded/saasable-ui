// @mui

// @project
import { generateFocusStyle } from '@/utils/generateFocusStyle';

// @assets
import { IconX } from '@tabler/icons-react';

/***************************  OVERRIDES - CHIP  ***************************/

export default function Chip(theme) {
  return {
    MuiChip: {
      defaultProps: {
        variant: 'light', // Default variant is 'light'
        deleteIcon: <IconX size={16} />
      },
      styleOverrides: {
        root: {
          height: '100%',
          '&.Mui-focusVisible': {
            ...generateFocusStyle(theme.palette.primary.main)
          },
          variants: [
            {
              props: { variant: 'text' }, // Variant for text Chip
              style: ({ ownerState }) => {
                const paletteColor = theme.palette[ownerState.color];
                return {
                  backgroundColor: 'transparent', // Transparent background for text variant
                  ...(paletteColor && {
                    color: paletteColor.main
                  }),
                  '& .MuiChip-label': {
                    padding: 0
                  },
                  '& .MuiChip-icon': {
                    marginRight: 2,
                    marginLeft: 0
                  },
                  '& .MuiChip-avatar': {
                    marginLeft: 0,
                    marginRight: 4,
                    ...(paletteColor && {
                      color: paletteColor.main,
                      backgroundColor: paletteColor.light
                    })
                  },
                  '&[position="right"]': {
                    '& .MuiChip-icon': {
                      marginLeft: 2, // Adjust margin when icon is on the right
                      marginRight: 0
                    },
                    '& .MuiChip-avatar': {
                      marginLeft: 4, // Adjust margin when avatar is on the right
                      marginRight: 0
                    }
                  }
                };
              }
            }
          ]
        },
        avatar: {
          borderRadius: '50%', // Circular avatar
          padding: 2
        },
        icon: {
          fontSize: 10,
          lineHeight: 14,
          fontWeight: 400,
          width: 20,
          height: 20,
          borderRadius: '50%', // Circular icon
          padding: 3
        },
        avatarSmall: {
          width: 16,
          height: 16,
          padding: 1.5,
          ...theme.typography.caption // Small avatar typography
        },
        labelSmall: theme.typography.caption1 // Small label typography
      }
    }
  };
}
