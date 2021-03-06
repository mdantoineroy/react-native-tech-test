import gql from 'graphql-tag';

//creates the graphQL call using the parameter 'searchText' assigned to q
export const FETCH_RECIPES = gql`
query recipe_search($searchText: String!){
    recipe_search(page: 1, page_size: 200, q: $searchText) {
        total_hits
        hits {
            recipe {
                introduction
                name
                serves
                slug
                total_time
                media {
                    uri
                }
                ingredients {
                    ingredients
                }
                method {
                    steps
                }
            }
        }
    }
}`;