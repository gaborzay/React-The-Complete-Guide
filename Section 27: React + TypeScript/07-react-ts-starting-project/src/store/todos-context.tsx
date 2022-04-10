import React, {useState} from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[],
  addTodo: (text: string) => void,
  onRemoveTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {
  },
  onRemoveTodo: (id: string) => {
  }
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todo: string) => {
    const newTodo = new Todo(todo);

    setTodos(prevState => prevState.concat(newTodo));
  }

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    onRemoveTodo: removeTodoHandler
  }

  return <TodosContext.Provider value={contextValue}>
    {props.children}
  </TodosContext.Provider>;
}

export default TodosContextProvider;