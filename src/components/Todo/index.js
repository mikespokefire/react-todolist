import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Todo extends React.Component {
  handleClick(e) {
    this.props.handleCompleteTodo(this.props.todo.id);
  }

  render() {
    let className = 'todo';

    if (this.props.todo.complete) {
      className += ' todo--complete';
    }

    let buttonText = this.props.todo.complete ? 'Uncomplete' : 'Complete';

    return (
      <li className={className}>
        {this.props.todo.title}
        <button onClick={(e) => this.handleClick(e)}>
          {buttonText}
        </button>
      </li>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    complete: PropTypes.bool,
  }),
  handleCompleteTodo: PropTypes.func.isRequired,
};

export default Todo;
