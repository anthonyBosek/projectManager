import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

// added for testing purposes 4/3/23
const UPDATE_CLIENT = gql`
  mutation updateClient(
    $id: ID!
    $name: String!
    $email: String!
    $phone: String!
  ) {
    updateClient(id: $id, name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;
//

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

export { ADD_CLIENT, UPDATE_CLIENT, DELETE_CLIENT };
