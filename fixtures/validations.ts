import * as yup from 'yup';

const validations = {
  name: yup.string().required().min(3).max(50),
  username: yup
    .string()
    .required()
    .min(3)
    .max(31)
    .matches(/^[a-zA-Z0-9._]+$/),
  email: yup.string().email().required().max(255),
  password: yup.string().required().min(8).max(30),
  bio: yup.string().optional().max(255),
  website: yup.string().url().max(255),
};

export default validations;
