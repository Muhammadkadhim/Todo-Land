import { useDispatch, useSelector } from "react-redux";
import { TodoComp } from "../";
import { restoreAllTodos } from "../../redux/todosSlice";

export default function CompletedTodosComp() {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const restoreAllHandler = () => {
        dispatch(restoreAllTodos());
    };

    return (
        <div className="container">
            <header className="header">
                <h1>Completed</h1>{" "}
                <button onClick={restoreAllHandler} className="primary-btn">
                    Restore All
                </button>
            </header>
            {todos.map((todo) => {
                return (
                    todo.isCompleted && (
                        <TodoComp
                            todo={todo}
                            key={todo.id}
                            trashBtn
                            restoreBtn
                        />
                    )
                );
            })}
        </div>
    );
}
