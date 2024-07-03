//CheckoutScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const OpenFashion = require('./assets/Logo.png');
const SearchIcon = require('./assets/Search.png');
const CrossCircleIcon = require('./assets/remove.png');
const OfficeWearImage = require('./assets/dress1.png');
const LamereiImage = require('./assets/dress4.png');
const ChurchWearImage = require('./assets/dress3.png');

const CheckoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={OpenFashion} style={styles.openFashionLogo} />
        <Text style={styles.checkoutText}>CHECKOUT</Text>
        <Image source={SearchIcon} style={styles.searchIcon} />
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Image source={OfficeWearImage} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>OFFICE WEAR</Text>
            <Text style={styles.itemDescription}>Office wear for you office</Text>
            <Text style={styles.itemPrice}>$120</Text>
            <TouchableOpacity style={styles.removeButton}>
              <Image source={CrossCircleIcon} style={styles.removeIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Image source={LamereiImage} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>LAMEREI</Text>
            <Text style={styles.itemDescription}>Recycle Boucle Knit Cardigan Pink</Text>
            <Text style={styles.itemPrice}>$120</Text>
            <TouchableOpacity style={styles.removeButton}>
              <Image source={CrossCircleIcon} style={styles.removeIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Image source={ChurchWearImage} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>CHURCH WEAR</Text>
            <Text style={styles.itemDescription}>Recycle Boucle Knit Cardigan Pink</Text>
            <Text style={styles.itemPrice}>$120</Text>
            <TouchableOpacity style={styles.removeButton}>
              <Image source={CrossCircleIcon} style={styles.removeIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>EST. TOTAL</Text>
        <Text style={styles.totalValue}>$240</Text>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    bottom: -400,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  openFashionLogo: {
    width: 90,
    height: 40,
    right: -100,
    top: -30,
    resizeMode: 'contain',
  },
  checkoutText: {
    fontSize: 19,
    bottom: -40,
    width: 100,
    right: -10,
    top: 20,
    
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 'auto',
  },
  itemContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  itemImage: {
    width: 80,
    height: 130,
    resizeMode: 'cover',
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  removeButton: {
    padding: 5,
    borderRadius: 50,
  },
  removeIcon: {
    width: 15,
    height: 15,
    right: -190,
    resizeMode: 'contain',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: 'black',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;