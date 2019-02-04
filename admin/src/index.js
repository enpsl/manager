import React from 'react';
import ReactDOM from 'react-dom';
//import Router from "./router"
//import Router from "./pages/route_demo/route3/router"
import TodoList from "./pages/demo/TodoList/TodoList"
import {Provider} from "react-redux"
import store from "./pages/demo/store"
//import Parent from "./pages/demo/render/parent"
import './index.css';
import * as serviceWorker from './serviceWorker';
//ReactDOM.render(<Router />, document.getElementById('root'));

const App = (
    <Provider store={store}>
        <TodoList/>
    </Provider>
);
ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
