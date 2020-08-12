import React from 'react';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';

export default function App() {
  return <ListingScreen></ListingScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
