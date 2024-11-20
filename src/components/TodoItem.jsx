import { useState } from "react";

function TodoItem({ todo, index, completedTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    editTodo(index, editText);
    setIsEditing(false);
  };

  return (
    <div className="todo-items">
      <div className="flex flex-align-center position-relative">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => completedTodo(index)}
        />
        <span className="ckeckmark">
          <i class="fa-solid fa-check"></i>
        </span>

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
            }}
          />
        ) : (
          <p className={todo.isCompleted ? "completed" : "notCompleted"} onDoubleClick={() => {
            if (!todo.isCompleted) {
              setIsEditing(true)
            }else {
              alert("Cannot delete an incomplete todo");
            }
          }}>
            {todo.text}
          </p>
        )}
      </div>
      <div className="flex flex-align-center">
        <button
          onClick={() => {
            if (!todo.isCompleted) {
              setIsEditing(true);
            } else {
              alert("Cannot edit a completed task");
            }
          }}
        >
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          className="delete"
          onClick={() => {
            if (todo.isCompleted) {
              deleteTodo(index);
            } else {
              alert("Cannot delete an incomplete todo");
            }
          }}
        >
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
