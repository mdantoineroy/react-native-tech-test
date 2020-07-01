import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default function SearchView(props) {
    let total_time = props.recipe.total_time.split('PT')[1] || "N/A"
    let imageSrc = props.recipe.media.length > 0 ? { uri: props.recipe.media[0].uri } : require('../images/nofood.jpg')
    const { container, touchableContainer, logo, detailsContainer, iconsRow, row, textToIcon } = styles

    return (
        <View style={container}>
            <TouchableOpacity onPress={() => props.onPress(props.recipe)} style={touchableContainer}>
                <Image
                    style={logo}
                    source={imageSrc}
                />

                <View style={detailsContainer}>
                    <Text>{props.recipe.name}</Text>

                    <View style={iconsRow}>
                        <View style={row}>
                            <Icon name="clock" size={20} color="black"/>
                            <Text style={textToIcon}>{total_time.toLowerCase()}</Text>
                        </View>

                        <View style={row}>
                            <Icon name="pie-chart" size={20} color="black"/>
                            <Text style={textToIcon}>serve(s) {props.recipe.serves}</Text>
                        </View>
                    </View>
                </View>
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5, 
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 8,
        margin: 8,
        flexDirection: 'row',
        backgroundColor: 'white'
    },

    touchableContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },

    detailsContainer: {
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start'
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    iconsRow: {
        flex: 1,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    textToIcon: {
        marginStart: 8
    },

    logo: {
        width: 70,
        height: 70, 
        borderWidth: 1,
        borderRadius: 90,
        marginEnd: 16,
    }
});