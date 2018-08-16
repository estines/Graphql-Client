import gql from 'graphql-tag'

export const usersQuery = gql`
    {
        users {
            _id
            name
            email
        }
    }
`