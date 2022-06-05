import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

export default StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    backgroundColor: 'lavender',
    borderRadius: 10,

  },
  image: {
    marginLeft: 10,
    marginRight: 3,
    marginTop: 10,
    marginBottom: 3,
    borderRadius: 15,
    width: '%100',
    height: undefined,
    aspectRatio: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'left',
    paddingLeft: 20,
  },
  price: {
    color: 'green',
    fontSize: 19,
    paddingLeft: 20,
    marginTop: 6,
  },
  input: {
    backgroundColor: 'gainsboro',
    fontSize: 18,
    padding: 13,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
  },
  inStock: {
    paddingLeft: 20,
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'red',
  },
  inputcon: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  inputcon: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
});
