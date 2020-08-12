import React from 'react';
import Constant from 'expo-constants';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constant.statusBarHeight,
    flex: 1,
  },
});
