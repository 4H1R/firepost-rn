import React from 'react';
import {
  EnvelopeIcon,
  InformationCircleIcon,
  KeyIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { AxiosError } from 'axios';
import * as yup from 'yup';

import { TTextInputField } from 'types';
import { IUnprocessableEntity } from 'interfaces';
import { fieldsToInitialValues } from 'utils';
import { createAccessTokenName, setAccessToken } from 'utils/auth';
import Illustration from 'assets/svg/auth/register.svg';
import Title from 'shared/common/Title';
import SafeScrollViewContainer from 'shared/container/SafeScrollViewContainer';
import ORDivider from 'components/auth/ORDivider';
import LoginWithGoogle from 'components/auth/LoginWithGoogle';
import Link from 'components/auth/Link';
import tw from 'libs/tailwind';
import validations from 'fixtures/validations';
import useRegister, { IRegisterDto } from 'services/auth/register';
import useAuthUser from 'stores/authStore';
import TextInputField from 'shared/form/TextInputField';
import Button from 'shared/common/Button';

interface IRegister extends IRegisterDto {
  passwordConfirmation: string;
}

function RegisterScreen() {
  const { t } = useTranslation();
  const { mutate: register, isLoading } = useRegister();
  const setAuth = useAuthUser((state) => state.setAuth);

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

  const fields: TTextInputField<IRegister>[] = [
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
        Icon: EnvelopeIcon,
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
    <SafeScrollViewContainer>
      <Title text={t('auth.register.title')} />
      <Illustration style={tw`w-full h-40 mt-4`} />
      <Formik
        validationSchema={schema}
        initialValues={fieldsToInitialValues(fields)}
        onSubmit={(values, { setErrors }) => {
          register(
            { ...values, deviceName: createAccessTokenName() },
            {
              onError: (e) => {
                if (e instanceof AxiosError<IUnprocessableEntity<IRegisterDto>>) {
                  if (e?.response?.status === 422) {
                    setErrors(e.response.data.errors);
                    return;
                  }
                }
                setErrors({ email: t('errors.somethingWentWrong') });
              },
              onSuccess: (data) => {
                setAuth(data);
                setAccessToken(data.accessToken);
              },
            }
          );
        }}
      >
        {({ handleSubmit }) => (
          <>
            {fields.map((field) => (
              <TextInputField key={field.name} {...field} />
            ))}
            <Button
              text={t('auth.register.buttonText')}
              isLoading={isLoading}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <ORDivider />
      <LoginWithGoogle />
      <Link
        text={t('auth.register.alreadyHaveAnAccount')}
        linkText={t('auth.login.buttonText')}
        navigateTo="Login"
      />
    </SafeScrollViewContainer>
  );
}

export default RegisterScreen;
