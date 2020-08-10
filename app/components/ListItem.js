import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import colors from '../config/colors';

export default function ListItem({ title, subTitle, image }) {
  return (
    <TouchableHighlight
      underlayColor={colors.lightGray}
      onPress={() => console.log()}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.gray,
  },
  title: {
    fontWeight: '500',
  },
});
