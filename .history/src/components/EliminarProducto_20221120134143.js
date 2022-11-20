/* eslint-disable quotes */
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

const EliminarProducto = ({producto, funcionCambiar, estado}) => {
  const db = openDatabase({
    name: 'starPlast',
  });
  const [unfolded, setUnfolded] = useState(false);

  const eliminarProducto = () => {
    deleteProduct();
  };

  const deleteProduct = total => {
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM productos where id_producto=? `,
        [producto.id_producto],
        (sqlTxn: SQLTransaction, res: SQLResultSet) => {
          console.log('se elimino un producto de la tabla');
          funcionCambiar(!estado);
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
          <Button
            title="Eliminar"
            buttonStyle={{
              backgroundColor: 'rgba(39, 39, 39, 1)',
              borderRadius: 10,
            }}
            containerStyle={{
              width: 80,
              marginHorizontal: 3,
              marginVertical: 10,
            }}
            onPress={() => eliminarProducto()}
            titleStyle={{color: 'white', marginHorizontal: 1}}
          />
        </View>
      </Collapsible>
    </Pressable>
  );
};

export default EliminarProducto;

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
