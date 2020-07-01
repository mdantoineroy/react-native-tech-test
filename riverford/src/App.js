import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ApolloProvider} from 'react-apollo';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './store';
import makeApolloClient from './network/apollo';

//import screens
import SearchView from './screens/SearchView'
import RecipeDetails from './screens/RecipeDetails'

//create react navigation + apollo dependencies
var Stack = createStackNavigator()
var client = makeApolloClient()


export default function App() {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <NavigationContainer>
                        <Stack.Navigator>
                        <Stack.Screen name="SearchView" component={SearchView} options={{ title: 'Search Recipe' }}/>
                        <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{ title: 'Recipe Details' }}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </ApolloProvider>
    );
}