'use client';
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { Controller } from 'react-hook-form';

// @project
import { contactSchema } from '@/utils/validation-schema/common';

// @icons
import { IconChevronDown, IconHelp } from '@tabler/icons-react';

// @data
import countries from '@/data/countries';

/***************************  CONTACT  ***************************/

export default function Contact({
  dialCode,
  placeholder = 'ex. 9876x xxxxx',
  helpText,
  isDisabled = false,
  isCountryDisabled = false,
  fullWidth = false,
  control,
  isError = false,
  onCountryChange
}) {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const open = Boolean(anchorEl);
  const id = open ? 'dialcode-popper' : undefined;

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  useEffect(() => {
    const data = countries.find((item) => item.dialCode === (dialCode || '+1')) || countries[0];
    setSelectedCountry(data);
    if (!dialCode && onCountryChange) onCountryChange(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialCode]);

  const countryChange = (country) => {
    if (onCountryChange) {
      onCountryChange(country);
    }
    setAnchorEl(null);
  };

  return (
    <Controller
      control={control}
      name={'contact'}
      rules={contactSchema}
      render={({ field: { value, onChange } }) => (
        <OutlinedInput
          placeholder={placeholder}
          value={value || ''}
          onChange={onChange}
          error={isError}
          {...(helpText && {
            endAdornment: (
              <InputAdornment position="end" sx={{ '& svg': { cursor: 'default' } }}>
                <Tooltip title={helpText}>
                  <IconHelp />
                </Tooltip>
              </InputAdornment>
            )
          })}
          disabled={isDisabled}
          aria-describedby="contact-field"
          slotProps={{ input: { 'aria-label': 'contact' } }}
          fullWidth={fullWidth}
          startAdornment={
            <>
              <Stack direction="row" sx={{ minHeight: 'inherit', height: 1, gap: 0.5, alignItems: 'center', mr: 0.75 }}>
                <Button
                  endIcon={<IconChevronDown width={16} height={16} />}
                  disabled={isDisabled || isCountryDisabled}
                  color="secondary"
                  sx={{
                    ...theme.typography.body2,
                    height: 'auto',
                    p: 0,
                    borderRadius: 2,
                    minWidth: 40,
                    '&:hover': { bgcolor: 'transparent' },
                    '&:before': { display: 'none' },
                    '& .MuiInputBase-input:focus': { bgcolor: 'transparent' }
                  }}
                  disableRipple
                  aria-describedby={id}
                  type="button"
                  onClick={handleClick}
                >
                  {selectedCountry.countryCode}
                </Button>
                <Divider orientation="vertical" flexItem />
              </Stack>
              <Popper
                placement="bottom-start"
                id={id}
                open={open}
                anchorEl={anchorEl}
                transition
                popperOptions={{ modifiers: [{ name: 'offset', options: { offset: [-10, 11] } }] }}
                sx={{ zIndex: 1301 }}
              >
                {({ TransitionProps }) => (
                  <Fade in={open} {...TransitionProps}>
                    <Card elevation={0} sx={{ border: '1px solid', borderColor: theme.palette.divider, borderRadius: 2 }}>
                      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                        <Box sx={{ p: 0.5 }}>
                          <List disablePadding>
                            <Box style={{ maxHeight: 320, width: 280, overflow: 'auto' }}>
                              {countries.map((country, index) => (
                                <ListItemButton
                                  key={index}
                                  sx={{ borderRadius: 2, mb: 0.25 }}
                                  selected={country.dialCode === dialCode}
                                  onClick={() => countryChange(country)}
                                >
                                  <ListItemAvatar sx={{ minWidth: 32 }}>
                                    <CardMedia
                                      image={`https://flagcdn.com/w20/${country.countryCode.toLowerCase()}.png`}
                                      component="img"
                                      sx={{ height: 'fit-content', width: 21 }}
                                    />
                                  </ListItemAvatar>
                                  <ListItemText primary={<Typography variant="body2">{country.name}</Typography>} />
                                </ListItemButton>
                              ))}
                            </Box>
                          </List>
                        </Box>
                      </ClickAwayListener>
                    </Card>
                  </Fade>
                )}
              </Popper>
            </>
          }
        />
      )}
    />
  );
}

Contact.propTypes = {
  dialCode: PropTypes.any,
  placeholder: PropTypes.string,
  helpText: PropTypes.any,
  isDisabled: PropTypes.bool,
  isCountryDisabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  control: PropTypes.any,
  isError: PropTypes.bool,
  onCountryChange: PropTypes.any
};
