import TodoItem from "./TodoItem";

function TodoList({ todos, completedTodo, deleteTodo, editTodo }) {
  return todos.map((todo, index) => (
    <TodoItem
      key={index}
      index={index}
      todo={todo}
      completedTodo={completedTodo}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
    />
  ));
}
export default TodoList;