import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default function RecipeInfo(props) {
    const { row, textToIcon } = styles

    return (
        <View style={row}>
            <Icon name={props.iconName} size={20} color="black"/>
            <Text style={textToIcon}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    textToIcon: {
        marginStart: 8
    },

});