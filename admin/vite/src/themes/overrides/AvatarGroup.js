/***************************  OVERRIDES - AVATAR GROUP  ***************************/

export default function AvatarGroup() {
  return {
    MuiAvatarGroup: {
      defaultProps: {
        slotProps: {
          additionalAvatar: {
            color: 'default'
          }
        }
      },
      styleOverrides: {
        avatar: { width: 32, height: 32 }
      }
    }
  };
}
