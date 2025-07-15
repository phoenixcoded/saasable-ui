import PropTypes from 'prop-types';
// @mui
import Stack from '@mui/material/Stack';

// @project
import SvgIcon from './SvgIcon';
import { IconType } from '@/enum';

/***************************  RATING  ***************************/

export default function Rating({ count = 5, rate, starSize = 20, ...rest }) {
  return (
    <Stack direction="row" {...rest} sx={{ gap: 0.75, ...(rest.sx && { ...rest.sx }) }}>
      {Array.from({ length: count }, (_, index) => {
        const color = rate && index > rate - 1 ? 'primary.lighter' : 'primary.main';
        return <SvgIcon name="tabler-filled-star" size={starSize} key={index} type={IconType.FILL} color={color} />;
      })}
    </Stack>
  );
}

Rating.propTypes = { count: PropTypes.number, rate: PropTypes.number, starSize: PropTypes.number, rest: PropTypes.any };
