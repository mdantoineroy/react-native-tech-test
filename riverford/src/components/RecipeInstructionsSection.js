import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import RecipeSteps from './RecipeSteps'

export default function RecipeInstructionsSection(props) {
    const { container, textToIcon, instructionsList } = styles

    return (
        <View style={container}>
            <Text style={textToIcon}>Steps</Text>
            <View style={instructionsList}>
                {props.methods.map((method, key) => <RecipeSteps key={key} count={key + 1} steps={method.steps}/>)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        marginTop: 16,
        marginBottom: 20,
    },

    textToIcon: {
        marginStart: 8,
        marginBottom: 16,
        fontSize: 25,
        fontWeight: 'bold',
    },

    instructionsList: {
        width: '90%',
        alignSelf: 'center',
    }
});