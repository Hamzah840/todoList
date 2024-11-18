function TodoItem({ todo, index, completedTodo, deleteTodo }) {
  return (
    <div className="todo-items">
      <div className="flex flex-align-center position-relative">
        <input type="checkbox" onChange={() => completedTodo(index)} />
        <span className="ckeckmark">
          <i class="fa-solid fa-check"></i>
        </span>
        <p
          style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
        >
          {todo.text}
        </p>
      </div>
      <div className="flex flex-align-center">
        <button onClick={() => editTodo(index)}>
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          className="delete"
          onClick={() => {
            deleteTodo(index);
          }}
        >
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
