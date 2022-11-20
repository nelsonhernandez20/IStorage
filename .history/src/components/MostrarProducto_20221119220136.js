import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Vibration,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

//libraries
import tw from 'twrnc';
import {CheckBox} from '@rneui/themed';
import Collapsible from 'react-native-collapsible';

const MostrarProducto = ({producto}) => {
  const [unfolded, setUnfolded] = useState(false);
  const [check, setCheck] = useState(false);
  const [cambiarCantidad, setcambiarCantidad] = useState(null);
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
        <View style={tw`flex-row`}>
          <CheckBox
            title="agregar"
            checked={check}
            onPress={() => setCheck(!check)}
            containerStyle={{backgroundColor: 'transparent'}}
          />
          <CheckBox
            title="quitar"
            checked={!check}
            onPress={() => setCheck(!check)}
            containerStyle={{backgroundColor: 'transparent'}}
          />
          <TextInput
            value={cambiarCantidad}
            style={[styles.input]}
            placeholder="Cantidad"
            placeholderTextColor="#969696"
            onChange={e => setcambiarCantidad(e.nativeEvent.text)}
          />
        </View>
      </Collapsible>
    </Pressable>
  );
};

export default MostrarProducto;

const styles = StyleSheet.create({
  input: {
    height: 40,
    color: '#1e3040',
    width: '20%',
    marginBottom: 2,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#1e3040',
  },
});
