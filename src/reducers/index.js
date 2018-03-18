import * as actions from '../actions';

function todos(state = [], action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        {
          id: (state.length + 1),
          title: action.title,
          complete: false,
        }
      ]

    case actions.TOGGLE_TODO:
      let todos = state.slice();
      let todoIndex = todos.findIndex((t) => {
        return t.id === action.index;
      });

      if (todoIndex >= 0) {
        todos[todoIndex] = Object.assign({}, todos[todoIndex], { complete: !todos[todoIndex].complete });
      }
      return todos;

    default:
      return state;
  }
}

function visibilityFilter(state = actions.VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case actions.SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}

function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action),
  };
}

export default todoApp;
