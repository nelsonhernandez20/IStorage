/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

//libraries
import {openDatabase} from 'react-native-sqlite-storage';

const HomeScreen = () => {
  const db = openDatabase({
    name: 'starPlast',
  });

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS "productos" (
	"id_producto"	INTEGER NOT NULL,
	"nombre_producto"	TEXT,
	"cantidad_inicial"	TEXT,
	"cantidad_total"	TEXT,
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

  useEffect(() => {
    createTables();
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
