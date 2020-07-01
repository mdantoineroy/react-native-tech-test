import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import RecipeInfo from '../components/RecipeInfo'

export default function RecipeDetailsHeader(props) {
    const { container, logo, title } = styles
    let total_time = props.recipe.total_time.split('PT')[1] || "N/A"
    let imageSrc = props.recipe.media.length > 0 ? { uri: props.recipe.media[0].uri } : require('../images/nofood.jpg')

    return (
        <View style={container}>
            <Text style={title}>{props.recipe.name}</Text>

            <Image
                style={logo}
                source={imageSrc}
            />

            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <RecipeInfo iconName="clock" text={total_time.toLowerCase()}/>
                <RecipeInfo iconName="pie-chart" text={"serve(s) " + props.recipe.serves}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    title: {
        fontWeight: 'bold', 
        fontSize: 20, 
        margin: 16
    },

    logo: {
        width: 150,
        height: 150, 
        borderWidth: 1,
        borderRadius: 90,
        marginBottom: 16,
    }
});