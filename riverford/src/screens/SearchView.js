import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { useSelector, useDispatch } from 'react-redux'
import DeviceInfo from 'react-native-device-info';

import { FETCH_RECIPES } from '../network/recipe_search'
import { processAddRecipe } from '../actions/recipe';
import RecipeRow from '../components/RecipeRow'
import SearchBar from '../components/SearchBar'

export default function SearchView({navigation}) {
    const { page, containerDefaultText, flatlist, textToIcon } = styles
    //init the hooks and get the persisted store 'recipes'
    const recipes = useSelector(state => state)
    const [searchText, setSearchText] = useState("")
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width)
    const dispatch = useDispatch()
    //execute graphQL request
    const {data, error, loading} = useQuery(FETCH_RECIPES, 
        { variables: { searchText } }
    );

    //handles the seen recipes and navigate to second screen
    const showDetails = recipe => {
        processAddRecipe(dispatch, recipes.recipes, recipe)
        navigation.navigate("RecipeDetails", {
            recipe: recipe
        })
    }

    //listener to modify layout when orientation changes
    Dimensions.addEventListener('change', () => {
        setScreenWidth(Dimensions.get('window').width)
    })

    //render the flatlist item
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

            {/* custom search bar, working with 'loading' variable to display indicator*/}
            <SearchBar
                loading={loading}
                value={searchText}
                onChangeText={text => setSearchText(text)}
            />

            {/* display the result from graphQL */}
            {searchText !== "" && data && data.recipe_search.total_hits > 0 && 
                <FlatList
                    style={flatlist}
                    data={data.recipe_search.hits}
                    renderItem={renderItem}
                    numColumns={DeviceInfo.isTablet() ? 2 : 1}
                    keyExtractor={(item, key) => '' + item.slug + key}
                />
            }

            {/* display a message to let the user know that there is no record of recently seen recipe, and no search performed */}
            {searchText === "" && recipes.recipes.length === 0 &&
                <View style={containerDefaultText}>
                    <Text>Start by typing something in the search bar</Text>
                </View>
            }

            {/* display a message to the user to indicate there was an error while trying to load the data */}
            {error && 
                <View style={containerDefaultText}>
                    <Text>An error occured during the search, please try again</Text>
                </View>
            }

            {/* display the list of recently seen recipes (max 5) */}
            {searchText === "" && recipes.recipes.length > 0 &&
                <View style={{flex: 1, width: "100%", marginTop: 16, alignItems: 'center'}}>
                    <Text style={textToIcon}>Recently Viewed</Text>
                    <FlatList
                        style={flatlist}
                        data={recipes.recipes}  
                        renderItem={renderItem}
                        numColumns={DeviceInfo.isTablet() ? 2 : 1}
                        keyExtractor={(item, key) => '' + item.slug + key}
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