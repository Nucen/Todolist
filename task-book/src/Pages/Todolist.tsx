export type Task = {
    id: number,
    title: string,
    isDone: boolean,
}

type PropseType = {
    title: string,
    tasks: Task[], // or Array<Task>
    removeTask: Function,
}

export const Todolist = (props: PropseType) => {
    return (
        <div className="">
            <h3>{ props.title }</h3>
            <div>
                <input />
                <button>+</button>
                <ul>
                    {
                        props.tasks.map((t) => {
                            return <li>
                                <input type="checkbox" checked={t.isDone} />
                                <p>
                                    {t.title}
                                </p>
                                <button onClick={() => props.removeTask(t.id)}>
                                    x
                                </button>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}