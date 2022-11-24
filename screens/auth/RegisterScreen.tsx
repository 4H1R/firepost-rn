import React from 'react';
import {
  AtSymbolIcon,
  InformationCircleIcon,
  KeyIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { AxiosError } from 'axios';
import * as yup from 'yup';

import { IUnprocessableEntity } from 'interfaces';
import { TAuthField } from 'types';
import { fieldsToInitialValues } from 'utils';
import Illustration from 'assets/svg/auth/register.svg';
import Title from 'shared/common/Title';
import Container from 'components/auth/Container';
import ORDivider from 'components/auth/ORDivider';
import LoginWithGoogle from 'components/auth/LoginWithGoogle';
import Link from 'components/auth/Link';
import tw from 'libs/tailwind';
import validations from 'fixtures/validations';
import Fields from 'components/auth/Fields';
import useRegister, { IRegisterDto } from 'services/auth/register';
import useAuthUser from 'stores/authStore';

interface IRegister extends IRegisterDto {
  passwordConfirmation: string;
}

function RegisterScreen() {
  const { t } = useTranslation();
  const { mutate: register, isLoading } = useRegister();
  const setUser = useAuthUser((state) => state.setUser);

  const schema = yup.object({
    name: validations.name,
    username: validations.username,
    email: validations.email,
    password: validations.password,
    passwordConfirmation: validations.password.oneOf(
      [yup.ref('password')],
      t('errors.passwordsMatch')
    ),
  });

  const fields: TAuthField<IRegister>[] = [
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
      <Title text={t('auth.register.title')} />
      <Illustration style={tw`w-full h-40 mt-4`} />
      <Formik
        validationSchema={schema}
        initialValues={fieldsToInitialValues(fields)}
        onSubmit={(values, { setErrors }) => {
          register(values, {
            onError: (e) => {
              const error = e as AxiosError<IUnprocessableEntity<IRegisterDto>>;
              if (error?.response?.status === 422) {
                setErrors(error.response.data.errors);
                return;
              }
              setErrors({ email: t('errors.somethingWentWrong') });
            },
            // Refresh token is being updated in secure storage on Auth component
            onSuccess: setUser,
          });
        }}
      >
        <Fields isLoading={isLoading} buttonText={t('auth.register.buttonText')} fields={fields} />
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
