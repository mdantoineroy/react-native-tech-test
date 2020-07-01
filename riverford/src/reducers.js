import { combineReducers } from "redux"
import { recipeReducer } from './reducers/recipe'

export default combineReducers({
    recipes: recipeReducer
});