import React from 'react';
import { AtSymbolIcon, KeyIcon } from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { AxiosError } from 'axios';

import { IUnprocessableEntity } from 'interfaces';
import { fieldsToInitialValues } from 'utils';
import { TAuthField } from 'types';
import Illustration from 'assets/svg/auth/login.svg';
import Title from 'shared/common/Title';
import Container from 'components/auth/Container';
import ORDivider from 'components/auth/ORDivider';
import LoginWithGoogle from 'components/auth/LoginWithGoogle';
import Link from 'components/auth/Link';
import tw from 'libs/tailwind';
import validations from 'fixtures/validations';
import Fields from 'components/auth/Fields';
import useLogin, { ILoginDto } from 'services/auth/login';
import useAuthUser from 'stores/authStore';

const schema = yup.object({
  email: validations.email,
  password: validations.password,
});

function LoginScreen() {
  const { t } = useTranslation();
  const setUser = useAuthUser((state) => state.setUser);
  const { mutate: login, isLoading } = useLogin();

  const fields: TAuthField<ILoginDto>[] = [
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
      <Title text={t('auth.login.title')} />
      <Illustration style={tw`w-full h-56 mt-4`} />
      <Formik
        validationSchema={schema}
        initialValues={fieldsToInitialValues(fields, {
          email: 'aric59@gmail.com',
          password: 'password',
        })}
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
            onSuccess: setUser,
          })
        }
      >
        <Fields isLoading={isLoading} buttonText={t('auth.login.buttonText')} fields={fields} />
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
