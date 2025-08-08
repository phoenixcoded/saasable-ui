'use client';
import PropTypes from 'prop-types';

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import GetImagePath from '@/utils/GetImagePath';

// @assets
import Wave from '@/images/graphics/Wave';

/***************************  CARD - PROFILE GROUP  ***************************/

export default function ProfileGroup({ review, avatarGroups, sx }) {
  return (
    <Stack sx={{ gap: 1, ...sx }}>
      <Stack sx={{ gap: 0.5 }}>
        <AvatarGroup max={5} sx={{ justifyContent: 'flex-end', '& .MuiAvatar-root': { borderWidth: 1, ml: -1.75 } }}>
          {avatarGroups.map((item, index) => (
            <Avatar key={index} src={GetImagePath(item.avatar)} alt="Avatar" slotProps={{ img: { loading: 'lazy' } }} />
          ))}
        </AvatarGroup>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {review}
        </Typography>
      </Stack>
      <Wave />
    </Stack>
  );
}

ProfileGroup.propTypes = { review: PropTypes.string, avatarGroups: PropTypes.array, sx: PropTypes.any };
