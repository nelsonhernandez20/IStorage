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
import {Button, CheckBox} from '@rneui/themed';
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
            containerStyle={{
              backgroundColor: 'transparent',
              paddingHorizontal: 0,
              marginHorizontal: 0,
            }}
          />
          <CheckBox
            title="quitar"
            checked={!check}
            onPress={() => setCheck(!check)}
            containerStyle={{
              backgroundColor: 'transparent',
              paddingHorizontal: 0,
              marginHorizontal: 0,
            }}
            textStyle={{
              marginHorizontal: 0,
              paddingHorizontal: 0,
              textAlign: 'left',
            }}
          />
          <TextInput
            value={cambiarCantidad}
            style={[styles.input]}
            keyboardType="numeric"
            placeholder="Cantidad"
            placeholderTextColor="#969696"
            onChange={e => setcambiarCantidad(e.nativeEvent.text)}
          />
          <Button
            title="Dark"
            buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{color: 'white', marginHorizontal: 20}}
          />
        </View>
      </Collapsible>
    </Pressable>
  );
};

export default MostrarProducto;

const styles = StyleSheet.create({
  input: {
    marginTop: 8,
    height: 40,
    color: '#1e3040',
    width: '20%',
    marginBottom: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#1e3040',
  },
});
