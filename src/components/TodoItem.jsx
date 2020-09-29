import React, { memo } from "react";
import PT from "prop-types";
import CN from "classnames";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.scss";

const TodoItem = memo(({ done = false, title, idx, onDelete }) => {
  return (
    <div
      className={CN("todo_item", {
        checked: done,
      })}
    >
      <FontAwesomeIcon className="todo_item__check" icon={faCheckCircle} />
      <h1 className="todo_item__title">{title}</h1>
      <Button danger onClick={() => onDelete(idx)}>
        Delete
      </Button>
    </div>
  );
});

TodoItem.propTypes = {
  idx: PT.number.isRequired,
  title: PT.string.isRequired,
  done: PT.bool,
  onDelete: PT.func.isRequired,
};

export default TodoItem;
