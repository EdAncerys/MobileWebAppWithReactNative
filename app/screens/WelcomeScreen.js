import React from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/market-min.jpg')}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
