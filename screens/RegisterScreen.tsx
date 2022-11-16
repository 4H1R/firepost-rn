import React from 'react';
import {
  AtSymbolIcon,
  InformationCircleIcon,
  KeyIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import * as yup from 'yup';

import { TextInputProps } from 'components/auth/TextInput';
import { IField } from 'interfaces';
import { fieldsToInitialValues } from 'utils';
import Illustration from 'assets/svg/auth/register.svg';
import Title from 'components/auth/Title';
import Container from 'components/auth/Container';
import ORDivider from 'components/auth/ORDivider';
import LoginWithGoogle from 'components/auth/LoginWithGoogle';
import Link from 'components/auth/Link';
import tw from 'libs/tailwind';
import validations from 'fixtures/validations';
import Fields from 'components/auth/Fields';

const fields: IField<TextInputProps>[] = [
  {
    name: 'name',
    fieldProps: {
      placeholder: 'Name',
      Icon: InformationCircleIcon,
    },
  },
  {
    name: 'username',
    fieldProps: {
      placeholder: 'Username',
      Icon: UserIcon,
    },
  },
  {
    name: 'email',
    fieldProps: {
      placeholder: 'Email',
      Icon: AtSymbolIcon,
      keyboardType: 'email-address',
    },
  },
  {
    name: 'password',
    fieldProps: {
      placeholder: 'Password',
      Icon: KeyIcon,
      secureTextEntry: true,
    },
  },
  {
    name: 'passwordConfirmation',
    fieldProps: {
      placeholder: 'Password Confirmation',
      Icon: KeyIcon,
      secureTextEntry: true,
    },
  },
];

const schema = yup.object({
  name: validations.name,
  username: validations.username,
  email: validations.email,
  password: validations.password,
  passwordConfirmation: validations.password.oneOf([yup.ref('password')]),
});

function RegisterScreen() {
  return (
    <Container>
      <Title>Register</Title>
      <Illustration style={tw`w-full h-40 mt-4`} />
      <Formik
        validationSchema={schema}
        initialValues={fieldsToInitialValues(fields)}
        onSubmit={(values) => console.log(values)}
      >
        <Fields buttonText="Sign Up" fields={fields} />
      </Formik>
      <ORDivider />
      <LoginWithGoogle />
      <Link
        text="Already have an Account ?"
        linkText="Login"
        navigateTo="Login"
      />
    </Container>
  );
}

export default RegisterScreen;
