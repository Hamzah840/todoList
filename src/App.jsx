import TodoInput from "./components/TodoInput";
import "./App.css";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const addTodo = (text) => {
    const newTodo = [...todos, { text, isCompleted: false }];
    setTodos(newTodo);
  };

  const completedTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = !newTodo[index].isCompleted;
    setTodos(newTodo);
  };

  const editTodo = (index, newText) => {
    const newTodo = [...todos];
    newTodo[index].text = newText;
    setTodos(newTodo);
  }

  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="title">
        <h1>Todo List</h1>
      </div>
      <div className="TodoApp">
        <TodoInput addTodo={addTodo} />
        <div className="item-box">
          {todos.length === 0 ? 
          <div className="empty">Empty</div>
           : 
          <TodoList
            todos={todos}
            completedTodo={completedTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
          }
        </div>
      </div>
    </div>
  );
}
export default App;
