import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import Filters from './components/Filters'

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
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
      todos[todoIndex] = Object.assign({}, todos[todoIndex], { complete: !todos[todoIndex].complete });

      this.setState({
        todos: todos,
      });
    }
  }

  handleFilterChange(filter) {
    this.setState({
      filter: filter,
    })
  }

  filterCompleteStates() {
    if (this.state.filter === 'all') {
      return [true, false];
    } else {
      return this.state.filter === 'completed' ? [true] : [false];
    }
  }

  todos() {
    let self = this;
    let filtered_todos = this.state.todos.filter(function(todo) {
      return self.filterCompleteStates().includes(todo.complete);
    });

    return filtered_todos;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Filters filter={this.state.filter} handleFilterChange={(filter) => this.handleFilterChange(filter)}/>
        <TodoList todos={this.todos()} handleCompleteTodo={(id) => this.handleCompleteTodo(id)}/>
        <AddTodo handleAddTodo={(title) => this.handleAddTodo(title)}/>
      </div>
    );
  }
}

export default App;
