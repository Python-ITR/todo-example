import { act } from "react-dom/test-utils";
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CHANGE_TODO,
  CHANGE_FILTER,
} from "./actions";

export const mainReducer = (
  state = {
    todos: [],
    filter: "all",
  },
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, idx) => idx !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((t, idx) => {
          if (idx !== action.payload) return t;
          return {
            ...t,
            done: !t.done,
          };
        }),
      };
    case CHANGE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, idx) => {
          if (action.payload.todoId !== idx) return todo;
          return action.payload.todo;
        }),
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
