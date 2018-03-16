import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Filter extends React.Component {
  handleClick() {
    this.props.handleFilterChange(this.props.value)
  }

  render() {
    let className = 'filter';

    if (this.props.value === this.props.filter) {
      className += ' filter--active';
    }

    return (
      <span className={className} onClick={(e) => this.handleClick()}>
        {this.props.label}
      </span>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
