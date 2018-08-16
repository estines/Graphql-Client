import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import { signInMutation, signUpMuatation } from '../queries'
import { graphql, compose } from "react-apollo"
import { Modal } from '../components'

const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    formBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formControl: {
        display: 'flex',
        margin: theme.spacing.unit,
        width: 300
    },
    link: {
        textDecoration: 'underline',
        color: '#0088ff',
        cursor: 'pointer'
    },
    button: {
        margin: theme.spacing.unit,
    }
})

class Authentication extends React.Component {
    state = {
        username: '',
        password: '',
        newEmail: '',
        newUsername: '',
        newPassword: '',
        isOpen: false
    }

    openModal = () => this.setState({ isOpen: true })

    closeModal = () => this.setState({ isOpen: false })

    signIn = async () => {
        const { username, password } = this.state
        const { signIn, history } = this.props
        try {
            const { data: { signin } } = await signIn({ variables: { username, password } })
            history.push('/main', { signin })
        } catch (err) {
            console.error('Error: ', err)
        }
    }

    signUp = async () => {
        const { newEmail, newUsername, newPassword } = this.state
        const { signUp } = this.props
        try {
            const result = await signUp({ variables: { email: newEmail, username: newUsername, password: newPassword } })
            console.log(result)
            alert('Signup Success!')
            this.closeModal()
        } catch (err) {
            console.error('Error: ', err)
        }
    }

    onChangedHandler = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { username, password, newEmail, newUsername, newPassword } = this.state
        const { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.formBox}>
                    <h1>Hello Fucking GraphQL</h1>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="name-simple">Username : </InputLabel>
                        <Input id="name-simple" name="username" value={username} onChange={this.onChangedHandler} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="pass-simple">password : </InputLabel>
                        <Input id="pass-simple" name="password" type="password" value={password} onChange={this.onChangedHandler} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.signIn}>
                            Sign in
                        </Button>
                    </FormControl>
                    <a className={classes.link} onClick={this.openModal}>Click here to Register!</a>
                </div>
                <Modal
                    title="Register Form"
                    open={this.state.isOpen}
                    close={this.closeModal}
                    onChange={this.onChangedHandler}
                    email={this.state.newEmail}
                    username={this.state.newUsername}
                    password={this.state.newPassword}
                    signUp={this.signUp}
                >
                    <DialogContentText>
                        Welcome to Fucking GraphQL Example Website!
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        name="newEmail"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value={newEmail}
                        onChange={this.onChangedHandler}
                    />
                    <TextField
                        margin="dense"
                        id="username"
                        name="newUsername"
                        label="Username"
                        fullWidth
                        value={newUsername}
                        onChange={this.onChangedHandler}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        name="newPassword"
                        label="Password"
                        type="password"
                        fullWidth
                        value={newPassword}
                        onChange={this.onChangedHandler}
                    />
                </Modal>
            </div >
        )
    }
}

Authentication.propTypes = {
    classes: PropTypes.object.isRequired
}

const enhance = compose(
    withRouter,
    graphql(signInMutation, { name: 'signIn' }),
    graphql(signUpMuatation, { name: 'signUp' }),
    withStyles(styles)
)

const AuthenticationWithMutation = enhance(Authentication)

export default AuthenticationWithMutation