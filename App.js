import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Screen from './app/components/Screen';
import { Button, Image } from 'react-native';
import ImageInput from './app/components/ImageInput';

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermision = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library');
  };

  useEffect(() => {
    requestPermision();
  }, []);

  const selectImage = async () => {
    try {
      const { uri, cancelled } = await ImagePicker.launchImageLibraryAsync();
      if (!cancelled) setImageUri(uri);
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}
