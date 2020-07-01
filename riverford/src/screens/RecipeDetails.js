import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

import RecipeDetailsHeader from '../components/RecipeDetailsHeader'
import RecipeIngredientsSection from '../components/RecipeIngredientsSection'
import RecipeInstructionsSection from '../components/RecipeInstructionsSection'

export default function RecipeDetails({ route, navigation }) {
    const { recipe } = route.params;
    const { scrollviewStyle, introductionText } = styles

    return (
        <ScrollView style={scrollviewStyle}>
            <RecipeDetailsHeader recipe={recipe}/>
            <Text style={introductionText}>{recipe.introduction}</Text>

            {recipe && recipe.ingredients.length > 0 &&
                <RecipeIngredientsSection ingredients={recipe.ingredients[0].ingredients}/>
            }

            {recipe && recipe.method.length > 0 &&
                <RecipeInstructionsSection methods={recipe.method}/>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollviewStyle: {
        width: "100%", 
        height: "100%", 
        backgroundColor: "white"
    },

    introductionText: {
        padding: 16,
        marginTop: 8, 
        marginBottom: 8,
        textAlign: 'left'
    }
});