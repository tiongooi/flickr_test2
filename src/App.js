import React, { Component } from 'react';
import {Provider} from "react-redux";
import RootComponent from './app/RootComponent';
import store from './app/storeConfig';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootComponent />
      </Provider>
    );
  }
}

export default App;
