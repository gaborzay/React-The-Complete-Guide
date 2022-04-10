import React, {useContext, useRef} from "react";
import classes from './NewTodo.module.css'
import {TodosContext} from "../store/todos-context";

interface newTodo {
  // onAddTodo: (todo: string) => void
}

const NewTodo: React.FC<newTodo> = (props) => {
  const todoCxt = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todoCxt.addTodo(enteredText);
  }

  return (
      <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef}/>
        <button>Add Todo</button>
      </form>
  );
}

export default NewTodo;