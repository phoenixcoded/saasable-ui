import Button from '@mui/material/Button';
import PaginationItem from '@mui/material/PaginationItem';
import Box from '@mui/material/Box';

// @assets
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

/***************************  OVERRIDES - PAGINATION  ***************************/

export default function Pagination(theme) {
  return {
    MuiPagination: {
      defaultProps: {
        color: 'primary',
        shape: 'rounded',
        size: 'small',
        renderItem: (item) => {
          const btnCommonParams = {
            color: 'secondary',
            onClick: item.onClick,
            disabled: item.disabled,
            sx: { color: 'grey.700', [theme.breakpoints.down('sm')]: { px: 0.5, minWidth: 36, height: 36 } }
          };

          // Customize previous and next button text here
          switch (item.type) {
            case 'previous':
              return (
                <Button {...btnCommonParams} startIcon={<IconArrowLeft size={18} />}>
                  <Box sx={{ display: { xs: 'none', sm: 'unset' } }}>Previous</Box>
                </Button>
              );
            case 'next':
              return (
                <Button {...btnCommonParams} endIcon={<IconArrowRight size={18} />}>
                  <Box sx={{ display: { xs: 'none', sm: 'unset' } }}>Next</Box>
                </Button>
              );
            default:
              return <PaginationItem {...item}>{item.page}</PaginationItem>;
          }
        }
      },
      styleOverrides: {
        ul: { gap: 6, [theme.breakpoints.down('sm')]: { gap: 4 } }
      }
    }
  };
}
