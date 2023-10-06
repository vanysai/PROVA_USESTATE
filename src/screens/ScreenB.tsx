import React from 'react';
import { View, StyleSheet, Button, FlatList, TextInput} from 'react-native';


export function ScreenB() {
    const items = ["itemA", "itemB", "itemC"]
    const [nome, setNome] = useState ("")
        function handleName (text) {
          setNome (text)
    )
}
const renderItem = ({item}) => (
    <Text> {item} </Text>

  ) return (
    <View style={styles.container}>
        <FlatList
        data = {items}
        renderItem = {renderItem}
        />
        <TextInput
          style = {styles.input}
          id = 'nome'
          value = {nome}
          onChangeText = {(text) => handleName (text) }
        />
        <Text> {nome} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center"
    }
})