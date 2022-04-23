import { gql } from '@apollo/client';

export const GETIMAGES = gql`
  query Images {
    id
    userId
    image
    type
  }
`;
