import PropTypes from 'prop-types';
// @mui
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

// @project
import SvgIcon from '@/components/SvgIcon';
import { IconType } from '@/enum';

/***************************  NAVBAR - SOCIAL ICON  ***************************/

export default function SocialIcons({ sx }) {
  return (
    <Stack direction="row" sx={{ alignItems: 'center', gap: { xs: 1, md: 1.5 }, ...sx }}>
      <IconButton aria-label="github" sx={{ bgcolor: 'grey.200' }}>
        <SvgIcon name="tabler-filled-brand-github" type={IconType.FILL} />
      </IconButton>
      <IconButton aria-label="discord" sx={{ bgcolor: 'grey.200' }}>
        <SvgIcon name="tabler-filled-discord" type={IconType.FILL} />
      </IconButton>
      <IconButton aria-label="youtube" sx={{ bgcolor: 'grey.200' }}>
        <SvgIcon name="tabler-filled-youtube" type={IconType.FILL} />
      </IconButton>
    </Stack>
  );
}

SocialIcons.propTypes = { sx: PropTypes.any };
