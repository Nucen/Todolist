const Todolist = () => {
    return (
        <div className="">
            <h3>What to learn?</h3>
            <div>
                <input />
                <button>+</button>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} />
                        <p>
                            HTML&CSS
                        </p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} />
                        <p>
                            JavaScript
                        </p>
                    </li><li>
                        <input type="checkbox" checked={true} />
                        <p>
                            React
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Todolist