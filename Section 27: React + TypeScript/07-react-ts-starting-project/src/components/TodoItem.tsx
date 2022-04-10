import React from "react";
import classes from './TodoItem.module.css';

interface TodoItem {
  text: string,
  onRemoveTodo: () => void
}

const TodoItem: React.FC<TodoItem> = (props) => {
  return (
      <li className={classes.item} onClick={props.onRemoveTodo}>
        {props.text}
      </li>
  );
}

export default TodoItem;