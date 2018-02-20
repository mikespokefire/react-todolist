import Todo from '../Todo'

import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <h2>Todos</h2>
        <ul>
          {this.props.todos.map(todo => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              complete={todo.complete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape(Todo.propTypes)
  ).isRequired,
};

export default TodoList;
