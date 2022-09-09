import { useDispatch, useSelector } from "react-redux";
import { deleteTrashedTodos } from "../../redux/todosSlice";
import { TodoComp } from "../";

export default function Trash() {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const deleteTrashedTodosHandler = () => {
        dispatch(deleteTrashedTodos());
    };

    return (
        <div className="container">
            <header className="header">
                <h1>Trash</h1>{" "}
                <button
                    onClick={deleteTrashedTodosHandler}
                    className="primary-btn"
                >
                    Delete All
                </button>
            </header>
            {todos.map((todo) => {
                return (
                    todo.isDeleted && (
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
