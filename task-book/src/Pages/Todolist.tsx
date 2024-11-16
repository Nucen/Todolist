import { FilterValuesTypes } from "../App";
import { ChangeEvent, useState } from "react";

export type Task = {
    id: string,
    title: string,
    isDone: boolean,
}

type PropseType = {
    title: string,
    tasks: Task[], // or Array<Task>
    removeTask: (id: string) => void,
    changeFilter: (value: FilterValuesTypes) => void,
    addTask: (title: string) => void,
}

export const Todolist = (props: PropseType) => {

    const [newTaskTitle, setNewTaskTitle] = useState("");

    const onNewTitleChangeHandeler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
        props.addTask(newTaskTitle);
        setNewTaskTitle("");
    }};

    const addTask = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle("")
    }

    const onAllClickHanler = () => {
        props.changeFilter("all")
    }

    const onCompletedClickHanler = () => {
        props.changeFilter("completed")
    }
    
    const onActiveClickHanler = () => {
        props.changeFilter("active")
    }

    return (
        <div className="flex flex-col items-center bg-slate-500">
            <h3 className="text-2xl">{ props.title }</h3>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={onNewTitleChangeHandeler}
                    onKeyPress={onKeyPressHandler}
                />
                <button
                    className="bg-cyan-600 border-cyan-800 border-2 px-2 text-lg"
                    onClick={addTask}>
                    +
                </button>
                <ul>
                    {
                        props.tasks.map((t) => { 
                            
                            const onClick = () => {
                                props.removeTask(t.id)
                            }
                            
                            return <li className="flex flex-row gap-3">
                                <input type="checkbox" checked={t.isDone} />
                                <p className="w-28 text-xl">{t.title}</p>
                                <button onClick={onClick}>X</button>
                            </li>
                        })
                    }
                </ul>
                <div className="flex flex-row gap-3">
                    <p className="text-lg">Show:</p>
                    <button
                        className="bg-cyan-600 border-cyan-800 border-2 px-2 text-lg"
                        onClick={onAllClickHanler}>
                        all
                    </button>
                    <button
                        className="bg-cyan-600 border-cyan-800 border-2 px-2 text-lg"
                        onClick={onActiveClickHanler}>
                        active
                    </button>
                    <button
                        className="bg-cyan-600 border-cyan-800 border-2 px-2 text-lg"
                        onClick={onCompletedClickHanler}>
                        completed
                    </button>
                </div>
            </div>
        </div>
    );
}