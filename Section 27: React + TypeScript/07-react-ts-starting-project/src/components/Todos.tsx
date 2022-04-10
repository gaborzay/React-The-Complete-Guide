import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'
import {TodosContext} from "../store/todos-context";

interface Todos {
  // items: Todo[]
  // onRemoveTodo: (id: string) => void
}

const Todos: React.FC<Todos> = (props) => {
  const todoCxt = useContext(TodosContext);

  return (
      <ul className={classes.todos}>
        {todoCxt.items.map(item => (
            <TodoItem
                key={item.id}
                text={item.text}
                onRemoveTodo={todoCxt.onRemoveTodo.bind(null, item.id)}
            />
        ))}
      </ul>
  );
}

export default Todos;