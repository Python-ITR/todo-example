import React, { useState, useCallback, useMemo } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useSelector } from "react-redux";
import { AddTodoForm, TodoList, TodoItem, Filters } from "../components";

function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

const MainView = () => {
  const todos = useSelector((state) => state.todos);
  const currentFilter = useSelector(state => state.filter);

  const filtred_todos = useMemo(
    () =>
      todos.filter((todo) => {
        if (currentFilter === "all") return true;
        if (currentFilter === "done_only") return todo.done === true;
      }),
    [todos, currentFilter]
  );

  const handleChangeFilter = useCallback((new_filter_value) => {}, []);
  const handleTodoDelete = useCallback((idx) => {});

  return (
    <Container>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <Filters
            current_filter={currentFilter}
            onChangeFilter={handleChangeFilter}
          />
          <TodoList>
            {filtred_todos.map((t, idx) => (
              <TodoItem
                idx={idx}
                key={idx}
                title={t.title}
                done={t.done}
                onDelete={handleTodoDelete}
              />
            ))}
          </TodoList>
          <AddTodoForm />
        </Col>
      </Row>
    </Container>
  );
};

export default MainView;
