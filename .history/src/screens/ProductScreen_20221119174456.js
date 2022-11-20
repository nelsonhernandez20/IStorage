import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const ProductScreen = () => {
  const [formData, setFormData] = useState(defaultValue());

  function defaultValue() {
    return {
      producto: '',
      cantidad: '',
    };
  }

  return (
    <View>
      <TextInput
        style={[styles.input]}
        placeholder="Nombre del Producto"
        placeholderTextColor="#969696"
        onChange={e => setFormData({...formData, producto: e.nativeEvent.text})}
      />
      <TextInput
        style={[styles.input]}
        placeholder="Cantidad del Producto"
        placeholderTextColor="#969696"
        onChange={e => setFormData({...formData, cantidad: e.nativeEvent.text})}
      />
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
});
