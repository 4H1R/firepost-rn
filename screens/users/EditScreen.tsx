import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AtSymbolIcon,
  InformationCircleIcon,
  UserCircleIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import * as yup from 'yup';

import { fieldsToInitialValues } from 'utils';
import { TTextInputField } from 'types';
import useUpdateUser, { IUpdateUserDto } from 'services/users/update';
import useAuthUser from 'stores/authStore';
import Button from 'shared/common/Button';
import TextInputField from 'shared/form/TextInputField';
import Description from 'components/users/edit/Description';
import PictureChanger from 'components/users/edit/PictureChanger';
import BgContainer from 'shared/container/BgContainer';
import tw from 'libs/tailwind';
import validations from 'fixtures/validations';
import ScrollViewContainer from 'shared/container/ScrollViewContainer';

const validationSchema = yup.object({
  name: validations.name,
  username: validations.username,
  website: validations.website,
  bio: validations.bio,
});

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
      name: 'website',
      description: 'It can be your personal website or your company website.',
      fieldProps: {
        placeholder: t('fields.website'),
        Icon: AtSymbolIcon,
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
    <BgContainer>
      <ScrollViewContainer>
        <Formik
          validationSchema={validationSchema}
          initialValues={fieldsToInitialValues(fields, {
            name: user!.name,
            username: user!.username,
            bio: user!.bio ?? '',
            website: user!.website ?? '',
          })}
          onSubmit={(values) => {
            update(values, {
              onSuccess: (data) => {
                queryClient.invalidateQueries(['users', user!.username]);
                setUser(data);
                Toast.show({
                  type: 'success',
                  text1: 'Your profile has been updated successfully.',
                });
                navigation.navigate('Root', {
                  screen: 'Users',
                  params: { screen: 'Show', params: { username: data.username } },
                });
              },
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
              <Button style={tw`mb-4`} text="Update" isLoading={isLoading} onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </ScrollViewContainer>
    </BgContainer>
  );
}

export default EditScreen;
