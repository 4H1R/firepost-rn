import React, { useState } from 'react';
import { InformationCircleIcon } from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import { FlatList, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { TTextInputField } from 'types';
import { fieldsToInitialValues } from 'utils';
import Title from 'shared/common/Title';
import BgContainer from 'shared/container/BgContainer';
import TextInputField from 'shared/form/TextInputField';
import Button from 'shared/common/Button';
import ImageSelection from 'components/posts/create/ImageSelection';
import tw from 'libs/tailwind';
import SafeAreaView from 'shared/common/SafeAreaView';

function CreateScreen() {
  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);

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
      <SafeAreaView>
        <FlatList
          contentContainerStyle={tw`container`}
          ListHeaderComponent={<Title text="Create Post" />}
          ListFooterComponent={
            <>
              <ImageSelection
                setImages={(newImages) => setImages((prev) => [...prev, ...newImages])}
              />
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
            </>
          }
          data={images}
          numColumns={2}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item: image }) => (
            <View style={tw`w-[48%] m-1`}>
              <Image style={tw`h-32 rounded skeleton`} source={{ uri: image.uri }} />
            </View>
          )}
        />
      </SafeAreaView>
    </BgContainer>
  );
}

export default CreateScreen;
