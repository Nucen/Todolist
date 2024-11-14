import { useState } from "react";
import "./index.css"
import { Task, Todolist } from "./Pages/Todolist";

export type FilterValuesTypes = "all" | "completed" | "active"

function App() {

  let WhatToLehrntTasks: Task[] = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "TS", isDone: false },
    { id: 4, title: "React", isDone: false }
  ]

  let [task, setTask] = useState(WhatToLehrntTasks)
  let [filter , setFilter] = useState<FilterValuesTypes>("completed")

  const removeTask = (id: number) => {
    let FilteredTask = task.filter(t => t.id !== id)
    setTask(FilteredTask)
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
      <Todolist title="What to learn?" tasks={ tasksForToDoList } removeTask={removeTask} changeFilter={changeFilter} />
    </div>
  );
}

export default App;
