import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MostrarProducto = ({producto}) => {
  return (
    <View>
      <Text>{producto.nombre_producto}</Text>
    </View>
  );
};

export default MostrarProducto;

const styles = StyleSheet.create({});
