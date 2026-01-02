'use client';
import PropTypes from 'prop-types';

import { useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { useForm, Controller } from 'react-hook-form';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import SvgIcon from '@/components/SvgIcon';

import countries from '@/data/countries';
import { emailSchema, firstNameSchema, lastNameSchema, phoneSchema } from '@/utils/validationSchema';

/***************************  FORM - INPUT LABEL  ***************************/

function FieldLabel({ name }) {
  return (
    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
      {name}
    </Typography>
  );
}

/***************************  FORM - ERROR MESSAGE  ***************************/

function ErrorMessage({ message }) {
  return (
    <Typography variant="caption" sx={{ color: 'error.main' }}>
      {message}
    </Typography>
  );
}

/***************************  CONTACT US - FORM 1  ***************************/

export default function ContactUsForm1() {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'dialcode-popper' : undefined;

  // Initialize the form with default values and error handling
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
    setValue
  } = useForm({ defaultValues: { dialcode: '+91' } });

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ gap: 0.5 }}>
            <FieldLabel name="First Name" />
            <OutlinedInput
              {...register('firstName', firstNameSchema)}
              placeholder="First name"
              slotProps={{ input: { 'aria-label': 'First name' } }}
              fullWidth
              error={errors.firstName && Boolean(errors.firstName)}
            />
            {errors.firstName?.message && <ErrorMessage message={errors.firstName?.message} />}
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ gap: 0.5 }}>
            <FieldLabel name="Last Name" />
            <OutlinedInput
              {...register('lastName', lastNameSchema)}
              placeholder="Last name"
              slotProps={{ input: { 'aria-label': 'Last name' } }}
              fullWidth
              error={errors.lastName && Boolean(errors.lastName)}
            />
            {errors.lastName?.message && <ErrorMessage message={errors.lastName?.message} />}
          </Stack>
        </Grid>
        <Grid size={12}>
          <Stack sx={{ gap: 0.5 }}>
            <FieldLabel name="Email" />
            <OutlinedInput
              {...register('email', emailSchema)}
              placeholder="example@gmail.com"
              slotProps={{ input: { 'aria-label': 'Email Address' } }}
              fullWidth
              error={errors.email && Boolean(errors.email)}
            />
            {errors.email?.message && <ErrorMessage message={errors.email?.message} />}
          </Stack>
        </Grid>
        <Grid size={12}>
          <Stack sx={{ gap: 0.5 }}>
            <FieldLabel name="Phone Number" />
            <Controller
              control={control}
              name="phone"
              rules={phoneSchema}
              render={({ field: { onChange } }) => (
                <OutlinedInput
                  placeholder="Phone number"
                  slotProps={{ input: { 'aria-label': 'Phone number' } }}
                  fullWidth
                  error={errors.phone && Boolean(errors.phone)}
                  onChange={onChange}
                  startAdornment={
                    <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center', pr: 1.5 }}>
                      <Button
                        endIcon={<SvgIcon name="tabler-chevron-down" size={16} color="text.primary" stroke={2} />}
                        sx={{
                          typography: 'body1',
                          fontWeight: 500,
                          p: { xs: 0.25 },
                          borderRadius: 2.5,
                          color: 'text.primary',
                          '&:hover': { bgcolor: 'transparent' },
                          '&:before': { display: 'none' },
                          '& .MuiInputBase-input:focus': { bgcolor: 'transparent' },
                          width: 'max-content'
                        }}
                        disableRipple
                        aria-describedby={id}
                        type="button"
                        onClick={handleClick}
                      >
                        {watch('dialcode')}
                      </Button>
                      <Popper
                        placement="bottom-start"
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        transition
                        popperOptions={{
                          modifiers: [
                            {
                              name: 'offset',
                              options: {
                                offset: [-16, 2]
                              }
                            }
                          ]
                        }}
                      >
                        {({ TransitionProps }) => (
                          <Fade in={open} {...TransitionProps}>
                            <Card elevation={0} sx={{ border: '1px solid', borderColor: theme.vars.palette.divider, borderRadius: 4 }}>
                              <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                                <Box sx={{ p: 1, pr: 0.5 }}>
                                  <List disablePadding>
                                    <Box sx={{ overflow: 'auto', maxHeight: 320, width: { xs: 296, sm: 320 } }}>
                                      {countries.map((country, index) => (
                                        <ListItemButton
                                          key={index}
                                          sx={{ borderRadius: 4, mb: 0.5 }}
                                          selected={country.dialCode === watch('dialcode')}
                                          onClick={() => {
                                            setValue('dialcode', country.dialCode);
                                            setAnchorEl(null);
                                          }}
                                        >
                                          <ListItemAvatar sx={{ minWidth: 32 }}>
                                            <CardMedia
                                              image={`https://flagcdn.com/w20/${country.countyCode.toLowerCase()}.png`}
                                              component="img"
                                              sx={{ height: 'fit-content', width: 21 }}
                                              loading="lazy"
                                            />
                                          </ListItemAvatar>
                                          <ListItemText primary={`${country.name} (${country.dialCode})`} />
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
                      <Divider orientation="vertical" flexItem sx={{ height: 24, my: 'auto' }} />
                    </Stack>
                  }
                />
              )}
            />
            {errors.phone?.message && <ErrorMessage message={errors.phone?.message} />}
          </Stack>
        </Grid>
        <Grid size={12}>
          <Stack sx={{ gap: 0.5 }}>
            <FieldLabel name="Message" />
            <OutlinedInput
              {...register('message', { required: 'Message is required' })}
              multiline
              rows={4}
              placeholder="Please type your message here.."
              fullWidth
              error={errors.message && Boolean(errors.message)}
              slotProps={{ input: { 'aria-label': 'Message' } }}
            />
            {errors.message?.message && <ErrorMessage message={errors.message?.message} />}
          </Stack>
        </Grid>

        <Grid size={12}>
          <Stack sx={{ alignItems: 'flex-start', mt: { xs: 0.5, sm: 1.5 } }}>
            <ButtonAnimationWrapper>
              <Button type="submit" color="primary" variant="contained" size="large">
                Send message
              </Button>
            </ButtonAnimationWrapper>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
}

FieldLabel.propTypes = { name: PropTypes.string };

ErrorMessage.propTypes = { message: PropTypes.string };
