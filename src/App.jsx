import TodoInput from "./components/TodoInput";
import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = [...todos, { text, isCompleted: false }];
    setTodos(newTodo);
    console.log(newTodo);
  };

  return (
    <div className="TodoApp">
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos}/>
    </div>
  );
}
export default App;
