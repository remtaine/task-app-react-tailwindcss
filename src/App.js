//logic and manage state
// import React, {Component, useState, useEffect} from "react";
import React, {useState, useEffect} from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";


function App() {
  const [count, setCount] = useState(1);

  const [task, setTask] = useState({
    text: '' , 
    id: uniqid(), 
    number: count,
    done: false,
  });

  const [tasks, setTasks] = useState([]);

  const handleTextChange = (e) => {
    setTask({
      ...task,
      text: e.target.value, 
    });
  };

  const onSubmitTask = (e) => {
    e.preventDefault();

    setCount(count+1);
    setTasks(tasks.concat(task));
    setTask({
      ...task,
      text:'',
      id:uniqid(),
      number: count,
    });
  };
  
  // useEffect(() => {
  //   console.log("task: ", task);
  // }, [task])

  useEffect(() => {
    console.log("count is now: ", count);
    setTask({
      ...task,
      number: count,
    })
  }, [count])
  
  // useEffect(() => {
  //   console.log("list of tasks: ", tasks);
  // }, [tasks])

  return (
    <div className="bg-slate-800 text-slate-50 p-8 min-h-screen flex flex-col gap-4  items-center">
      <form action="" onSubmit={onSubmitTask} className="flex gap-4 items-center">
        <label htmlFor="taskInput" className="">Enter Task: </label>
        <input 
          type="text" 
          id="taskInput" 
          onChange={handleTextChange} 
          value={task.text}
          className="text-slate-900 rounded-lg focus:shadow-xl duration-300 focus:py-1 px-2" 
        />
        <button 
          type="submit" 
          className="shadow-lg rounded-lg bg-slate-900 px-4 py-1 hover:bg-slate-700 duration-300">
            Add Task
        </button>
      </form>

      <Overview tasks={tasks} />
    </div>
  );
}

export default App;
