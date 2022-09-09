import "./todo.scss";
import { MdEditNote, MdDone, MdDeleteForever, MdUndo } from "react-icons/md";
import { Link } from "react-router-dom";
import { completeTodo, deleteTodo, restoreTodo } from "../../redux/todosSlice";
import { useDispatch } from "react-redux";

export default function TodoComp(props) {
    const dispatch = useDispatch();

    const CompleteHandler = () => {
        dispatch(completeTodo(props.todo.id));
    };
    const DeleteHandler = () => {
        dispatch(deleteTodo(props.todo.id));
    };

    const restoreHandler = () => {
        dispatch(restoreTodo(props.todo.id));
    };

    return (
        <div
            className="todo"
            onClick={() => navigator.clipboard.writeText(props.todo.todo)}
        >
            <form>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    value={props.todo.todo}
                    disabled={true}
                />
            </form>
            <div className="buttons">
                <Link
                    to={`/edit-todo/${props.todo.id}`}
                    className={`secondary-btn ${props.editBtn ? "" : "hidden"}`}
                >
                    <MdEditNote fontSize={"28px"} />
                </Link>
                <button
                    className={`secondary-btn ${
                        props.completeBtn ? "" : "hidden"
                    }`}
                    onClick={CompleteHandler}
                >
                    <MdDone fontSize={"20px"} />
                </button>
                <button
                    onClick={restoreHandler}
                    className={`secondary-btn ${
                        props.restoreBtn ? "" : "hidden"
                    }`}
                >
                    <MdUndo fontSize={"20px"} />
                </button>
                <button
                    onClick={DeleteHandler}
                    className={`secondary-btn ${
                        props.trashBtn ? "" : "hidden"
                    }`}
                >
                    <MdDeleteForever fontSize={"20px"} />
                </button>
            </div>
        </div>
    );
}
