import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

import colors from '../config/colors';

export default function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    ...Platform.select({
      ios: {
        color: colors.primary,
        fontSize: 20,
        fontFamily: 'Avenir',
      },
      android: {
        color: colors.black,
        fontSize: 20,
        fontFamily: 'Roboto',
      },
    }),
  },
});
