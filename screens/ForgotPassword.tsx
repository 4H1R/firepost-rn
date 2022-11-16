import React from 'react';
import { AtSymbolIcon } from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import * as yup from 'yup';

import { IField } from 'interfaces';
import { TextInputProps } from 'components/auth/TextInput';
import { fieldsToInitialValues } from 'utils';
import Illustration from 'assets/svg/auth/login.svg';
import Title from 'components/auth/Title';
import Container from 'components/auth/Container';
import Link from 'components/auth/Link';
import tw from 'libs/tailwind';
import Fields from 'components/auth/Fields';
import validations from 'fixtures/validations';

const fields: IField<TextInputProps>[] = [
  {
    name: 'email',
    fieldProps: {
      placeholder: 'Email',
      Icon: AtSymbolIcon,
      keyboardType: 'email-address',
    },
  },
];

const schema = yup.object({
  email: validations.email,
});

function ForgotPassword() {
  return (
    <Container>
      <Title>Forgot Password</Title>
      <Illustration style={tw`w-full h-56 mt-4`} />
      <Formik
        validationSchema={schema}
        initialValues={fieldsToInitialValues(fields)}
        onSubmit={(values) => console.log(values)}
      >
        <Fields buttonText="Reset Password" fields={fields} />
      </Formik>
      <Link
        text="Remember your Password ?"
        linkText="Login"
        navigateTo="Login"
      />
    </Container>
  );
}

export default ForgotPassword;
