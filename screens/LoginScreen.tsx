import React from 'react';
import { AtSymbolIcon, KeyIcon } from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import * as yup from 'yup';

import { IField } from 'interfaces';
import { fieldsToInitialValues } from 'utils';
import { TextInputProps } from 'components/auth/TextInput';
import Illustration from 'assets/svg/auth/login.svg';
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
];

const schema = yup.object({
  email: validations.email,
  password: validations.password,
});

function LoginScreen() {
  return (
    <Container>
      <Title>Login</Title>
      <Illustration style={tw`w-full h-56 mt-4`} />
      <Formik
        validationSchema={schema}
        initialValues={fieldsToInitialValues(fields)}
        onSubmit={(values) => console.log(values)}
      >
        <Fields buttonText="Sign In" fields={fields} />
      </Formik>
      <ORDivider />
      <LoginWithGoogle />
      <Link
        text="Forgot your Password ?"
        linkText="Reset Password"
        navigateTo="ForgotPassword"
      />
      <Link
        text="New to FirePost ?"
        linkText="Register"
        navigateTo="Register"
      />
    </Container>
  );
}

export default LoginScreen;
