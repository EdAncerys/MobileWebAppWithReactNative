import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  console.log(useDimensions(), useDeviceOrientation());

  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
