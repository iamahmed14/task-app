import { useState } from "react";
import Overview from "./components/Overview";

export default function App() {

  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    let key = tasks.length ? tasks[tasks.length-1].key+1 : 0;
    let task = {
      key: key,
      text: text
    }
    setTasks([...tasks, task]);
    setText('');
  }

  function deleteTask(key) {
    setTasks(tasks.filter(task => key !== task.key))
  }

  return (
    <div className="App">
      <form onSubmit={e => {
        e.preventDefault();
        addTask();
      }}>
        <input type='text' placeholder="Enter Task" value={text} onChange={e => setText(e.target.value)} />
      </form>
      <Overview tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}
