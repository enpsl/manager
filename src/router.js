import React from "react"
import {HashRouter, Route, Switch} from "react-router-dom"
import App from "./App"
import Admin from './admin.js';
import Button from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Messages from './pages/ui/messages';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel';
import Login from './pages/form/login';
import Register from './pages/form/register';
import TableBasic from './pages/table/tableBasic';
import TableHigh from './pages/table/tableHigh';
import City from './pages/city/index';
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
                                <Route path="/admin/ui/modals" component={Modals}/>
                                <Route path="/admin/ui/loadings" component={Loadings}/>
                                <Route path="/admin/ui/notification" component={Notice}/>
                                <Route path="/admin/ui/messages" component={Messages}/>
                                <Route path="/admin/ui/tabs" component={Tabs}/>
                                <Route path="/admin/ui/gallery" component={Gallery}/>
                                <Route path="/admin/ui/carousel" component={Carousel}/>
                                <Route path="/admin/form/login" component={Login}/>
                                <Route path="/admin/form/reg" component={Register}/>
                                <Route path="/admin/table/basic" component={TableBasic}/>
                                <Route path="/admin/table/high" component={TableHigh}/>
                                <Route path="/admin/city" component={City}/>
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