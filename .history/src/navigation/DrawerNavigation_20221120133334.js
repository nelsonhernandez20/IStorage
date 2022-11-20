import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import DeleteProductScreen from '../screens/DeleteProductScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigation({funcionCambiar, estado}) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={() => (
          <HomeScreen funcionCambiar={funcionCambiar} estado={estado} />
        )}
      />
      <Drawer.Screen
        name="ProductScreen"
        component={() => (
          <ProductScreen funcionCambiar={funcionCambiar} estado={estado} />
        )}
      />
      <Drawer.Screen
        name="Delete Product"
        component={() => (
          <DeleteProductScreen
            funcionCambiar={funcionCambiar}
            estado={estado}
          />
        )}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
