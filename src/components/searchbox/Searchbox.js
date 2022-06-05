import React from 'react';
import {View, TextInput} from 'react-native';
import styles from '../productCard/productCard_style';

const SearchBox = () => {
  return (
    <View style={styles.inputcon}> 
      <TextInput style={styles.input} placeholder="Ara.." />
    </View>
  );
};

export default SearchBox;
