import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { Home } from '../screens/ScreenA';

export function Agendamento() {

    const[nome, setNome] = React.useState('')
    const[cpf, setCpf] = React.useState('')
    const[dataNasc, setDataNasc] = React.useState('')
    const[endereco, setEndereco] = React.useState('')
    const[idade, setIdade] = React.useState('')
    const[pagamento, setPagamento] = React.useState('')
    const[valor, setValor] = React.useState(0)


    const dados = [
      { label: 'Nome', value: nome },
      { label: 'CPF', value: cpf },
      { label: 'Data de Nascimento', value: dataNasc },
      { label: 'Endereço', value: endereco },
      { label: 'Idade', value: idade },
      { label: 'Valor', value: valor.toString() },
      { label: 'Pagamento', value: valor.toString()}
    ];

  function handleImpress(){
    console.log(nome);
    console.log(cpf);
    console.log(dataNasc);
    console.log(endereco);
    console.log(idade);
    console.log(valor);
    console.log(pagamento);
    

  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Digite seus dados para agendar a consulta</Text>

      <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder=' nome completo'></TextInput>
      <TextInput style={styles.input} value={cpf} onChangeText={setCpf} placeholder=' seu cpf'></TextInput>
      <TextInput style={styles.input} value={dataNasc} onChangeText={setDataNasc} placeholder=' data de nascimento'></TextInput>
      <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} placeholder=' endereço'></TextInput>
      <TextInput style={styles.input} value={idade} onChangeText={setIdade} placeholder=' idade'></TextInput>
      <TextInput style={styles.input} value={valor} onChangeText={setValor} keyboardType='numeric' placeholder='valor'></TextInput>
      <TextInput style={styles.input} value={pagamento} onChangeText={setPagamento} keyboardType='text' placeholder='pagamento'></TextInput>

      <TouchableOpacity style={styles.button} onPress={handleImpress}><Text style={styles.buttonText}>Cadastrar</Text></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe',
        position: 'relative',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      },
      input:{
        width:230,
        height:40,
        marginBottom:20,
        borderRadius:5,
        borderWidth:2,
        borderColor:'pink'
    
      },
      title:{
        fontSize:18,
        fontWeight:'600',
        marginBottom:25,
      },
      button:{
        width:150,
        height:70,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'pink',
        borderRadius:20,
        marginTop:20
      },
      buttonText:{
        fontWeight:'700',
        color:'white',
     
      },
})