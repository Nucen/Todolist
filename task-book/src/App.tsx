import { useState } from "react";
import "./index.css"
import { Todolist } from "./Pages/Todolist";
import { v1 } from "uuid";

export type FilterValuesTypes = "all" | "completed" | "active"

function App() {

  let [tasks, setTasks] = useState([
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "TS", isDone: false },
    { id: v1(), title: "React", isDone: false }
  ])
  let [filter , setFilter] = useState<FilterValuesTypes>("completed")

  const removeTask = (id: string) => {
    let FilteredTask = tasks.filter(t => t.id !== id)
    setTasks(FilteredTask)
  }
  const addTask = (newTitle: string) => {
    let newTask = { id: v1(), title: newTitle, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks)
  }
  const changeFilter = (value: FilterValuesTypes) => {
    setFilter(value)
  }
  const ChangeStatus = (taskID: string, isDone: boolean) => {
    let task = tasks.find(t => t.id === taskID)
    if (task) {
      task.isDone = isDone
    }
    setTasks([...tasks]);
  }
  
  let tasksForToDoList = tasks
  if (filter === "completed") {
    tasksForToDoList = tasks.filter(t => t.isDone === true)
  } else if (filter === "active") {
    tasksForToDoList = tasks.filter(t => t.isDone === false)
  }

  return (
    <div className="w-full h-screen content-center">
      <Todolist title="What to learn?"
        tasks={tasksForToDoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeTaskStatus={ChangeStatus}
      />
    </div>
  );
}

export default App;
