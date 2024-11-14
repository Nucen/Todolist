import { ALL } from "dns";

export type Task = {
    id: number,
    title: string,
    isDone: boolean,
}

type PropseType = {
    title: string,
    tasks: Task[], // or Array<Task>
    removeTask: Function,
    changeFilter: Function,
}

export const Todolist = (props: PropseType) => {
    return (
        <div className="flex flex-col items-center bg-slate-500">
            <h3 className="text-2xl">{ props.title }</h3>
            <div>
                <input />
                <button>+</button>
                <ul>
                    {
                        props.tasks.map((t) => {
                            return <li className="flex flex-row gap-3">
                                <input type="checkbox" checked={t.isDone} />
                                <p className="w-28 text-xl">
                                    {t.title}
                                </p>
                                <button onClick={() => { props.removeTask(t.id) }}>
                                    x
                                </button>
                            </li>
                        })
                    }
                </ul>
                <div className="flex flex-row gap-3">
                    <p className="text-lg">Show:</p>
                    <button className="bg-cyan-600 border-cyan-800 border-2 px-2 text-lg" onClick={ () => { props.changeFilter("all") }}>all</button>
                    <button className="bg-cyan-600 border-cyan-800 border-2 px-2 text-lg" onClick={ () => {props.changeFilter("active")}}>active</button>
                    <button className="bg-cyan-600 border-cyan-800 border-2 px-2 text-lg" onClick={ () => {props.changeFilter("completed")}}>completed</button>
                </div>
            </div>
        </div>
    );
}