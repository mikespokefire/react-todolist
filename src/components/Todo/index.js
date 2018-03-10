import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Todo extends React.Component {
  handleClick(e) {
    this.props.handleCompleteTodo(this.props.id);
  }

  render() {
    let className = 'todo';

    if (this.props.complete) {
      className += ' todo--complete';
    }

    let buttonText = this.props.complete ? 'Uncomplete' : 'Complete';

    if (this.props.complete) {
    }

    return (
      <li className={className}>
        {this.props.title}
        <button onClick={(e) => this.handleClick(e)}>
          {buttonText}
        </button>
      </li>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  complete: PropTypes.bool,
  handleCompleteTodo: PropTypes.func.isRequired,
};

export default Todo;
