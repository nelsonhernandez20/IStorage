import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//libraries
import tw from 'twrnc';
import {CheckBox} from '@rneui/themed';

const MostrarProducto = ({producto}) => {
  return (
    <View style={tw`flex-row`}>
      <Text style={tw`text-black text-lg mx-2`}>
        {producto.nombre_producto}
      </Text>
      <Text style={tw`text-black text-lg mx-2`}>
        {producto.cantidad_inicial}
      </Text>
      <Text style={tw`text-black text-lg mx-2`}>{producto.cantidad_total}</Text>
      <Text style={tw`text-black text-lg mx-2`}>{producto.fecha}</Text>
    </View>
  );
};

export default MostrarProducto;

const styles = StyleSheet.create({});
