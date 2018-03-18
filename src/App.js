import AddTodo from './containers/AddTodo'
import Filters from './containers/Filters'
import VisibleTodoList from './containers/VisibleTodoList';

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import todoApp from './reducers';
let store = createStore(todoApp);

// // Uncomment to view state changes as they happen
// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Filters />
          <VisibleTodoList />
          <AddTodo />
        </div>
      </Provider>
    );
  }
}

export default App;
