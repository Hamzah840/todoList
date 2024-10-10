import TodoInput from "./components/TodoInput";
import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = [...todos, { text, isCompleted: false }];
    setTodos(newTodo);
  };

  const completedTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = !newTodo[index].isCompleted;
    setTodos(newTodo);
  };

  const deleteTodo = index => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);    
  }

  return (
    <div className="TodoApp">
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} completedTodo={completedTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
export default App;
