import gql from 'graphql-tag'

export const signUpMuatation = gql`
    mutation($email: String!,$username: String!, $password: String!) {
        signup(email: $email,username: $username, password: $password ) {
            _id
            email
            name
            token
        }
    }
`

export const signInMutation = gql`
    mutation($username: String!,$password: String!) {
        signin(username:$username,password:$password) {
             _id
		    email
		    name
		    picture
		    role
		    provider
		    createdOn
		    updatedOn
        }
    }
`

export const signOutMutation = gql`
    mutation {
        signout {
            _id
        }
    }
`