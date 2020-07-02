import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RecipeInstructionsSection(props) {
    const { container, instructionNumber, instructionText, instructionContainer } = styles

    return (
        <View style={container}>
            <Text style={instructionNumber}>{props.count}.</Text>
            <View style={instructionContainer}>
                {/* map through the list of steps from the recipe */}
                {props.steps.map((step, stepKey) => <Text key={stepKey} style={instructionText}>{step}</Text> )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },

    instructionNumber: {
        fontWeight: 'bold'
    },

    instructionContainer: {
        flex: 1, 
        marginStart: 8
    },

    instructionText: {
        flex: 1,
        alignSelf: 'flex-start',
        textAlign: 'left',
        marginBottom: 8
    }
});