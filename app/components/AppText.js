import React from 'react';
import { Text } from 'react-native';

import colors from '../config/colors';
import defaultStyles from '../config/Styles';

export default function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}
