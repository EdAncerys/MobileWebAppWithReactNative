import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
