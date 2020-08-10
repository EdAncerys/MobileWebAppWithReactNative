import React from 'react';
import Constant from 'expo-constants';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constant.statusBarHeight,
  },
});
