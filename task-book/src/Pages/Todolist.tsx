export type Task = {
    id: number,
    title: string,
    isDone: boolean,
}

type PropseType = {
    title: string,
    tasks: Array<Task> // or Task[]
}

export const Todolist = (props: PropseType) => {
    return (
        <div className="">
            <h3>{ props.title }</h3>
            <div>
                <input />
                <button>+</button>
                <ul>
                    <li>
                        <input type="checkbox" checked={props.tasks[0].isDone} />
                        <p>
                            {props.tasks[0].title}
                        </p>
                    </li>
                    <li>
                        <input type="checkbox" checked={props.tasks[1].isDone} />
                        <p>
                            {props.tasks[1].title}
                        </p>
                    </li>
                    <li>
                        <input type="checkbox" checked={props.tasks[2].isDone} />
                        <p>
                            {props.tasks[2].title}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}