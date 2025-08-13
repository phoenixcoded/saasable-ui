// @mui
import { alpha } from '@mui/material/styles';

// @project
import { ChipIconPosition } from '@/enum';
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
            },
            {
              props: { variant: 'light' }, // Variant for light Chip
              style: ({ ownerState }) => {
                const paletteColor = theme.palette[ownerState.color];
                return {
                  ...(paletteColor && {
                    color: paletteColor.main,
                    backgroundColor: paletteColor.lighter,
                    ...theme.applyStyles('dark', { backgroundColor: alpha(paletteColor.lighter, 0.4) })
                  }),
                  '& .MuiChip-label': {
                    padding: '2px 8px' // Padding for the label
                  },
                  '& .MuiChip-icon': {
                    marginLeft: 2,
                    marginRight: -8 // Adjust margins for the icon
                  },
                  '& .MuiChip-avatar': {
                    margin: 4,
                    marginRight: -4,
                    ...(paletteColor && {
                      color: paletteColor.lighter,
                      backgroundColor: paletteColor.main,
                      ...theme.applyStyles('dark', { color: paletteColor.main, backgroundColor: paletteColor.lighter })
                    })
                  },
                  '& .MuiChip-deleteIcon': {
                    margin: 4,
                    marginLeft: -4,
                    ...(paletteColor && {
                      color: paletteColor.main,
                      backgroundColor: paletteColor.lighter,
                      '&:hover': { color: paletteColor.dark },
                      ...theme.applyStyles('dark', { backgroundColor: 'transparent', '&:hover': { color: paletteColor.darker } })
                    })
                  },
                  '&.Mui-focusVisible': {
                    ...(paletteColor && { backgroundColor: paletteColor.main })
                  }
                };
              }
            },
            {
              props: { variant: 'filled' }, // Variant for filled Chip
              style: ({ ownerState }) => {
                const paletteColor = theme.palette[ownerState.color];
                return {
                  ...theme.applyStyles('dark', { ...(paletteColor && { backgroundColor: paletteColor.light }) }),
                  '& .MuiChip-label': {
                    padding: '2px 8px' // Padding for the label
                  },
                  '& .MuiChip-icon': {
                    marginLeft: 2,
                    marginRight: -8 // Adjust margins for the icon
                  },
                  '& .MuiChip-avatar': {
                    margin: 4,
                    marginRight: -4,
                    ...(paletteColor && {
                      color: paletteColor.main,
                      backgroundColor: paletteColor.lighter,
                      ...theme.applyStyles('dark', { color: paletteColor.darker })
                    })
                  }
                };
              }
            },
            {
              props: { variant: 'outlined' }, // Variant for outlined Chip
              style: ({ ownerState }) => {
                const paletteColor = theme.palette[ownerState.color];
                return {
                  ...theme.applyStyles('dark', {
                    ...(paletteColor && {
                      color: paletteColor.light,
                      borderColor: paletteColor.light,
                      '& .MuiChip-deleteIcon': { color: paletteColor.light }
                    })
                  }),
                  '& .MuiChip-label': {
                    padding: '1px 7px' // Padding for the label
                  },
                  '& .MuiChip-icon': {
                    width: 18,
                    height: 18,
                    marginLeft: 2,
                    marginRight: -8 // Adjust margins for the icon
                  },
                  '& .MuiChip-avatar': {
                    margin: 4,
                    marginRight: -4,
                    ...(paletteColor && {
                      color: paletteColor.main,
                      backgroundColor: paletteColor.lighter,
                      ...theme.applyStyles('dark', { color: theme.palette.background.default, backgroundColor: paletteColor.light })
                    })
                  }
                };
              }
            },
            {
              props: { position: ChipIconPosition.RIGHT }, // Custom position for icon/avatar
              style: {
                '& .MuiChip-icon': {
                  order: 2, // Set order to position icon on the right
                  marginRight: 2,
                  marginLeft: -8
                },
                '& .MuiChip-avatar': {
                  order: 2, // Set order to position avatar on the right
                  marginLeft: -4,
                  marginRight: 4
                }
              }
            },
            {
              props: { variant: 'tag' }, // Variant for tag Chip
              style: ({ ownerState }) => {
                const paletteColor = theme.palette[ownerState.color];

                return {
                  backgroundColor: 'transparent',
                  borderRadius: 6,
                  border: `1px solid ${theme.palette.grey[200]}`,
                  '&:active': {
                    boxShadow: 'none'
                  },
                  ...(paletteColor === undefined && {
                    color: theme.palette.text.secondary,
                    '&:hover': { backgroundColor: theme.palette.grey[50] }
                  }),
                  ...(paletteColor && {
                    borderColor: paletteColor.lighter,
                    color: paletteColor.main,
                    ...theme.applyStyles('dark', { color: paletteColor.light }),
                    '&:hover': { backgroundColor: alpha(paletteColor.lighter, 0.2) }
                  }),
                  '& .MuiChip-label': {
                    fontWeight: 400,
                    padding: '1px 5px' // Padding for the label
                  },
                  '& .MuiChip-avatar': {
                    borderRadius: 6,
                    marginLeft: -2,
                    '& + .MuiChip-label': {
                      padding: '3px 6px'
                    },
                    ...(paletteColor === undefined && {
                      color: theme.palette.text.secondary,
                      backgroundColor: theme.palette.grey[300]
                    }),
                    ...(paletteColor && {
                      color: paletteColor.dark,
                      backgroundColor: paletteColor.light,
                      ...theme.applyStyles('dark', { color: theme.palette.background.default })
                    })
                  },
                  '&.MuiChip-deletable': {
                    '& .MuiChip-label': {
                      padding: '3px 6px'
                    }
                  },
                  '& .MuiChip-deleteIcon': {
                    marginRight: 2,
                    marginLeft: -2,
                    ...(paletteColor === undefined && { color: alpha(theme.palette.text.secondary, 0.8) }),
                    ...(paletteColor && {
                      color: alpha(paletteColor.main, 0.8),
                      ...theme.applyStyles('dark', { color: paletteColor.light }),
                      '&:hover': { color: paletteColor.dark }
                    })
                  },
                  '&.Mui-focusVisible': {
                    backgroundColor: 'transparent'
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
        avatarMedium: {
          width: 18,
          height: 18,
          ...theme.typography.body2 // Medium avatar typography
        },
        avatarLarge: {
          width: 20,
          height: 20,
          ...theme.typography.body1 // Large avatar typography
        },
        labelSmall: theme.typography.caption1, // Small label typography
        labelMedium: theme.typography.subtitle2, // Medium label typography
        labelLarge: theme.typography.subtitle1 // Large label typography
      }
    }
  };
}
