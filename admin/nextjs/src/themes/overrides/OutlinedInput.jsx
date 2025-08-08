// @project
import { generateFocusStyle } from '@/utils/generateFocusStyle';

/***************************  COMPONENT - OUTLINED INPUT  ***************************/

export default function OutlinedInput(theme) {
  return {
    MuiOutlinedInput: {
      defaultProps: {
        size: 'small'
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: theme.customShadows.button,
          background: theme.palette.background.default,
          paddingLeft: 10,
          paddingRight: 10,
          '&.MuiInputBase-colorPrimary': {
            '&:not(.Mui-error):not(.Mui-disabled):not(.Mui-focused):hover': {
              '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main }
            },
            '&:not(.Mui-error).Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': { borderWidth: '1px', boxShadow: theme.customShadows.focus }
            }
          },
          '&.Mui-disabled': {
            cursor: 'not-allowed',
            input: { cursor: 'not-allowed' },
            '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.divider },
            '& .MuiInputAdornment-root': { color: theme.palette.secondary.main, opacity: 0.6 }
          },
          '&.Mui-error': {
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': { ...generateFocusStyle(theme.palette.error.main), borderWidth: '1px' }
            }
          },
          variants: [
            {
              props: { size: 'small' },
              style: { ...theme.typography.body2, '& input': { paddingTop: 7.94, paddingBottom: 7.94 } }
            }
          ]
        },
        notchedOutline: { borderColor: theme.palette.divider },
        colorSecondary: {
          '&:not(.Mui-error):not(.Mui-disabled):not(.Mui-focused):hover': {
            '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.grey[600] }
          },
          '&:not(.Mui-error).Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid',
              borderColor: theme.palette.grey[600],
              boxShadow: theme.customShadows.focus
            }
          }
        },
        multiline: { padding: 10 },
        input: { paddingLeft: 0, paddingRight: 0 }
      }
    }
  };
}
