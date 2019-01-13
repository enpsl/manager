import React from "react"
import {HashRouter, Route, Switch} from "react-router-dom"
import App from "./App"
import Admin from './admin.js';
import Login from './pages/login';
import Button from './pages/ui/buttons';
import NoMatch from './pages/nomatch';

export default class IRouter extends React.Component{
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Button}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </Admin>
                    } />
                    <Route path="/login" component={Login}/>
                </App>
            </HashRouter>
        );
    }
}