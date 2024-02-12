import * as yup from 'yup';

export const registrationSchema = yup
  .object({
    first_name: yup.string(),
    last_name: yup.string(),
    email: yup.string().email('Email must be valid').required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{8,99}$/,
        'Must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 special character, and 1 number',
      ),
    confirm_password: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();
