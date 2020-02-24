import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

const SliderComponent = ({source}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={source} />
    </View>
  );
};

export default SliderComponent;
