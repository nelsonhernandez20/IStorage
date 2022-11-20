import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import DeleteProductScreen from '../screens/DeleteProductScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={() => <HomeScreen data={'your_data'} />}
      />
      <Drawer.Screen
        name="ProductScreen"
        component={() => <ProductScreen data={'your_data'} />}
      />
      <Drawer.Screen
        name="Delete Product"
        component={() => <DeleteProductScreen data={'your_data'} />}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
