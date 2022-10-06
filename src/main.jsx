import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import { createUploadLink } from 'apollo-upload-client';

/**
 * @param httpLink  from @apollo/client should be replace with
 * @param createUploadLink from apollo-upload-client in every place where we are using httpLink
 */


const uploadLink = createUploadLink({
  uri: 'http://localhost:8000/api/graphql',
});
const client = new ApolloClient({

  link: uploadLink,
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
