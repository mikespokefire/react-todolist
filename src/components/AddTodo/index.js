import React from 'react';

import PropTypes from 'prop-types';

import './index.css';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        title: '',
      },
    };
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    if (!this.isValid()) {
      return;
    }

    this.props.handleAddTodo(this.state.todo.title.trim());
    this.setState({
      todo: {
        title: '',
      },
    });
  }

  handleTitleChange(title) {
    this.setState({
      todo: {
        title: title,
      },
    });
  }

  isValid() {
    if (this.state.todo.title.trim() === '') {
      return false;
    }

    return true;
  }

  render() {
    return (
      <div className="add-todo">
        <input
          type="text"
          value={this.state.todo.title}
          onChange={(e) => this.handleTitleChange(e.target.value)}
          onKeyPress={(e) => this.handleKeyPress(e)}
        />
        <button onClick={() => this.handleSubmit()}>Add Todo</button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

export default AddTodo;
