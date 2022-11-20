/* eslint-disable react-hooks/exhaustive-deps */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

//libraries
import {openDatabase} from 'react-native-sqlite-storage';
import tw from 'twrnc';
import MostrarProducto from '../components/MostrarProducto';
import EliminarProducto from '../components/EliminarProducto';

const DeleteProductScreen = () => {
  const db = openDatabase({
    name: 'starPlast',
  });

  const [productos, setProductos] = useState([]);
  const [cambiarEstado, setCambiarEstado] = useState(false);

  const selectMessages = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM productos`,
        [],
        (sqlTxn: SQLTransaction, res) => {
          console.log('Productos mostrados');
          let len = res.rows.length;
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({
                id_producto: item.id_producto,
                nombre_producto: item.nombre_producto,
                cantidad_inicial: item.cantidad_inicial,
                cantidad_total: item.cantidad_total,
                fecha: item.fecha,
              });
            }
            setProductos(results);
          }
        },
        error => {
          console.log(error.mesage);
        },
      );
    });
  };

  useEffect(() => {
    selectMessages();
  }, []);

  useEffect(() => {
    selectMessages();
  }, [cambiarEstado]);

  return (
    <View>
      <Text style={tw`text-black text-2xl text-center my-3`}>Productos</Text>
      <View style={tw`flex-row`}>
        <Text style={tw`text-black mx-2`}>Producto</Text>
        <Text style={tw`text-black mx-2`}>Cantidad inicial</Text>
        <Text style={tw`text-black mx-2`}>Cantidad Total</Text>
        <Text style={tw`text-black mx-2`}>Fecha</Text>
      </View>
      <ScrollView>
        {productos.length > 0 &&
          productos.map((producto, index) => (
            <>
              <EliminarProducto
                key={index}
                producto={producto}
                cambiarEstado={cambiarEstado}
                funcionCambiarEstado={setCambiarEstado}
              />
            </>
          ))}
      </ScrollView>
    </View>
  );
};

export default DeleteProductScreen;

const styles = StyleSheet.create({});
