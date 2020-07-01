import { recipeConstants } from '../actions/constants'

const inititial_state = []

export function recipeReducer(state = inititial_state, action) {
    switch (action.type) {
        case recipeConstants.ADD_SEEN_RECIPE:
            return [
                action.payload,
                ...state.splice(0, 4),
            ];

        default:
            return state;
    }
}