import { connect } from 'react-redux';
import * as actions from "../../actions";
import TodoList from "../../components/TodoList";

const getVisibleTodos = (todos, visibilityFilter) => {
  let filterCompleteValues;

  if (visibilityFilter === actions.VisibilityFilters.SHOW_ALL) {
    filterCompleteValues = [true, false];
  } else {
    filterCompleteValues = (visibilityFilter === actions.VisibilityFilters.SHOW_COMPLETED ? [true] : [false]);
  }

  return todos.filter((todo) => {
    return filterCompleteValues.includes(todo.complete);
  });
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCompleteTodo: id => {
      dispatch(actions.toggleTodo(id));
    },
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
 
export default VisibleTodoList;
