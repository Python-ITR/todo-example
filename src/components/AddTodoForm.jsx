import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { InputGroup, Input, Button } from "reactstrap";
import { addTodo } from "../store/actions";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const input = useRef();
  const handleSubmit = useCallback(() => {
    if (input && input.current) {
      dispatch(
        addTodo({
          title: input.current.value,
          done: false,
        })
      );
      input.current.value = "";
    }
  }, [input, input.current]);
  const hadleKeyDown = (e) => {
    if(e.key === "Enter"){
      handleSubmit()
    }
  }
  return (
    <InputGroup onKeyDown={hadleKeyDown}>
      <Input innerRef={input} />
      <Button onClick={handleSubmit}>Add</Button>
    </InputGroup>
  );
};

export default AddTodoForm;
