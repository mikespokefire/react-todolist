// ACTION TYPES

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// OTHER USEFUL CONSTANTS

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_UNCOMPLETED: 'SHOW_UNCOMPLETED',
}

// ACTION CREATORS

export function addTodo(title) {
  return {
    type: ADD_TODO,
    title: title,
  }
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index: index,
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter,
  }
}
