import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//libraries
import tw from 'twrnc';

const MostrarProducto = ({producto}) => {
  return (
    <View style={tw`flex-row`}>
      <Text style={tw`text-black text-lg mx-3`}>
        {producto.nombre_producto}
      </Text>
      <Text style={tw`text-black text-lg mx-3`}>
        {producto.cantidad_inicial}
      </Text>
    </View>
  );
};

export default MostrarProducto;

const styles = StyleSheet.create({});
