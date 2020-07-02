import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import RecipeInfo from './RecipeInfo'

export default function SearchView(props) {
    const { container, touchableContainer, logo, detailsContainer, iconsRow, row, textToIcon } = styles
    //format total_time value and set the variable to N/A if total_time is empty
    let total_time = props.recipe.total_time.split('PT')[1] || "N/A"
    //init which image the component is going to render, either the recipe contains a media (pick the first one from the array) or display the default picture
    let imageSrc = props.recipe.media.length > 0 ? { uri: props.recipe.media[0].uri } : require('../images/nofood.jpg')

    return (
        <View style={container}>
            <TouchableOpacity onPress={() => props.onPress(props.recipe)} style={touchableContainer}>
                {/* render the image from the imageSrc */}
                <Image
                    style={logo}
                    source={imageSrc}
                />

                <View style={detailsContainer}>
                    <Text>{props.recipe.name}</Text>

                    {/* display the total_time and number of serves with the icons */}
                    <View style={iconsRow}>
                        <RecipeInfo iconName="clock" text={total_time.toLowerCase()}/>
                        <RecipeInfo iconName="pie-chart" text={"serve(s) " + props.recipe.serves}/>
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