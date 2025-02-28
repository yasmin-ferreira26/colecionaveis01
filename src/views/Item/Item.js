import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloItem from './estiloItem';

function Item({ navigation }){

    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloItem.container}>
            <View style={estiloItem.borda}>

                <Text style={estiloItem.texto}>Item</Text>

                <TouchableOpacity style={estiloItem.botaoContainer} onPress={voltar}>
                    <Text style={estiloItem.botaoTexto}>voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Item;