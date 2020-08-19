import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { InitialPage } from '../login/InitialPage'
import { Dashboard } from '../components/dashboard/Dashboard'
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component = {InitialPage} />
                    <Route path="/dashboard" component = { Dashboard } />
                </Switch>
            </div>
        </Router>
    )
}
