function TodoList({todos}) {
  return (
    <div>
      {todos.map((todo, index) => (
        console.log(todo)
        
      ))}
    </div>
  );
}
export default TodoList