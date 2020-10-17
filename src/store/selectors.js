export const filtredTodos = (state) => {
  return state.todos.filter((t) => {
    if (state.filter === "all") return true;
    if (state.filter === "done_only") return t.done === true;
  });
};

export const todosFilter = (state) => state.filter;