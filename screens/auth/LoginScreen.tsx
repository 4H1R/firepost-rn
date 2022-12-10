import React from 'react';
import { AtSymbolIcon, KeyIcon } from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { AxiosError } from 'axios';

import { IUnprocessableEntity } from 'interfaces';
import { TTextInputField } from 'types';
import { fieldsToInitialValues } from 'utils';
import Illustration from 'assets/svg/auth/login.svg';
import Title from 'shared/common/Title';
import SafeScrollViewContainer from 'shared/container/SafeScrollViewContainer';
import ORDivider from 'components/auth/ORDivider';
import LoginWithGoogle from 'components/auth/LoginWithGoogle';
import Link from 'components/auth/Link';
import tw from 'libs/tailwind';
import validations from 'fixtures/validations';
import useLogin, { ILoginDto } from 'services/auth/login';
import useAuthUser from 'stores/authStore';
import Button from 'shared/common/Button';
import TextInputField from 'shared/form/TextInputField';

const schema = yup.object({
  email: validations.email,
  password: validations.password,
});

function LoginScreen() {
  const { t } = useTranslation();
  const setAuth = useAuthUser((state) => state.setAuth);
  const { mutate: login, isLoading } = useLogin();

  const fields: TTextInputField<ILoginDto>[] = [
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
    <SafeScrollViewContainer>
      <Title text={t('auth.login.title')} />
      <Illustration style={tw`w-full h-56 mt-4`} />
      <Formik
        validationSchema={schema}
        initialValues={fieldsToInitialValues(fields)}
        onSubmit={(values, { setErrors }) =>
          login(values, {
            onError: (e) => {
              const error = e as AxiosError<IUnprocessableEntity<ILoginDto>>;
              if (error?.response?.status === 422) {
                setErrors({ email: t('errors.invalidCredentials') });
                return;
              }
              setErrors({ email: t('errors.somethingWentWrong') });
            },
            // Refresh token is being updated in secure storage on Auth component
            onSuccess: setAuth,
          })
        }
      >
        {({ handleSubmit }) => (
          <>
            {fields.map((field) => (
              <TextInputField key={field.name} {...field} />
            ))}
            <Button
              text={t('auth.login.buttonText')}
              isLoading={isLoading}
              onPress={handleSubmit}
            />
          </>
        )}
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
    </SafeScrollViewContainer>
  );
}

export default LoginScreen;
