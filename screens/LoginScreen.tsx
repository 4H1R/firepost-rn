import React from 'react';
import { AtSymbolIcon, KeyIcon } from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

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

const schema = yup.object({
  email: validations.email,
  password: validations.password,
});

function LoginScreen() {
  const { t } = useTranslation();

  const fields: IField<TextInputProps>[] = [
    {
      name: 'email',
      fieldProps: {
        placeholder: t('fields.email'),
        Icon: AtSymbolIcon,
        keyboardType: 'email-address',
      },
    },
    {
      name: 'password',
      fieldProps: {
        placeholder: t('fields.password'),
        Icon: KeyIcon,
        secureTextEntry: true,
      },
    },
  ];

  return (
    <Container>
      <Title>{t('auth.login.title')}</Title>
      <Illustration style={tw`w-full h-56 mt-4`} />
      <Formik
        validationSchema={schema}
        initialValues={fieldsToInitialValues(fields)}
        onSubmit={(values) => console.log(values)}
      >
        <Fields buttonText={t('auth.login.buttonText')} fields={fields} />
      </Formik>
      <ORDivider />
      <LoginWithGoogle />
      <Link
        text={t('auth.login.forgotYourPassword')}
        linkText={t('auth.resetPassword.title')}
        navigateTo="ForgotPassword"
      />
      <Link
        text={t('auth.login.newToFirePost')}
        linkText={t('auth.register.buttonText')}
        navigateTo="Register"
      />
    </Container>
  );
}

export default LoginScreen;
