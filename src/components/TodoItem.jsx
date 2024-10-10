function TodoItem({ todo, index, completedTodo, deleteTodo }) {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completedTodo(index)}>
          {todo.isCompleted ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => {
            deleteTodo(index);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
