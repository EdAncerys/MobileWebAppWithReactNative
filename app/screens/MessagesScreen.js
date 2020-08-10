import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, Platform } from 'react-native';
import ListItem from '../components/ListItem';
import Constant from 'expo-constants';

const messages = [
  {
    id: 1,
    title: 'Title 1',
    subTitle: 'Description 1',
    image: require('../assets/logo-red.png'),
  },
  {
    id: 2,
    title: 'Title 2',
    subTitle: 'Description 2',
    image: require('../assets/logo-red.png'),
  },
];

export default function MessagesScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constant.statusBarHeight,
  },
});
