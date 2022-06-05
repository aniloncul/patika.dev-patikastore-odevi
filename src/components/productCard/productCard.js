import React from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import styles from './productCard_style';

export default function Card({product}) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: product.imgURL}} />
        <Text style={styles.title}>{product.title} </Text>
        <Text style={styles.price}>{product.price} </Text>
        <Text style={styles.inStock}> {product.inStock ? '' : 'Stokta Yok'}</Text>
      </View>
    </View>
  );
};

