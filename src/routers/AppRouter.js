import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';


import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';


//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
//Dudas de el error link de arriba

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch> 
                    <Route exact path="/login" component={ LoginScreen } />
                    
                    <Route path="/" component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
    )
}
