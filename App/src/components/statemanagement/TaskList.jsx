import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask, toggleTask } = useContext(TaskContext);
  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{ color: task.completed ? "green" : "black" }}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          {task.name}
          <button type="button" onClick={() => deleteTask(task.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
