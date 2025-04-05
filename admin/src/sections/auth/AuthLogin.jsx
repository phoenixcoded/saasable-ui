'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

import { useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { useForm } from 'react-hook-form';

// @project
import { emailSchema, passwordSchema } from '@/utils/validationSchema';

// @icons
import { IconEye, IconEyeOff } from '@tabler/icons-react';

// Mock user credentials
const userCredentials = [
  { title: 'Super Admin', email: 'super_admin@saasable.io', password: 'Super@123' },
  { title: 'Admin', email: 'admin@saasable.io', password: 'Admin@123' },
  { title: 'User', email: 'user@saasable.io', password: 'User@123' }
];

function isChildObjectContained(parent, child) {
  return Object.entries(child).every(([key, value]) => parent.hasOwnProperty(key) && parent[key] === value);
}

/***************************  AUTH - LOGIN  ***************************/

export default function AuthLogin({ inputSx }) {
  const theme = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Initialize react-hook-form
  const {
    watch,
    register,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: { email: 'super_admin@saasable.io', password: 'Super@123' } });

  const formData = watch();

  const commonIconProps = { size: 16, color: theme.palette.grey[700] };

  return (
    <>
      <Stack direction="row" sx={{ gap: 1, mb: 2 }}>
        {userCredentials.map((credential) => (
          <Button
            key={credential.title}
            variant="outlined"
            color={isChildObjectContained(credential, formData) ? 'primary' : 'secondary'}
            sx={{ flex: 1 }}
            onClick={() => {
              reset({ email: credential.email, password: credential.password });
            }}
          >
            {credential.title}
          </Button>
        ))}
      </Stack>
      <form>
        <Stack gap={2}>
          <Box>
            <InputLabel>Email</InputLabel>
            <OutlinedInput
              placeholder="example@saasable.io"
              {...register('email', emailSchema)}
              fullWidth
              error={Boolean(errors.email)}
              sx={inputSx}
            />
            {errors.email?.message && <FormHelperText error>{errors.email.message}</FormHelperText>}
          </Box>

          <Box>
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              type={isPasswordVisible ? 'text' : 'password'}
              {...register('password', passwordSchema)}
              placeholder="Enter your password"
              fullWidth
              error={Boolean(errors.password)}
              endAdornment={
                <InputAdornment
                  position="end"
                  sx={{ cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? <IconEye {...commonIconProps} /> : <IconEyeOff {...commonIconProps} />}
                </InputAdornment>
              }
              sx={inputSx}
            />
            <Stack direction="row" alignItems="center" justifyContent={errors.password ? 'space-between' : 'flex-end'} width={1}>
              {errors.password?.message && <FormHelperText error>{errors.password.message}</FormHelperText>}
              <Link
                component={NextLink}
                underline="hover"
                variant="caption"
                href="#"
                textAlign="right"
                sx={{ '&:hover': { color: 'primary.dark' }, mt: 0.75 }}
              >
                Forgot Password?
              </Link>
            </Stack>
          </Box>
        </Stack>

        <Button color="primary" variant="contained" sx={{ minWidth: 120, mt: { xs: 1, sm: 4 }, '& .MuiButton-endIcon': { ml: 1 } }}>
          Sign In
        </Button>
      </form>
    </>
  );
}

AuthLogin.propTypes = { inputSx: PropTypes.any };
