import {StyleSheet, Text, View, Pressable, Vibration} from 'react-native';
import React, {useState} from 'react';

//libraries
import tw from 'twrnc';
import {CheckBox} from '@rneui/themed';
import Collapsible from 'react-native-collapsible';

const MostrarProducto = ({producto}) => {
  const [unfolded, setUnfolded] = useState(false);
  const [check, setCheck] = useState(false);
  return (
    <Pressable
      onPress={() => {
        Vibration.vibrate();
        setUnfolded(!unfolded);
      }}>
      <View style={tw`flex-row`}>
        <Text style={tw`text-black text-lg mx-2`}>
          {producto.nombre_producto}
        </Text>
        <Text style={tw`text-black text-lg mx-2`}>
          {producto.cantidad_inicial}
        </Text>
        <Text style={tw`text-black text-lg mx-2`}>
          {producto.cantidad_total}
        </Text>
        <Text style={tw`text-black text-lg mx-2`}>{producto.fecha}</Text>
      </View>
      <Collapsible collapsed={!unfolded}>
        <CheckBox
          title="Click Here"
          checked={check}
          onPress={() => setCheck(!check)}
        />
      </Collapsible>
    </Pressable>
  );
};

export default MostrarProducto;

const styles = StyleSheet.create({});
