import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const ProductScreen = () => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');

  const register = () => {
    console.log(nombre);
    console.log(cantidad);
    setNombre('');
    setCantidad('');
  };

  return (
    <View>
      <TextInput
        value={nombre}
        style={[styles.input]}
        placeholder="Nombre del Producto"
        placeholderTextColor="#969696"
        onChange={e => setNombre(e.nativeEvent.text)}
      />
      <TextInput
        value={cantidad}
        style={[styles.input]}
        keyboardType="numeric"
        placeholder="Cantidad del Producto"
        placeholderTextColor="#969696"
        onChange={e => setCantidad(e.nativeEvent.text)}
      />
      <TouchableOpacity onPress={register}>
        <Text style={styles.btnText}>Registrate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  input: {
    height: 50,
    color: '#fff',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#1e3040',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#1e3040',
  },
  btnText: {
    color: '#1e3040',
    fontSize: 18,
  },
});
