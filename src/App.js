import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Hello',
          complete: true,
        },
        {
          id: 2,
          title: 'World',
          complete: false,
        },
        {
          id: 3,
          title: 'Foo',
          complete: false,
        },
      ],
    };
  }

  handleAddTodo(title) {
    let todos = this.state.todos.slice();

    todos.push({
      id: (todos.length + 1),
      title: title,
      complete: false,
    });

    this.setState({
      todos: todos,
    });
  }

  handleCompleteTodo(id) {
    let todos = this.state.todos.slice();
    let todoIndex = todos.findIndex(function(t) {
      return t.id === id;
    });

    if (todoIndex >= 0) {
      todos[todoIndex] = Object.assign({}, todos[todoIndex], { complete: true });

      this.setState({
        todos: todos,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoList todos={this.state.todos} handleCompleteTodo={(id) => this.handleCompleteTodo(id)}/>
        <AddTodo handleAddTodo={(title) => this.handleAddTodo(title)}/>
      </div>
    );
  }
}

export default App;
