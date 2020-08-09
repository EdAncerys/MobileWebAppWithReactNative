import React from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from '../config/colors';

export default function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.secondary,
    fontSize: 20,
    fontFamily: 'Roboto',
  },
});
