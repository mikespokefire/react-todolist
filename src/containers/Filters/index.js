import { connect } from 'react-redux';
import * as actions from "../../actions";
import Filter from '../../components/Filter'

import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Filters extends React.Component {
  render() {
    return (
      <p className="filters">
        <Filter visibilityFilter={this.props.visibilityFilter} value={ actions.VisibilityFilters.SHOW_ALL } label="All" handleFilterChange={this.props.handleFilterChange}/>
        {' '}
        |
        {' '}
        <Filter visibilityFilter={this.props.visibilityFilter} value={ actions.VisibilityFilters.SHOW_UNCOMPLETED } label="Uncomplete" handleFilterChange={this.props.handleFilterChange}/>
        {' '}
        |
        {' '}
        <Filter visibilityFilter={this.props.visibilityFilter} value={ actions.VisibilityFilters.SHOW_COMPLETED } label="Complete" handleFilterChange={this.props.handleFilterChange}/>
      </p>
    );
  }
}

Filters.propTypes = {
  visibilityFilter: PropTypes.oneOf([
    actions.VisibilityFilters.SHOW_ALL,
    actions.VisibilityFilters.SHOW_UNCOMPLETED,
    actions.VisibilityFilters.SHOW_COMPLETED,
  ]),
  handleFilterChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFilterChange: (filter) => {
      dispatch(actions.setVisibilityFilter(filter));
    },
  };
};

Filters = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
 
export default Filters;
