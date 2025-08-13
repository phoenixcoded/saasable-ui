export const emailSchema = {
  required: 'Email is required',
  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }
};

export const passwordSchema = {
  required: 'Password is required',
  minLength: { value: 8, message: 'Password must be at least 8 characters' },
  validate: {
    noSpaces: (value) => !/\s/.test(value) || 'Password cannot contain spaces',
    hasUpperCase: (value) => /[A-Z]/.test(value) || 'Password must have at least one uppercase letter',
    hasNumber: (value) => /[0-9]/.test(value) || 'Password must have at least one number',
    hasSpecialChar: (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Password must have at least one special character'
  }
};

export const firstNameSchema = {
  required: 'First name is required',
  pattern: { value: /^[a-zA-Z\s]+$/, message: 'Invalid first name' },
  validate: {
    trim: (value) => {
      const trimmedValue = value.trim();
      return trimmedValue.length > 0 || 'First name cannot be empty or contain only spaces';
    }
  },
  onBlur: (e) => {
    e.target.value = e.target.value.trim();
  }
};

export const lastNameSchema = {
  required: 'Last name is required',
  pattern: { value: /^[a-zA-Z\s]+$/, message: 'Invalid last name' },
  validate: {
    trim: (value) => {
      const trimmedValue = value.trim();
      return trimmedValue.length > 0 || 'Last name cannot be empty or contain only spaces';
    }
  },
  onBlur: (e) => {
    e.target.value = e.target.value.trim();
  }
};

export const usernameSchema = {
  required: 'Username is required',
  pattern: {
    value: /^[a-zA-Z0-9._]+$/, // Alphanumeric, underscores, and dots
    message: 'Username can only contain letters, numbers, dots, and underscores'
  },
  validate: {
    trim: (value) => {
      const trimmedValue = value.trim();
      return trimmedValue.length > 0 || 'Username cannot be empty or contain only spaces';
    },
    noSpaces: (value) => {
      return !/\s/.test(value) || 'Username cannot contain spaces';
    }
  },
  onBlur: (e) => {
    e.target.value = e.target.value.trim();
  }
};

export const contactSchema = {
  required: 'Contact number is required',
  pattern: { value: /^[0-9()\-\.]{7,15}$/, message: 'Invalid contact number' }
};

export const otpSchema = {
  required: 'OTP is required',
  minLength: { value: 6, message: 'OTP must be exactly 6 characters' }
};
