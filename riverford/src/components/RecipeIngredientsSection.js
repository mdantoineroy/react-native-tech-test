import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RecipeIngredientsSection(props) {
    const { container, textToIcon, ingredientList } = styles

    return (
        <View style={container}>
            <Text style={textToIcon}>Ingredients</Text>
            <View style={ingredientList}>
                {/* map through the list of ingredients and renders a Text tag with a bullet point */}
                {props.ingredients.map((prop, key) => <Text key={key}>{`\u2022 ${prop}`}</Text> )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },

    textToIcon: {
        marginStart: 8,
        marginBottom: 16,
        fontSize: 25,
        fontWeight: 'bold',
    },

    ingredientList: {
        flex: 1,
        width: '90%',
        alignSelf: 'center'
    }
});