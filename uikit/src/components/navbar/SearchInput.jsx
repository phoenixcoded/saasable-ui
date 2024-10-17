import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

// @project
import SvgIcon from '@/components/SvgIcon';

/***************************  NAVBAR - SEARCH INPUT ***************************/

export default function SearchInput({ sx, ...rest }) {
  const theme = useTheme();

  return (
    <OutlinedInput
      placeholder="Search here"
      {...rest}
      sx={{
        ...theme.typography.body2,
        color: 'text.secondary',
        width: 1,
        pr: 2,
        '& .MuiOutlinedInput-input': {
          p: '10px 16px'
        },
        '& .MuiOutlinedInput-notchedOutline': { borderRadius: 25 },
        ...sx
      }}
      size="small"
      endAdornment={<SvgIcon name="tabler-search" size={24} color="grey.900" />}
    />
  );
}

SearchInput.propTypes = { sx: PropTypes.any, rest: PropTypes.any };
