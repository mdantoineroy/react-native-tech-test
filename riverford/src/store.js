import AsyncStorage from '@react-native-community/async-storage'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'

import combinedReducer from './reducers'
import { STORAGE_KEY } from './constants'

const persistConfig = {
    key: STORAGE_KEY,
    storage: AsyncStorage,
    whitelist: ['recipes'],
    blacklist: []
};

//create redux-persist store which are imported from App.js
const persistedReducer = persistReducer(persistConfig, combinedReducer)
const store = createStore(persistedReducer, applyMiddleware(createLogger()))
let persistor = persistStore(store);

// Exports
export {store, persistor};