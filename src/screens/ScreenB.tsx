import React from 'react';
import { View, Text, FlatList, StyleSheet, Image} from 'react-native';
import { Home } from '../screens/ScreenA';

const nomes = ['Enzo Batista', '23333333390', '24/09/2005', 'rua cadivali', '97',
]

export function Cadastro() {
  return (
    <View style={styles.container}>

       <Image source={require('../../assets/home.png')}
        style={styles.imagem}/>

      <Text style={styles.title}>Dados do agendamento da consulta</Text>

      <FlatList
        data={nomes}
        renderItem={({ item }) => (
          <View style={styles.nomeView}>
            <Text style={styles.nomeItem}>Dados: {item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7eee9',
    position: 'relative',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    fontSize:16,
    fontWeight: 'bold',
    padding: 50
  },
  imagem:{
    width:650,
    height:150,
    resizeMode:"contain",
    margin:50
  },
  nomeItem: {
    fontWeight: '500'
  }

});
