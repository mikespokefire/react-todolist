import Filter from '../Filter'

import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Filters extends React.Component {
  render() {
    return (
      <p className="filters">
        <Filter filter={this.props.filter} value="all" label="All" handleFilterChange={this.props.handleFilterChange}/>
        {' '}
        |
        {' '}
        <Filter filter={this.props.filter} value="uncompleted" label="Uncomplete" handleFilterChange={this.props.handleFilterChange}/>
        {' '}
        |
        {' '}
        <Filter filter={this.props.filter} value="completed" label="Complete" handleFilterChange={this.props.handleFilterChange}/>
      </p>
    );
  }
}

Filters.propTypes = {
  filter: PropTypes.oneOf(['all', 'completed', 'uncompleted']),
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filters;
