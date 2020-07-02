import gql from 'graphql-tag';

export const ALL_CHATS_QUERY = gql`
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
export const ALL_USERS_QUERY = gql`
  query AllUsersQuery {
    usersOnline {
      id
      username
      last
    }
  }
`;

export const CREATE_CHAT_MUTATION = gql`
      mutation CreateChatMutation($content: String! ) {
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
export const CREATE_USER_MUTATION = gql`
      mutation CreateUserMutation($username: String!) {
        updateUserOnline(username: $username, ) {
          id
          username
          last
        }
      }
    `;

export const SUBSCRIBE_CHAT = gql`
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
export const SUBSCRIBE_USERS = gql`
          subscription UsersOnlineSubscription {
            usersOnline {
              id
              username
              last
            }
          }
        `;