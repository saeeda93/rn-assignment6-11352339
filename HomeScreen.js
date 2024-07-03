// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Office Wear', price: 120, image: require('./assets/dress1.png') },
    { id: 2, name: 'Black', price: 120, image: require('./assets/dress2.png') },
    { id: 3, name: 'Church Wear', price: 120, image: require('./assets/dress3.png') },
    { id: 4, name: 'Lamerei', price: 120, image: require('./assets/dress4.png') },
    { id: 5, name: '21WN', price: 120, image: require('./assets/dress5.png') },
    { id: 6, name: 'Lopo', price: 120, image: require('./assets/dress6.png') },
    { id: 7, name: '21WN', price: 120, image: require('./assets/dress7.png') },
  ]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('cart').then((cart) => {
      if (cart) {
        setCart(JSON.parse(cart));
      }
    });
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleRemoveFromCart = (product) => {
    const newCart = cart.filter((item) => item.id!== product.id);
    setCart(newCart);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(item)}>
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  productItem: {
    width: '48%',
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
  addToCartButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;