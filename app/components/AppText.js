import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

import colors from '../config/colors';

export default function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: Platform.OS === 'android' ? colors.secondary : colors.primary,
    fontSize: 20,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
