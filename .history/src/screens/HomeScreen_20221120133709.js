/* eslint-disable react-hooks/exhaustive-deps */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

//libraries
import {openDatabase} from 'react-native-sqlite-storage';
import tw from 'twrnc';
import MostrarProducto from '../components/MostrarProducto';

const HomeScreen = ({funcionCambiar, estado}) => {
  const db = openDatabase({
    name: 'starPlast',
  });

  const [productos, setProductos] = useState([]);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS "productos" (
	"id_producto"	INTEGER NOT NULL,
	"nombre_producto"	TEXT,
	"cantidad_inicial"	INTEGER,
	"cantidad_total"	INTEGER,
	"fecha"	TEXT,
	PRIMARY KEY("id_producto" AUTOINCREMENT)
);`,
        [],
        (sql: SQLTransaction, res: SQLResultSet) => {
          console.log('table created successfully');
        },
        error => {
          console.log('error on creating table' + error.message);
        },
      );
    });
  };

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
    createTables();
    selectMessages();
  }, []);

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
              <MostrarProducto
                key={index}
                producto={producto}
                funcionCambiar={funcionCambiar}
                estado={estado}
              />
            </>
          ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
