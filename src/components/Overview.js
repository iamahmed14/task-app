import { FaTimes } from "react-icons/fa";

export default function Overview({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <div className="task" key={task.key}>
          {task.text}
            <FaTimes className="icon" onClick={() => deleteTask(task.key)} />
        </div>
      ))}
    </div>
  );
}
