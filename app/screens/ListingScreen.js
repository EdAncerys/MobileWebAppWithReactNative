import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Bike for sale',
    price: '$100',
    image: require('../assets/bike.jpg'),
  },
  {
    id: 2,
    title: 'Chair in Great condition',
    price: '$100',
    image: require('../assets/chair.jpg'),
  },
];

export default function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.subTitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.lightGray,
  },
});
