import React from 'react';
import { AtSymbolIcon } from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { TAuthField } from 'types';
import { fieldsToInitialValues } from 'utils';
import Illustration from 'assets/svg/auth/forgotPassword.svg';
import Title from 'shared/common/Title';
import Container from 'components/auth/Container';
import Link from 'components/auth/Link';
import tw from 'libs/tailwind';
import Fields from 'components/auth/Fields';
import validations from 'fixtures/validations';

const schema = yup.object({
  email: validations.email,
});

function ForgotPassword() {
  const { t } = useTranslation();

  const fields: TAuthField<any>[] = [
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
      <Title text={t('auth.forgotPassword.title')} />
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
