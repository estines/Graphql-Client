import React from 'react'
import { compose } from 'recompose'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'

import gql from 'graphql-tag'
import { graphql } from "react-apollo"

const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    formControl: {
        display: 'flex',
        width: '300px',
        margin: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    }
})

class Todo extends Component {
    state = {
        text: ''
    }

    onAddTodo = () => {

    }

    onChangedHandler = e => {
        
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

const todoQuery = gql`
    {
        todos {
            _id
            text
        }
    }
`

const todoMutation = gql`
    mutation AddTodo($text: String!) {
        addTodo(text:$text) {
            _id
            text
        }
    }
`

const enhance = compose(
    graphql(todoMutation),
    withStyles(styles)
)

export default enhance(Todo);