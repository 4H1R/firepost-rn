import React, { useEffect, useState } from 'react';
import { TextInput, TextInputProps, TextStyle, TouchableOpacity, View } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/outline';

import { useDebounce } from 'hooks';
import tw from 'libs/tailwind';

interface SearchTextInputProps extends TextInputProps {
  onTextDebounced: (text: string) => void;
  style?: TextStyle;
}

function SearchTextInput({ onTextDebounced, style, ...props }: SearchTextInputProps) {
  const [query, setQuery] = useState('');
  const debouncedText = useDebounce(query);

  const handleClearQuery = () => setQuery('');

  useEffect(() => {
    onTextDebounced(debouncedText);
  }, [debouncedText]);

  return (
    <View style={tw`relative flex-row items-center justify-end`}>
      <TextInput
        placeholder="Search ..."
        {...props}
        value={query}
        onChangeText={setQuery}
        style={tw.style('p-2 w-full bg-secondary-200 rounded-lg font-primary', style)}
      />
      {query && (
        <TouchableOpacity onPress={handleClearQuery} style={tw`absolute px-4`}>
          <XMarkIcon style={tw`text-secondary-400`} />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default SearchTextInput;
