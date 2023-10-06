import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import { Cadastro } from '../screens/ScreenB';
import { Agendamento } from '../screens/ScreenC';


export function Home() {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/home.png')}
        style={styles.imagem}/>
          <Text style={styles.title}>Bem-Vindo a tela Home</Text>
          <TouchableOpacity  onPress={() => navigation.navigate("Cadastro")} style={styles.button}>
              <Text style={styles.buttonText}>
                  Agendamento do paciente
              </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("screenC")}  style={styles.button}>
              <Text style={styles.buttonText}>
                  Visualizar ficha do paciente
              </Text>
          </TouchableOpacity>
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
    fontSize:24,
    fontWeight:'bold',
  },
  button:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center",
    width:200,
    height:80,
    backgroundColor:'pink',
    borderRadius:20,
     marginTop:25
  },
  buttonText:{
    fontWeight:'700',
    color:'white'
  },
  imagem:{
    width:1000,
    height:180,
    resizeMode:"contain",
    marginBottom:100
  }

});