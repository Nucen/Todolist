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
    changeTaskStatus: (taskId: string, isDone: boolean) => void,
}

export const Todolist = (props: PropseType) => {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState<string | null>(null);

    const onNewTitleChangeHandeler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === "Enter") {
            props.addTask(newTaskTitle);
            setNewTaskTitle("");
        }
    };

    const addTask = () => {
        if (newTaskTitle.trim() !== "") {
            props.addTask(newTaskTitle);
            setNewTaskTitle("")
        } else {
            setError("Title is required")
        }
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
            <h3 className="text-2xl">{props.title}</h3>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={onNewTitleChangeHandeler}
                    onKeyPress={onKeyPressHandler}
                    className={error ? "border-2 border-red-600" : ""}
                />
                <button
                    className="bg-cyan-600 border-cyan-800 border-2 px-2 text-lg"
                    onClick={addTask}>
                    +
                </button>
                {error && <div className="text-red-600">{error}</div>}
                <ul>
                    {
                        props.tasks.map((t) => { 
                            
                            const onClick = () => {
                                props.removeTask(t.id)
                            }

                            const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
                                props.changeTaskStatus(t.id, e.currentTarget.checked)
                            }
                            
                            return <li className="flex flex-row gap-3">
                                <input onChange={onChangeHandler} type="checkbox" checked={t.isDone} />
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