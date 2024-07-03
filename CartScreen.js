// CartScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('cart').then((cart) => {
      if (cart) {
        setCart(JSON.parse(cart));
      }
    });
  }, []);

  const handleRemoveFromCart = (product) => {
    const newCart = cart.filter((item) => item.id!== product.id);
    setCart(newCart);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity style={styles.removeFromCartButton} onPress={() => handleRemoveFromCart(item)}>
              <Text style={styles.removeFromCartButtonText}>Remove from Cart</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item)=> item.id.toString()}
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
  removeFromCartButton: {
    backgroundColor: 'ed',
    padding: 10,
    borderRadius: 10,
  },
  removeFromCartButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CartScreen;