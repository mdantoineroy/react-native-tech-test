import { recipeConstants } from '../actions/constants'

const inititial_state = []

//handle the reducer for recipe
export function recipeReducer(state = inititial_state, action) {
    switch (action.type) {
        case recipeConstants.ADD_SEEN_RECIPE:
            //create a list of 5 recipes (max) by adding the latest one at the top of the list
            return [
                action.payload,
                ...state.splice(0, 4),
            ];

        default:
            return state;
    }
}