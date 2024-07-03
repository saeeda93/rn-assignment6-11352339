//App.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckoutScreen from './CheckoutScreen';

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const savedCart = await AsyncStorage.getItem('cart');
      if (savedCart !== null) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart", error);
    }
  };

  const saveCart = async (updatedCart) => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    } catch (error) {
      console.error("Failed to save cart", error);
    }
  };

  const addItemToCart = (item) => {
    const updatedCart = [...cart, item];
    saveCart(updatedCart);
    Alert.alert("Item added to cart!");
  };

  const removeItemFromCart = (item) => {
    const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
    saveCart(updatedCart);
  };

  const products = [
    { id: 1, name: 'Office Wear', description: 'reversible angora cardigan', price: 120, image: require('./assets/dress1.png') },
    { id: 2, name: 'Black', description: 'reversible angora cardigan', price: 120, image: require('./assets/dress2.png') },
    { id: 3, name: 'Church Wear', description: 'reversible angora cardigan', price: 120, image: require('./assets/dress3.png') },
    { id: 4, name: 'Lamerei', description: 'reversible angora cardigan', price: 120, image: require('./assets/dress4.png') },
    { id: 5, name: '21WN', description: 'reversible angora cardigan', price: 120, image: require('./assets/dress5.png') },
    { id: 6, name: 'Lopo', description: 'reversible angora cardigan', price: 120, image: require('./assets/dress6.png') },
    { id: 7, name: '21WN', description: 'reversible angora cardigan', price: 120, image: require('./assets/dress7.png') },
    { id: 8, name: 'lame', description: 'reversible angora cardigan', price: 120, image: require('./assets/dress3.png') },
  ];
  return (
    <ScrollView style={styles.content}>
      
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('./assets/Menu.png')} style={styles.icon} />
        <Image source={require('./assets/Logo.png')} style={styles.logo} />
        <View style={styles.iconContainer}>
          <Image source={require('./assets/Search.png')} style={styles.icon} />
          <Image source={require('./assets/shoppingBag.png')} style={styles.icon} />
        </View>
      </View>


      {/* New Section */}
      <View style={styles.section}>
        <Text style={styles.sectionText}>OUR STORY</Text>
        <View style={styles.iconContainer}>
          <Image source={require('./assets/Listview.png')} style={styles.iconRound} />
          <Image source={require('./assets/Filter.png')} style={styles.iconRound} />
        </View>
      </View>

      {/* Product Grid Section */}
      <View style={styles.productGrid}>
        <View style={styles.productItem}>
          <Image source={require('./assets/dress1.png')} style={styles.productImage} />
          <View style={styles.plusCircle}>
            <Image source={require('./assets/add_circle.png')} style={styles.plusIcon} />
          </View>
          <Text style={styles.productName}>Office Wear</Text>
          <Text style={styles.productName}>reversible angora cardigan</Text>
          <Text style={styles.productPrice}>$120</Text>
        </View>
        <View style={styles.productItem}>
          <Image source={require('./assets/dress2.png')} style={styles.productImage} />
          <View style={styles.plusCircle}>
            <Image source={require('./assets/add_circle.png')} style={styles.plusIcon} />
          </View>
          <Text style={styles.productName}>Black</Text>
          <Text style={styles.productName}>reversible angora cardigan</Text>
          <Text style={styles.productPrice}>$120</Text>
        </View>
        <View style={styles.productItem}>
          <Image source={require('./assets/dress3.png')} style={styles.productImage} />
          <View style={styles.plusCircle}>
            <Image source={require('./assets/add_circle.png')} style={styles.plusIcon} />
          </View>
          <Text style={styles.productName}>Church Wear</Text>
          <Text style={styles.productName}>reversible angora cardigan</Text>
          <Text style={styles.productPrice}>$120</Text>
        </View>
        <View style={styles.productItem}>
          <Image source={require('./assets/dress4.png')} style={styles.productImage} />
          <View style={styles.plusCircle}>
            <Image source={require('./assets/add_circle.png')} style={styles.plusIcon} />
          </View>
          <Text style={styles.productName}>Lamerei</Text>
          <Text style={styles.productName}>reversible angora cardigan</Text>
          <Text style={styles.productPrice}>$120</Text>
        </View>
        <View style={styles.productItem}>
          <Image source={require('./assets/dress5.png')} style={styles.productImage} />
          <View style={styles.plusCircle}>
            <Image source={require('./assets/add_circle.png')} style={styles.plusIcon} />
          </View>
          <Text style={styles.productName}>21WN</Text>
          <Text style={styles.productName}>reversible angora cardigan</Text>
          <Text style={styles.productPrice}>$120</Text>
        </View>
        <View style={styles.productItem}>
          <Image source={require('./assets/dress6.png')} style={styles.productImage} />
          <View style={styles.plusCircle}>
            <Image source={require('./assets/add_circle.png')} style={styles.plusIcon} />
          </View>
          <Text style={styles.productName}>Lopo</Text>
          <Text style={styles.productName}>reversible angora cardigan</Text>
          <Text style={styles.productPrice}>$120</Text>
        </View>
        <View style={styles.productItem}>
          <Image source={require('./assets/dress7.png')} style={styles.productImage} />
          <View style={styles.plusCircle}>
            <Image source={require('./assets/add_circle.png')} style={styles.plusIcon} />
          </View>
          <Text style={styles.productName}>21WN</Text>
          <Text style={styles.productName}>reversible angora cardigan</Text>
          <Text style={styles.productPrice}>$120</Text>
        </View>
        <View style={styles.productItem}>
          <Image source={require('./assets/dress3.png')} style={styles.productImage} />
          <View style={styles.plusCircle}>
            <Image source={require('./assets/add_circle.png')} style={styles.plusIcon} />
          </View>
          <Text style={styles.productName}>lame</Text>
          <Text style={styles.productName}>reversible angora cardigan</Text>
          <Text style={styles.productPrice}>$120</Text>
        </View>
      </View>
      
    
        <CheckoutScreen /> {/* Add the CheckoutScreen component here */}
      

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 150, // Adjust width according to your image size
    height: 60,  // Adjust height according to your image size
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 20,

  },

  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  sectionText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconRound: {
    width: 40,  // Adjust size according to your design
    height: 40, // Adjust size according to your design
    marginLeft: 10,
    borderRadius: 20, // For rounded icons
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },

  productGrid: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productItem: {
    width: '48%', // Adjust width for desired column count
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
    color: 'orange',
  },

  plusCircle: {
    position: 'absolute',
    bottom: 100,
    left: 143,
    borderRadius: 20,
    padding: 5,
    zIndex: 1, // Ensure the plus circle is on top of the image
  },
  plusIcon: {
    width: 20,
    height: 20,
    tintColor: 'black', // Adjust color as needed
  },
});

export default App;
