import React from 'react';
import { View, StyleSheet, Button, FlatList, Text} from 'react-native';


export function ScreenB() {
    const items = ["itemA", "itemB", "itemC"]
    const renderItem = ({item}) => (
        <text>{item}</text>
    )
  return (
    <View style={styles.container}>
        <FlatList
        data = {items}
        renderItem = {renderItem}
        />
        <Text input
        <button 
        title='Voltar para A' 
        color="#fff">

        </button>
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