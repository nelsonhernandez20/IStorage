import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import DeleteProductScreen from '../screens/DeleteProductScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="ProductScreen" component={ProductScreen} />
      <Drawer.Screen name="Delete Product" component={DeleteProductScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
