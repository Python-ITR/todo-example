import React, { useCallback } from "react";
import { Container, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { AddTodoForm, TodoList, TodoItem, Filters } from "../components";
import { filtredTodos, todosFilter } from "../store/selectors";
import { changeFilter } from "../store/actions";

const MainView = () => {
  const dispatch = useDispatch();
  const todos = useSelector(filtredTodos);
  const filter = useSelector(todosFilter);

  const handleChangeFilter = useCallback((newFilterValue) => {
    dispatch(changeFilter(newFilterValue));
  }, []);
  const handleTodoDelete = useCallback((idx) => {});

  return (
    <Container>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <Filters
            current_filter={filter}
            onChangeFilter={handleChangeFilter}
          />
          <TodoList>
            {todos.map((t, idx) => (
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
