import React, { useEffect, useState } from 'react';
import { TextInput, TextInputProps, TextStyle } from 'react-native';

import { useDebounce } from 'hooks';
import tw from 'libs/tailwind';

interface SearchTextInputProps extends TextInputProps {
  onTextDebounced: (text: string) => void;
  style?: TextStyle;
}

function SearchTextInput({ onTextDebounced, style, ...props }: SearchTextInputProps) {
  const [query, setQuery] = useState('');
  const debouncedText = useDebounce(query);

  useEffect(() => {
    onTextDebounced(debouncedText);
  }, [debouncedText]);

  return (
    <TextInput
      placeholder="Search ..."
      {...props}
      value={query}
      onChangeText={setQuery}
      style={tw.style('p-2 my-4 w-full bg-secondary-200 rounded-lg font-primary', style)}
    />
  );
}

export default SearchTextInput;
