import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
