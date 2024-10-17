import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '../SvgIcon';
import Typography from '@mui/material/Typography';

// @project
import { IconType } from '@/enum';

// @types

/***************************  FAQ - DETAILS  ***************************/

export default function FaqDetails({ answer }) {
  const theme = useTheme();
  const colorData = {
    white: theme.palette.background.default,
    primary: theme.palette.grey[100]
  };

  if (typeof answer !== 'object') {
    return <Typography sx={{ color: 'text.secondary' }}>{answer}</Typography>;
  } else {
    switch (answer.type) {
      case 'list':
        return (
          <>
            <Typography sx={{ color: 'text.secondary', mb: { xs: 2, md: 2.5 } }}>{answer.content}</Typography>
            <List disablePadding sx={{ '& .MuiListItem-root:first-of-type': { pt: 0 }, '& .MuiListItem-root:last-of-type': { pb: 0 } }}>
              {answer.data.map((item, index) => (
                <ListItem key={'123' + index} sx={{ px: 0, py: { xs: 0.75, md: 1 } }}>
                  <ListItemAvatar sx={{ minWidth: 34, height: 24 }}>
                    <SvgIcon
                      name="custom-check"
                      type={IconType.CUSTOM}
                      twoToneColor={answer.color ? colorData[answer.color] : 'transparent'}
                      color="primary.main"
                    />
                  </ListItemAvatar>
                  <ListItemText primary={item.primary} primaryTypographyProps={{ color: 'text.secondary' }} sx={{ m: 0 }} />
                </ListItem>
              ))}
            </List>
          </>
        );
    }
  }
}

FaqDetails.propTypes = { answer: PropTypes.oneOfType([PropTypes.any, PropTypes.string]) };
