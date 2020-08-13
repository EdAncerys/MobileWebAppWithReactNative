import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './AppText';

import defaultStyles from '../config/styles';

export default function AppPicker({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.gray}
          style={styles.icon}
        />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={defaultStyles.colors.gray}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGray,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
