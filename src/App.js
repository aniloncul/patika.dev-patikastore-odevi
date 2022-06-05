import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import products from './ProductInfo.json';
import Card_component from './components/productCard';
import SearchBox from './components/searchbox/Searchbox';
import Header from './components/Header/header';

const App = () => {
  const renderitem = ({item}) => <Card_component product={item} />;
  return (
    <SafeAreaView>
      <Header />
      <SearchBox />
      <View>
        <FlatList
          data={products}
          renderItem={renderitem}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
