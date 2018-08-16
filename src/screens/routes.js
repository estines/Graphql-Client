import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Authentication from './authenScreen'

const AuthorizedRoute = props => {
    const { component: Component, here, location: { state }, ...rest } = props
    return (
        <Route {...rest} render={props => {
            return state && state.signin && state.signin._id ? <Component {...props} /> : <Redirect to='/' />
        }} />
    )
}

const _404Page = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>404: Page Not Found!</h1>
    </div>
)

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Authentication} />
            <AuthorizedRoute path="/home" component={() => <div>Hello World</div>} />
            <Route path="*" component={_404Page} />
        </Switch>
    </BrowserRouter>
)