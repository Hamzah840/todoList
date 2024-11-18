import TodoItem from "./TodoItem";

function TodoList({ todos, completedTodo, deleteTodo }) {
  return todos.map((todo, index) => (
    <TodoItem
      key={index}
      index={index}
      todo={todo}
      completedTodo={completedTodo}
      deleteTodo={deleteTodo}
    />
  ));
}
export default TodoList;