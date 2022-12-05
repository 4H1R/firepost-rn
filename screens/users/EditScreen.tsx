import React from 'react';
import { useTranslation } from 'react-i18next';
import { AtSymbolIcon, InformationCircleIcon, UserIcon } from 'react-native-heroicons/outline';
import { Formik } from 'formik';

import { TAuthField } from 'types';
import { fieldsToInitialValues } from 'utils';
import Title from 'shared/common/Title';
import Container from 'shared/common/Container';
import Fields from 'components/auth/Fields';
import tw from 'libs/tailwind';
import useAuthUser from 'stores/authStore';
import Picture from 'components/users/show/Picture';

function EditScreen() {
  const { t } = useTranslation();
  const user = useAuthUser((state) => state.user);

  const fields: TAuthField<any>[] = [
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
      name: 'bio',
      fieldProps: {
        placeholder: 'Bio',
        Icon: InformationCircleIcon,
        multiline: true,
      },
    },
  ];

  return (
    <Container contentContainerStyle={tw`py-4`}>
      <Title text="Edit your Profile" />
      <Formik
        initialValues={fieldsToInitialValues(fields)}
        onSubmit={(values) => console.log(values)}
      >
        <Fields buttonText="Update Profile" fields={fields} />
      </Formik>
    </Container>
  );
}

export default EditScreen;
