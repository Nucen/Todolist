import { useState } from "react";
import "./index.css"
import { Todolist } from "./Pages/Todolist";
import { v1 } from "uuid";

export type FilterValuesTypes = "all" | "completed" | "active"

function App() {

  let [task, setTask] = useState([
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "TS", isDone: false },
    { id: v1(), title: "React", isDone: false }
  ])
  let [filter , setFilter] = useState<FilterValuesTypes>("completed")

  const removeTask = (id: string) => {
    let FilteredTask = task.filter(t => t.id !== id)
    setTask(FilteredTask)
  }

  const addTask = (newTitle: string) => {
    let newTask = { id: v1(), title: newTitle, isDone: false };
    let newTasks = [newTask, ...task];
    setTask(newTasks)
  }

  const changeFilter = (value: FilterValuesTypes) => {
    setFilter(value)
  }
  
  let tasksForToDoList = task
  if (filter === "completed") {
    tasksForToDoList = task.filter(t => t.isDone === true)
  } else if (filter === "active") {
    tasksForToDoList = task.filter(t => t.isDone === false)
  }

  return (
    <div className="w-full h-screen content-center">
      <Todolist title="What to learn?" tasks={tasksForToDoList} removeTask={removeTask} changeFilter={changeFilter} addTask={addTask} />
    </div>
  );
}

export default App;
