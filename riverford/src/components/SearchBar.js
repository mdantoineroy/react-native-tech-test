import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { MaterialIndicator } from 'react-native-indicators';

export default function SearchBar(props) {
    const { container, inputStyle } = styles

    return (
        <View style={container}>
            <TextInput
                style={inputStyle}
                onChangeText={text => props.onChangeText(text)}
                placeholder={'Search recipe'}
                value={props.searchText}
            /> 
                
            {props.loading && 
                <MaterialIndicator color='green' size={30}/>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        marginTop: 8
    },

    inputStyle: {
        width: "90%",
        height: 40,
        padding: 5
    }
});