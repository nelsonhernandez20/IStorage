/* eslint-disable react-native/no-inline-styles */
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
import {openDatabase} from 'react-native-sqlite-storage';

const MostrarProducto = ({producto}) => {
  const db = openDatabase({
    name: 'starPlast',
  });
  const [unfolded, setUnfolded] = useState(false);
  const [checkAgregar, setCheckAgregar] = useState(false);
  const [checkQuitar, setCheckQuitar] = useState(false);
  const [cambiarCantidad, setcambiarCantidad] = useState('');

  const agregar = () => {
    setCheckAgregar(true);
    setCheckQuitar(false);
  };

  const quitar = () => {
    setCheckAgregar(false);
    setCheckQuitar(true);
  };

  const acutalizarProducto = () => {
    if (checkAgregar && cambiarCantidad !== '') {
      let valorAgregar = parseInt(cambiarCantidad);

      let total = valorAgregar + producto.cantidad_total;
      uploadProduct(total);
    }
    if (checkQuitar && cambiarCantidad !== '') {
      let valorAgregar = parseInt(cambiarCantidad);

      let total = producto.cantidad_total - valorAgregar;
      uploadProduct(total);
    }
  };

  const uploadProduct = total => {
    db.transaction(txn => {
      txn.executeSql(
        `UPDATE productos set nombre_producto=?,cantidad_inicial=?,cantidad_total=?,fecha=? where id_producto=? `,
        [
          producto.nombre_producto,
          producto.cantidad_inicial,
          total,
          new Date(),
          producto.id_producto,
        ],
        (sqlTxn: SQLTransaction, res: SQLResultSet) => {
          console.log('tabla aCtualizada');
          setcambiarCantidad('');
        },
        error => {
          console.log('error' + error.message);
        },
      );
    });
  };

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
          <View style={tw`flex-row w-[50%]`}>
            <CheckBox
              checked={checkAgregar}
              onPress={() => agregar()}
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
            <Text style={tw`text-black mt-5 text-left`}>Agregar</Text>
            <CheckBox
              checked={checkQuitar}
              onPress={() => quitar()}
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
            <Text style={tw`text-black mt-5 text-left`}>Quitar</Text>
          </View>
          <TextInput
            value={cambiarCantidad}
            style={[styles.input]}
            keyboardType="numeric"
            placeholder="Cantidad"
            placeholderTextColor="#969696"
            onChange={e => setcambiarCantidad(e.nativeEvent.text)}
          />
          <Button
            title="Guardar"
            buttonStyle={{
              backgroundColor: 'rgba(39, 39, 39, 1)',
              borderRadius: 10,
            }}
            containerStyle={{
              width: 80,
              marginHorizontal: 3,
              marginVertical: 10,
            }}
            onPress={() => acutalizarProducto()}
            titleStyle={{color: 'white', marginHorizontal: 1}}
          />
        </View>
      </Collapsible>
    </Pressable>
  );
};

export default MostrarProducto;

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
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
