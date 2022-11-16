import React from 'react';
import {
  AtSymbolIcon,
  InformationCircleIcon,
  KeyIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
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

const schema = yup.object({
  name: validations.name,
  username: validations.username,
  email: validations.email,
  password: validations.password,
  passwordConfirmation: validations.password.oneOf([yup.ref('password')]),
});

function RegisterScreen() {
  const { t } = useTranslation();

  const fields: IField<TextInputProps>[] = [
    {
      name: 'name',
      fieldProps: {
        placeholder: t('fields.name'),
        Icon: InformationCircleIcon,
      },
    },
    {
      name: 'username',
      fieldProps: {
        placeholder: t('fields.username'),
        Icon: UserIcon,
      },
    },
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
    {
      name: 'passwordConfirmation',
      fieldProps: {
        placeholder: t('fields.passwordConfirmation'),
        Icon: KeyIcon,
        secureTextEntry: true,
      },
    },
  ];

  return (
    <Container>
      <Title>{t('auth.register.title')}</Title>
      <Illustration style={tw`w-full h-40 mt-4`} />
      <Formik
        validationSchema={schema}
        initialValues={fieldsToInitialValues(fields)}
        onSubmit={(values) => console.log(values)}
      >
        <Fields buttonText={t('auth.register.buttonText')} fields={fields} />
      </Formik>
      <ORDivider />
      <LoginWithGoogle />
      <Link
        text={t('auth.register.alreadyHaveAnAccount')}
        linkText={t('auth.login.buttonText')}
        navigateTo="Login"
      />
    </Container>
  );
}

export default RegisterScreen;
