import React, { memo, useState, useRef } from "react";
import PT from "prop-types";
import CN from "classnames";
import { Button, ButtonGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTrash,
  faSave,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, changeTodo } from "../store/actions";
import "./TodoItem.scss";

const TodoItem = memo(({ done = false, title, idx }) => {
  const input = useRef();
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);

  const handleDeleteClick = () => {
    dispatch(deleteTodo(idx));
  };

  const handleToggleClick = () => {
    dispatch(toggleTodo(idx));
  };

  const dispatchChangeTodo = () => {
    if (input && input.current) {
      dispatch(
        changeTodo(idx, {
          title: input.current.value,
          done,
        })
      );
      setEditing(false);
    }
  };

  const handleSaveClick = () => {
    dispatchChangeTodo();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatchChangeTodo();
    }
  };

  const handleToggleMode = () => {
    setEditing(!editing);
  };

  return (
    <div
      className={CN("todo_item", "pt-1", "pb-1", {
        checked: done,
      })}
    >
      <div className="todo_item__left_side" onClick={handleToggleClick}>
        <FontAwesomeIcon className="todo_item__check" icon={faCheckCircle} />
      </div>
      <div
        onDoubleClick={handleToggleMode}
        className="todo_item__content_wrapper"
      >
        {editing ? (
          <input
            ref={input}
            className="todo_item__input"
            defaultValue={title}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <h1 className="todo_item__title">{title}</h1>
        )}
      </div>
      <div className="todo_item__right_side">
        {editing ? (
          <Button color="primary" onClick={handleSaveClick}>
            <FontAwesomeIcon icon={faSave} />
          </Button>
        ) : (
          <ButtonGroup>
            <Button color="danger" onClick={handleDeleteClick}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Link to="/todo">
              <Button type="button" color="secondary">
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </Link>
          </ButtonGroup>
        )}
      </div>
    </div>
  );
});

TodoItem.propTypes = {
  idx: PT.number.isRequired,
  title: PT.string.isRequired,
  done: PT.bool,
};

export default TodoItem;
