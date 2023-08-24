const Todo = ({ todo }) => {
  return (
    <div className="task-container">
      Task: {todo.task}. Completed? {todo.done ? "Yes" : "No"}
    </div>
  );
};

export default Todo;
