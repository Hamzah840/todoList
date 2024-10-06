import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function TodoApp() {
  return (
    <div className="TodoApp">
      <h1>Todo List</h1>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default TodoApp;
