import TodoItem from "./TodoItem";

function TodoList({ todos, completedTodo, deleteTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} completedTodo={completedTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}
export default TodoList;
