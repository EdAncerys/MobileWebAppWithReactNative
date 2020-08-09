import React from 'react';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      {/* <ViewImageScreen /> */}

      {/* <MaterialCommunityIcons size={200} color="dodgerblue" name="email" /> */}
      {/* <AppButton title="Login" onPress={() => console.log('tapped')} /> */}
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
