const Todo = ({ todo }) => {
  return (
    <div className="task-container" data-testid="task-id" id="task-id">
      Task: {todo.task}. Completed? {todo.done ? "Yes" : "No"}
    </div>
  );
};

export default Todo;
