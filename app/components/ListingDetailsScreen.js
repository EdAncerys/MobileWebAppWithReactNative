import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

export default function ListingDetailsScreen() {
  return (
    <View style={styles.listingContainer}>
      <Image style={styles.image} source={require('../assets/bike.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Bike for Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  detailsContainer: {
    padding: 20,
  },
});
