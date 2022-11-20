import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//libraries
import tw from 'twrnc';

const MostrarProducto = ({producto}) => {
  return (
    <View>
      <Text style={tw`text-black text-lg`}>{producto.nombre_producto}</Text>
    </View>
  );
};

export default MostrarProducto;

const styles = StyleSheet.create({});
