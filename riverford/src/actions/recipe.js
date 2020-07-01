import { recipeConstants } from './constants';

export function addRecipe(recipe) {
    return {
		type: recipeConstants.ADD_SEEN_RECIPE, 
		payload: recipe
	};
};

export function processAddRecipe(dispatch, recipesList, recipe) {
	let index = recipesList.findIndex((element) => recipe.slug === element.slug);

	if (index === -1) { 
		dispatch(addRecipe(recipe))
	}
}