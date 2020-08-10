import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';

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
    <Screen>
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
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
