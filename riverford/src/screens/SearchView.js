import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Platform } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { useSelector, useDispatch } from 'react-redux'

import { FETCH_RECIPES } from '../network/recipe_search'
import { processAddRecipe } from '../actions/recipe';
import RecipeRow from '../components/RecipeRow'
import SearchBar from '../components/SearchBar'

export default function SearchView({navigation}) {
    const recipes = useSelector(state => state)
    const [searchText, setSearchText] = useState("")
    const dispatch = useDispatch()
    const { page, containerDefaultText, flatlist, textToIcon } = styles
    const {data, error, loading} = useQuery(FETCH_RECIPES, 
        { variables: { searchText } }
    );

    const showDetails = recipe => {
        processAddRecipe(dispatch, recipes.recipes, recipe)
        navigation.navigate("RecipeDetails", {
            recipe: recipe
        })
    }

    const renderItem = ({ item }) => {
        let recipeObj = item.recipe || item

        return (
            <RecipeRow
                recipe={recipeObj}
                onPress={recipe => showDetails(recipe)}
            />
        )
    }

    return (
        <View style={page}>
            <SearchBar
                loading={loading}
                value={searchText}
                onChangeText={text => setSearchText(text)}
            />

            {searchText !== "" && data && data.recipe_search.total_hits > 0 && 
                <FlatList
                    style={flatlist}
                    data={data.recipe_search.hits}
                    renderItem={renderItem}
                    numColumns={Platform.isPad ? 2 : 1}
                    keyExtractor={(item, key) => "" + item.slug + key}
                />
            }

            {searchText === "" && recipes.recipes.length === 0 &&
                <View style={containerDefaultText}>
                    <Text>Start by typing something in the search bar</Text>
                </View>
            }

            {error && 
                <View style={containerDefaultText}>
                    <Text>An error occured during the search, please try again</Text>
                </View>
            }

            {searchText === "" && recipes.recipes.length > 0 &&
                <View style={{flex: 1, width: "100%", marginTop: 16, alignItems: 'center'}}>
                    <Text style={textToIcon}>Recently Viewed</Text>
                    <FlatList
                        style={flatlist}
                        data={recipes.recipes}
                        renderItem={renderItem}
                        numColumns={Platform.isPad ? 2 : 1}
                        keyExtractor={(item, key) => "" + item.slug + key}
                    />
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        marginBottom: 20
    },

    containerDefaultText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    flatlist: {
        width: "95%"
    },

    textToIcon: {
        marginStart: 8,
        marginBottom: 16,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        alignSelf: 'flex-start'
    }
});