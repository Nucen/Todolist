import { useState } from "react";
import "./index.css"
import { Todolist } from "./Pages/Todolist";
import { Task } from "./Pages/Todolist";



function App() {

  let WhatToLehrntTasks: Task[] = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: true }
  ]

  let MoviesTasks: Task[] = [
    { id: 1, title: "Terminator", isDone: true },
    { id: 2, title: "Joker", isDone: true },
    { id: 3, title: "Game of Thrones", isDone: true },
    { id: 4, title: "Simpson's", isDone: true }
  ]

  let SongsTasks: Task[] = [
    { id: 1, title: "Lil peep", isDone: true },
    { id: 2, title: "Imagene dragons", isDone: true },
    { id: 3, title: "TwentyOnePilot", isDone: true }
  ]

  let [task, setTask] = useState(WhatToLehrntTasks)

  const removeTask = (id: number) => {
    let FilteredTask = task.filter(t => t.id !== id)
    setTask(FilteredTask)
  }

  return (
    <div className="flex">
      <Todolist title="What to lehrn" tasks={ WhatToLehrntTasks } removeTask={removeTask} />
      <Todolist title="Movies" tasks={ MoviesTasks } removeTask={removeTask} />
      <Todolist title="Songs" tasks={ SongsTasks } removeTask={removeTask} />
    </div>
  );
}

export default App;
