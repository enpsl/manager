import React, { Component } from 'react';
import  { Globalstyle } from './baseStyle.js';
import { Provider } from "react-redux"
import store from "./store";
import Header from "./common/header"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Globalstyle/>
          <Provider store={store}>
            <Header/>
          </Provider>
      </div>
    );
  }
}

export default App;
