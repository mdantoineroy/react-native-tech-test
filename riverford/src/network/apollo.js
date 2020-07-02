import {HttpLink} from 'apollo-link-http';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from "apollo-cache-inmemory";
import {API_URL} from '../constants'

//init an ApolloClient
const makeApolloClient = () => {
    const link = new HttpLink({uri: API_URL});
    const cache = new InMemoryCache()
    const client = new ApolloClient({link, cache});

    return client;
}

export default makeApolloClient