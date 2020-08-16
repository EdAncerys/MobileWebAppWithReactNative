import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Screen from './app/components/Screen';

export default function App() {
  const requestPermision = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library');
  };

  useEffect(() => {
    requestPermision();
  }, []);

  return <Screen />;
}
