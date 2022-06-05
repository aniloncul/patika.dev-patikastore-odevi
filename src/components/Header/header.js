import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './header_style'
export default function Header() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>PATIKA STORE</Text>
    </SafeAreaView>
  );
}
