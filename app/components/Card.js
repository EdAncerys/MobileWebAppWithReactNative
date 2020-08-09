import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  detailsContainer: {
    padding: 20,
  },
});
