import React, { useState, useCallback, useMemo } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { AddTodoForm, TodoList, TodoItem, Filters } from "../components";

function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

const MainView = () => {
  const [todos, setTodos] = useState(
    Array.from(range(1, 10)).map((n) => ({
      title: `Todo ${n}`,
      done: Math.random() < 0.5,
    }))
  );
  const [current_filter, setCurrentFilter] = useState("all");

  const filtred_todos = useMemo(
    () =>
      todos.filter((todo) => {
        console.log("KLJLKJL");
        if (current_filter === "all") return true;
        if (current_filter === "done_only") return todo.done === true;
      }),
    [todos, current_filter]
  );

  const handleChangeFilter = useCallback((new_filter_value) => {
    setCurrentFilter(new_filter_value);
  }, []);

  const handleTodoDelete = useCallback((idx) => {
    setTodos(
      todos.filter((_, _idx) => {
        return _idx !== idx;
      })
    );
  });

  return (
    <Container>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <Filters
            current_filter={current_filter}
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
