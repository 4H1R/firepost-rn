import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { InformationCircleIcon, UserCircleIcon, UserIcon } from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

import { fieldsToInitialValues } from 'utils';
import { TTextInputField } from 'types';
import useUpdateUser, { IUpdateUserDto } from 'services/users/update';
import Illustration from 'assets/svg/users/edit.svg';
import Title from 'shared/common/Title';
import Container from 'shared/common/Container';
import tw from 'libs/tailwind';
import useAuthUser from 'stores/authStore';
import Button from 'shared/common/Button';
import TextInputField from 'shared/form/TextInputField';
import Description from 'components/users/edit/Description';
import PictureChanger from 'components/users/edit/PictureChanger';

type TField = { description: string } & TTextInputField<IUpdateUserDto>;

function EditScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const { user, setUser } = useAuthUser((state) => state);
  const { mutate: update, isLoading } = useUpdateUser();

  const fields: TField[] = [
    {
      name: 'name',
      description: "Name is most of the time you're name that other users can search you by.",
      fieldProps: {
        placeholder: t('fields.name'),
        Icon: UserCircleIcon,
      },
    },
    {
      name: 'username',
      description: "You're username is a unique identifier for you so it should be unique.",
      fieldProps: {
        placeholder: t('fields.username'),
        Icon: UserIcon,
      },
    },
    {
      name: 'bio',
      description:
        "Bio is like a description of yourself you can write you're job, where you live etc ...",
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
      <Illustration style={tw`w-full h-56 mt-2`} />
      <Formik
        initialValues={fieldsToInitialValues(fields, {
          name: user!.name,
          username: user!.username,
          bio: user!.bio ?? '',
        })}
        onSubmit={(values: any) => {
          update(values, {
            onSuccess: (data) => {
              queryClient.invalidateQueries(['users', user!.username]);
              setUser(data);
              Toast.show({ type: 'success', text1: 'Your profile has been updated successfully.' });
              navigation.navigate('Root', {
                screen: 'Users',
                params: { screen: 'Show', params: { username: data.username } },
              });
            },
            onError: () => {},
          });
        }}
      >
        {({ handleSubmit }) => (
          <>
            {fields.map(({ description, ...field }) => (
              <Fragment key={field.name}>
                <TextInputField {...field} />
                <Description description={description} />
              </Fragment>
            ))}
            <PictureChanger uri={user!.image} />
            <Button text="Update" isLoading={isLoading} onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Container>
  );
}

export default EditScreen;
