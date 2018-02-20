import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Todo extends React.Component {
  render() {
    return (
      <li>
        {this.props.title}
      </li>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  complete: PropTypes.bool,
};

export default Todo;
