import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-client-preset'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import React from 'react';
import { Store } from '../context/context';
import UserContainer from './users/UsersContainer';
import ChatContainer from './Chat/ChatContainer';
import InputMessage from './Chat/inputMessage';



  const MainContainer = ({}) => {
      console.log("RENDERING")
    const globalState = React.useContext(Store) as any;
    const {user} = globalState.state
    const httpLink = new HttpLink({
        uri: 'http://localhost:4000'
      })
      
      const wsLink = new WebSocketLink({
        uri: 'ws://localhost:4000/graphql',
        options: {
          reconnect: true,
          connectionParams: () => ({
            user: user.user
          }),
        }
      })
      
      const link = split(
        ({ query }) => {
          const { kind } = getMainDefinition(query)
          return kind === 'OperationDefinition'
        },
        wsLink,
        httpLink,
      )
    
      const client = new ApolloClient({
        link,
        cache: new InMemoryCache()
      })
      return (
          <ApolloProvider client={client}>
              <UserContainer />
                <ChatContainer  />
                <InputMessage />
          </ApolloProvider>
      )
  }
  
  export default MainContainer;
  