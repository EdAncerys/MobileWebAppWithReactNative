import React from 'react';
import { Text, View, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen from './app/components/Screen';

const Tweets = ({}) => {
  return (
    <Screen>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    </Screen>
  );
};

const TweetDetails = ({ navigation, route }) => {
  return (
    <Screen>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    </Screen>
  );
};

function HomeScreen() {
  return (
    <Screen style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </Screen>
  );
}

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
  );
};

const Account = () => {
  return (
    <Screen style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Account</Text>
    </Screen>
  );
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Tweets} />
      <Tab.Screen name="Details" component={TweetDetails} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default function App({ route }) {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={StackNavigator} />
      </Stack.Navigator> */}

      <TabNavigator />
    </NavigationContainer>
  );
}
