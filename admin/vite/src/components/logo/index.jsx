import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

// @project
import LogoMain from './LogoMain';
import LogoIcon from './LogoIcon';
import { APP_DEFAULT_PATH } from '@/config';
import RouterLink from '@/components/Link';
import { generateFocusStyle } from '@/utils/generateFocusStyle';

/***************************  MAIN - LOGO  ***************************/

export default function LogoSection({ isIcon, sx, to }) {
  const theme = useTheme();

  return (
    <RouterLink to={!to ? APP_DEFAULT_PATH : to}>
      <ButtonBase disableRipple sx={{ ...sx, '&:focus-visible': generateFocusStyle(theme.palette.primary.main) }} aria-label="logo">
        {isIcon ? <LogoIcon /> : <LogoMain />}
      </ButtonBase>
    </RouterLink>
  );
}

LogoSection.propTypes = { isIcon: PropTypes.bool, sx: PropTypes.any, to: PropTypes.string };
