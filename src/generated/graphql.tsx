import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  chats?: Maybe<Array<Maybe<Chat>>>;
  usersOnline?: Maybe<Array<Maybe<User>>>;
};

export type Chat = {
   __typename?: 'Chat';
  id: Scalars['Int'];
  from?: Maybe<User>;
  content: Scalars['String'];
};

export type User = {
   __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  isOnline: Scalars['Boolean'];
};

export type Mutation = {
   __typename?: 'Mutation';
  createChat?: Maybe<Chat>;
  updateUserOnline?: Maybe<User>;
};


export type MutationCreateChatArgs = {
  content: Scalars['String'];
};


export type MutationUpdateUserOnlineArgs = {
  username: Scalars['String'];
};

export type Subscription = {
   __typename?: 'Subscription';
  messageSent?: Maybe<Chat>;
  usersOnline?: Maybe<Array<Maybe<User>>>;
};

export type AllChatsQueryQueryVariables = {};


export type AllChatsQueryQuery = (
  { __typename?: 'Query' }
  & { chats?: Maybe<Array<Maybe<(
    { __typename?: 'Chat' }
    & Pick<Chat, 'id' | 'content'>
    & { from?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )> }
  )>>> }
);

export type AllUsersQueryQueryVariables = {};


export type AllUsersQueryQuery = (
  { __typename?: 'Query' }
  & { usersOnline?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'isOnline'>
  )>>> }
);

export type CreateChatMutationMutationVariables = {
  content: Scalars['String'];
};


export type CreateChatMutationMutation = (
  { __typename?: 'Mutation' }
  & { createChat?: Maybe<(
    { __typename?: 'Chat' }
    & Pick<Chat, 'id' | 'content'>
  )> }
);

export type CreateUserMutationMutationVariables = {
  username: Scalars['String'];
};


export type CreateUserMutationMutation = (
  { __typename?: 'Mutation' }
  & { updateUserOnline?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'isOnline'>
  )> }
);

export type MessageSentSubscriptionSubscriptionVariables = {};


export type MessageSentSubscriptionSubscription = (
  { __typename?: 'Subscription' }
  & { messageSent?: Maybe<(
    { __typename?: 'Chat' }
    & Pick<Chat, 'id' | 'content'>
    & { from?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )> }
  )> }
);

export type UsersOnlineSubscriptionSubscriptionVariables = {};


export type UsersOnlineSubscriptionSubscription = (
  { __typename?: 'Subscription' }
  & { usersOnline?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'isOnline'>
  )>>> }
);


export const AllChatsQueryDocument = gql`
    query AllChatsQuery {
  chats {
    id
    from {
      id
      username
    }
    content
  }
}
    `;
export type AllChatsQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllChatsQueryQuery, AllChatsQueryQueryVariables>, 'query'>;

    export const AllChatsQueryComponent = (props: AllChatsQueryComponentProps) => (
      <ApolloReactComponents.Query<AllChatsQueryQuery, AllChatsQueryQueryVariables> query={AllChatsQueryDocument} {...props} />
    );
    
export type AllChatsQueryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllChatsQueryQuery, AllChatsQueryQueryVariables>
    } & TChildProps;
export function withAllChatsQuery<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllChatsQueryQuery,
  AllChatsQueryQueryVariables,
  AllChatsQueryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllChatsQueryQuery, AllChatsQueryQueryVariables, AllChatsQueryProps<TChildProps, TDataName>>(AllChatsQueryDocument, {
      alias: 'allChatsQuery',
      ...operationOptions
    });
};

/**
 * __useAllChatsQueryQuery__
 *
 * To run a query within a React component, call `useAllChatsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllChatsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllChatsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllChatsQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllChatsQueryQuery, AllChatsQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<AllChatsQueryQuery, AllChatsQueryQueryVariables>(AllChatsQueryDocument, baseOptions);
      }
export function useAllChatsQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllChatsQueryQuery, AllChatsQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllChatsQueryQuery, AllChatsQueryQueryVariables>(AllChatsQueryDocument, baseOptions);
        }
export type AllChatsQueryQueryHookResult = ReturnType<typeof useAllChatsQueryQuery>;
export type AllChatsQueryLazyQueryHookResult = ReturnType<typeof useAllChatsQueryLazyQuery>;
export type AllChatsQueryQueryResult = ApolloReactCommon.QueryResult<AllChatsQueryQuery, AllChatsQueryQueryVariables>;
export const AllUsersQueryDocument = gql`
    query AllUsersQuery {
  usersOnline {
    id
    username
    isOnline
  }
}
    `;
export type AllUsersQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllUsersQueryQuery, AllUsersQueryQueryVariables>, 'query'>;

    export const AllUsersQueryComponent = (props: AllUsersQueryComponentProps) => (
      <ApolloReactComponents.Query<AllUsersQueryQuery, AllUsersQueryQueryVariables> query={AllUsersQueryDocument} {...props} />
    );
    
export type AllUsersQueryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllUsersQueryQuery, AllUsersQueryQueryVariables>
    } & TChildProps;
export function withAllUsersQuery<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllUsersQueryQuery,
  AllUsersQueryQueryVariables,
  AllUsersQueryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllUsersQueryQuery, AllUsersQueryQueryVariables, AllUsersQueryProps<TChildProps, TDataName>>(AllUsersQueryDocument, {
      alias: 'allUsersQuery',
      ...operationOptions
    });
};

/**
 * __useAllUsersQueryQuery__
 *
 * To run a query within a React component, call `useAllUsersQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllUsersQueryQuery, AllUsersQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<AllUsersQueryQuery, AllUsersQueryQueryVariables>(AllUsersQueryDocument, baseOptions);
      }
export function useAllUsersQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllUsersQueryQuery, AllUsersQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllUsersQueryQuery, AllUsersQueryQueryVariables>(AllUsersQueryDocument, baseOptions);
        }
export type AllUsersQueryQueryHookResult = ReturnType<typeof useAllUsersQueryQuery>;
export type AllUsersQueryLazyQueryHookResult = ReturnType<typeof useAllUsersQueryLazyQuery>;
export type AllUsersQueryQueryResult = ApolloReactCommon.QueryResult<AllUsersQueryQuery, AllUsersQueryQueryVariables>;
export const CreateChatMutationDocument = gql`
    mutation CreateChatMutation($content: String!) {
  createChat(content: $content) {
    id
    from {
      id
      username
    }
    content
  }
}
    `;
export type CreateChatMutationMutationFn = ApolloReactCommon.MutationFunction<CreateChatMutationMutation, CreateChatMutationMutationVariables>;
export type CreateChatMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateChatMutationMutation, CreateChatMutationMutationVariables>, 'mutation'>;

    export const CreateChatMutationComponent = (props: CreateChatMutationComponentProps) => (
      <ApolloReactComponents.Mutation<CreateChatMutationMutation, CreateChatMutationMutationVariables> mutation={CreateChatMutationDocument} {...props} />
    );
    
export type CreateChatMutationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateChatMutationMutation, CreateChatMutationMutationVariables>
    } & TChildProps;
export function withCreateChatMutation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateChatMutationMutation,
  CreateChatMutationMutationVariables,
  CreateChatMutationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateChatMutationMutation, CreateChatMutationMutationVariables, CreateChatMutationProps<TChildProps, TDataName>>(CreateChatMutationDocument, {
      alias: 'createChatMutation',
      ...operationOptions
    });
};

/**
 * __useCreateChatMutationMutation__
 *
 * To run a mutation, you first call `useCreateChatMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatMutationMutation, { data, loading, error }] = useCreateChatMutationMutation({
 *   variables: {
 *      content: // value for 'content'
 *      from: // value for 'from'
 *   },
 * });
 */
export function useCreateChatMutationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateChatMutationMutation, CreateChatMutationMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateChatMutationMutation, CreateChatMutationMutationVariables>(CreateChatMutationDocument, baseOptions);
      }
export type CreateChatMutationMutationHookResult = ReturnType<typeof useCreateChatMutationMutation>;
export type CreateChatMutationMutationResult = ApolloReactCommon.MutationResult<CreateChatMutationMutation>;
export type CreateChatMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateChatMutationMutation, CreateChatMutationMutationVariables>;
export const CreateUserMutationDocument = gql`
    mutation CreateUserMutation($username: String!) {
  updateUserOnline(username: $username) {
    id
    username
    isOnline
  }
}
    `;
export type CreateUserMutationMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutationMutation, CreateUserMutationMutationVariables>;
export type CreateUserMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUserMutationMutation, CreateUserMutationMutationVariables>, 'mutation'>;

    export const CreateUserMutationComponent = (props: CreateUserMutationComponentProps) => (
      <ApolloReactComponents.Mutation<CreateUserMutationMutation, CreateUserMutationMutationVariables> mutation={CreateUserMutationDocument} {...props} />
    );
    
export type CreateUserMutationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateUserMutationMutation, CreateUserMutationMutationVariables>
    } & TChildProps;
export function withCreateUserMutation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUserMutationMutation,
  CreateUserMutationMutationVariables,
  CreateUserMutationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUserMutationMutation, CreateUserMutationMutationVariables, CreateUserMutationProps<TChildProps, TDataName>>(CreateUserMutationDocument, {
      alias: 'createUserMutation',
      ...operationOptions
    });
};

/**
 * __useCreateUserMutationMutation__
 *
 * To run a mutation, you first call `useCreateUserMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutationMutation, { data, loading, error }] = useCreateUserMutationMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useCreateUserMutationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutationMutation, CreateUserMutationMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutationMutation, CreateUserMutationMutationVariables>(CreateUserMutationDocument, baseOptions);
      }
export type CreateUserMutationMutationHookResult = ReturnType<typeof useCreateUserMutationMutation>;
export type CreateUserMutationMutationResult = ApolloReactCommon.MutationResult<CreateUserMutationMutation>;
export type CreateUserMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutationMutation, CreateUserMutationMutationVariables>;
export const MessageSentSubscriptionDocument = gql`
    subscription MessageSentSubscription {
  messageSent {
    id
    from {
      id
      username
    }
    content
  }
}
    `;
export type MessageSentSubscriptionComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<MessageSentSubscriptionSubscription, MessageSentSubscriptionSubscriptionVariables>, 'subscription'>;

    export const MessageSentSubscriptionComponent = (props: MessageSentSubscriptionComponentProps) => (
      <ApolloReactComponents.Subscription<MessageSentSubscriptionSubscription, MessageSentSubscriptionSubscriptionVariables> subscription={MessageSentSubscriptionDocument} {...props} />
    );
    
export type MessageSentSubscriptionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<MessageSentSubscriptionSubscription, MessageSentSubscriptionSubscriptionVariables>
    } & TChildProps;
export function withMessageSentSubscription<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MessageSentSubscriptionSubscription,
  MessageSentSubscriptionSubscriptionVariables,
  MessageSentSubscriptionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withSubscription<TProps, MessageSentSubscriptionSubscription, MessageSentSubscriptionSubscriptionVariables, MessageSentSubscriptionProps<TChildProps, TDataName>>(MessageSentSubscriptionDocument, {
      alias: 'messageSentSubscription',
      ...operationOptions
    });
};

/**
 * __useMessageSentSubscriptionSubscription__
 *
 * To run a query within a React component, call `useMessageSentSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageSentSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageSentSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useMessageSentSubscriptionSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<MessageSentSubscriptionSubscription, MessageSentSubscriptionSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<MessageSentSubscriptionSubscription, MessageSentSubscriptionSubscriptionVariables>(MessageSentSubscriptionDocument, baseOptions);
      }
export type MessageSentSubscriptionSubscriptionHookResult = ReturnType<typeof useMessageSentSubscriptionSubscription>;
export type MessageSentSubscriptionSubscriptionResult = ApolloReactCommon.SubscriptionResult<MessageSentSubscriptionSubscription>;
export const UsersOnlineSubscriptionDocument = gql`
    subscription UsersOnlineSubscription {
  usersOnline {
    id
    username
    isOnline
  }
}
    `;
export type UsersOnlineSubscriptionComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<UsersOnlineSubscriptionSubscription, UsersOnlineSubscriptionSubscriptionVariables>, 'subscription'>;

    export const UsersOnlineSubscriptionComponent = (props: UsersOnlineSubscriptionComponentProps) => (
      <ApolloReactComponents.Subscription<UsersOnlineSubscriptionSubscription, UsersOnlineSubscriptionSubscriptionVariables> subscription={UsersOnlineSubscriptionDocument} {...props} />
    );
    
export type UsersOnlineSubscriptionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UsersOnlineSubscriptionSubscription, UsersOnlineSubscriptionSubscriptionVariables>
    } & TChildProps;
export function withUsersOnlineSubscription<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UsersOnlineSubscriptionSubscription,
  UsersOnlineSubscriptionSubscriptionVariables,
  UsersOnlineSubscriptionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withSubscription<TProps, UsersOnlineSubscriptionSubscription, UsersOnlineSubscriptionSubscriptionVariables, UsersOnlineSubscriptionProps<TChildProps, TDataName>>(UsersOnlineSubscriptionDocument, {
      alias: 'usersOnlineSubscription',
      ...operationOptions
    });
};

/**
 * __useUsersOnlineSubscriptionSubscription__
 *
 * To run a query within a React component, call `useUsersOnlineSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUsersOnlineSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersOnlineSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUsersOnlineSubscriptionSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<UsersOnlineSubscriptionSubscription, UsersOnlineSubscriptionSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<UsersOnlineSubscriptionSubscription, UsersOnlineSubscriptionSubscriptionVariables>(UsersOnlineSubscriptionDocument, baseOptions);
      }
export type UsersOnlineSubscriptionSubscriptionHookResult = ReturnType<typeof useUsersOnlineSubscriptionSubscription>;
export type UsersOnlineSubscriptionSubscriptionResult = ApolloReactCommon.SubscriptionResult<UsersOnlineSubscriptionSubscription>;