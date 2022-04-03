import { gql } from '@apollo/client';

export const QUERY_BOOK = gql`
  query book($username: String) {
    book(username: $username) {
      _id
      bookTitle
      username
      bookAuthors
      bookDescription
    }
  }
`;


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      bookTitle
      username
      bookAuthors
      bookDescription
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      book {
        _id
        bookTitle
        username
        bookAuthors
        bookDescription
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      book {
        _id
        bookTitle
        bookAuthors
      }
    }
  }
`;
