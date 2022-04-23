import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation register(
    $fullName: String!
    $email: String!
    $phoneNumber: String!
    $password: String!
  ) {
    register(
      data: {
        fullName: $fullName
        email: $email
        phoneNumber: $phoneNumber
        password: $password
      }
    )
  }
`;
