import React, { useState } from 'react';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Switch,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';

import Card from './app/components/Card';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  return <ListingEditScreen></ListingEditScreen>;
}

const styles = StyleSheet.create({});
