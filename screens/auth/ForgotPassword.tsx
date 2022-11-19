import React from 'react';
import { AtSymbolIcon } from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { IField } from 'interfaces';
import { TextInputProps } from 'components/auth/TextInput';
import { fieldsToInitialValues } from 'utils';
import Illustration from 'assets/svg/auth/forgotPassword.svg';
import Title from 'shared/common/Title';
import Container from 'shared/common/Container';
import Link from 'components/auth/Link';
import tw from 'libs/tailwind';
import Fields from 'components/auth/Fields';
import validations from 'fixtures/validations';

const schema = yup.object({
  email: validations.email,
});

function ForgotPassword() {
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
  ];

  return (
    <Container>
      <Title>{t('auth.forgotPassword.title')}</Title>
      <Illustration style={tw`w-full h-56 mt-4`} />
      <Formik
        validationSchema={schema}
        initialValues={fieldsToInitialValues(fields)}
        onSubmit={(values) => console.log(values)}
      >
        <Fields buttonText={t('auth.resetPassword.title')} fields={fields} />
      </Formik>
      <Link
        text={t('auth.forgotPassword.rememberYourPassword')}
        linkText={t('auth.login.buttonText')}
        navigateTo="Login"
      />
    </Container>
  );
}

export default ForgotPassword;
