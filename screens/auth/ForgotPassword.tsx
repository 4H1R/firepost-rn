import React from 'react';
import { AtSymbolIcon } from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { fieldsToInitialValues } from 'utils';
import { TTextInputField } from 'types';
import Illustration from 'assets/svg/auth/forgotPassword.svg';
import Title from 'shared/common/Title';
import SafeScrollViewContainer from 'shared/container/SafeScrollViewContainer';
import Link from 'components/auth/Link';
import tw from 'libs/tailwind';
import validations from 'fixtures/validations';
import TextInputField from 'shared/form/TextInputField';
import Button from 'shared/common/Button';

const schema = yup.object({
  email: validations.email,
});

function ForgotPassword() {
  const { t } = useTranslation();

  const fields: TTextInputField<{ email: string }>[] = [
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
    <SafeScrollViewContainer>
      <Title text={t('auth.forgotPassword.title')} />
      <Illustration style={tw`w-full h-56 mt-4`} />
      <Formik
        validationSchema={schema}
        initialValues={fieldsToInitialValues(fields)}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => (
          <>
            {fields.map((field) => (
              <TextInputField key={field.name} {...field} />
            ))}
            <Button text={t('auth.resetPassword.title')} onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Link
        text={t('auth.forgotPassword.rememberYourPassword')}
        linkText={t('auth.login.buttonText')}
        navigateTo="Login"
      />
    </SafeScrollViewContainer>
  );
}

export default ForgotPassword;
