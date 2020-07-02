import { recipeConstants } from './constants';

//action dispatched to the store to save the recipe
export function addRecipe(recipe) {
    return {
		type: recipeConstants.ADD_SEEN_RECIPE, 
		payload: recipe
	};
};

//check if the recipe already exist inside the recently seen recipes list in the store
export function processAddRecipe(dispatch, recipesList, recipe) {
	let index = recipesList.findIndex((element) => recipe.slug === element.slug);

	if (index === -1) { 
		dispatch(addRecipe(recipe))
	}
}