import React from 'react';
import { InformationCircleIcon } from 'react-native-heroicons/outline';
import { Formik } from 'formik';

import { TTextInputField } from 'types';
import { fieldsToInitialValues } from 'utils';
import Title from 'shared/common/Title';
import BgContainer from 'shared/container/BgContainer';
import SafeScrollViewContainer from 'shared/container/SafeScrollViewContainer';
import TextInputField from 'shared/form/TextInputField';
import Button from 'shared/common/Button';
import ImageSelection from 'components/posts/create/ImageSelection';

function CreateScreen() {
  const fields: TTextInputField<{ description: string }>[] = [
    {
      name: 'description',
      fieldProps: {
        placeholder: 'Description',
        Icon: InformationCircleIcon,
        multiline: true,
      },
    },
  ];

  return (
    <BgContainer>
      <SafeScrollViewContainer>
        <Title text="Create a Post" />
        <ImageSelection />
        <Formik
          initialValues={fieldsToInitialValues(fields)}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleSubmit }) => (
            <>
              {fields.map((field) => (
                <TextInputField key={field.name} {...field} />
              ))}
              <Button text="Create" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </SafeScrollViewContainer>
    </BgContainer>
  );
}

export default CreateScreen;
