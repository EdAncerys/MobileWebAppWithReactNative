import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Screen from './app/components/Screen';
import { Button, Image } from 'react-native';
import ImageInputList from './app/components/ImageInputList';

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}
