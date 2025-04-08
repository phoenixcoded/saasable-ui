// @project
import { AvatarSize } from '@/enum';

// @assets
import { IconUser } from '@tabler/icons-react';

const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

/***************************  AVATAR - SIZE  ***************************/

const badgeSX = { border: '2px solid', borderRadius: '50%' };

const avatarSizes = (theme) => ({
  [AvatarSize.BADGE]: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: 400,
    width: 20,
    height: 20,
    '& ~ span.MuiBadge-dot': { ...badgeSX, borderWidth: 1 },
    '& svg': { width: 14, height: 14 }
  },
  [AvatarSize.XS]: {
    ...theme.typography.caption,
    width: 32,
    height: 32,
    '& ~ span.MuiBadge-dot': { width: 10, height: 10, ...badgeSX },
    '& svg': { width: 16, height: 16 }
  },
  [AvatarSize.SM]: {
    ...theme.typography.caption,
    width: 40,
    height: 40,
    '& ~ span.MuiBadge-dot': { width: 12, height: 12, ...badgeSX },
    '& svg': { width: 16, height: 16 }
  }
});

/***************************  OVERRIDES - AVATAR  ***************************/

export default function Avatar(theme) {
  const sizeVariants = (theme) => {
    const styles = avatarSizes(theme);

    return Object.values(AvatarSize).map((size) => ({
      props: { size },
      style: styles[size]
    }));
  };

  const colorVariants = colors.map((color) => {
    const paletteColor = theme.palette[color];

    return {
      props: { color },
      style: {
        color: paletteColor.main,
        backgroundColor: paletteColor.light
      }
    };
  });

  return {
    MuiAvatar: {
      defaultProps: {
        children: <IconUser />,
        color: 'primary',
        size: AvatarSize.SM
      },
      styleOverrides: {
        root: {
          variants: [
            {
              props: { color: 'default' },
              style: {
                color: theme.palette.primary.darker,
                backgroundColor: theme.palette.primary.lighter
              }
            },
            ...colorVariants,
            ...sizeVariants(theme)
          ]
        }
      }
    }
  };
}
