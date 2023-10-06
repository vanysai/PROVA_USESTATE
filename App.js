import React, { useState } from 'react';
import { View, FlatList, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [data, setData] = useState([
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    // Adicione mais itens conforme necessário
  ]);

  const [inputValue, setInputValue] = useState('');

  const renderItem = ({ item }) => (
    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.title}</Text>
    </View>
  );

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      // Adiciona um novo item à lista
      setData([...data, { id: (data.length + 1).toString(), title: inputValue }]);
      // Limpa o valor do TextInput
      setInputValue('');
    }
  };

  return (
    <View style={{ flex: 1, paddingTop: 22 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={{ padding: 16 }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 8, paddingLeft: 8 }}
          placeholder="Digite um novo item..."
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <Button title="Adicionar Item" onPress={handleAddItem} />
      </View>
    </View>
  );
};

export default App;
