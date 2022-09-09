import "./todos.scss";
import { TodoComp } from "../";
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
import useFilter from "../../hooks/useFilter";
import { MdPlaylistAdd } from "react-icons/md";

export default function TodosComp() {
    const todos = useSelector((state) => state.todos.todos);
    const categories = useSelector((state) => state.categories.categories);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const { filteredTodos } = useFilter(todos, selectedCategory);

    return (
        <div className="container">
            <header className="header">
                <h1>Todos</h1>
                <form
                    className="form"
                    style={{ "--form-element-width": "120px" }}
                >
                    <select
                        name="category"
                        id="category"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="All">All</option>
                        {categories.map((category) => {
                            return (
                                <option value={category} key={category}>
                                    {category}
                                </option>
                            );
                        })}
                    </select>
                </form>
            </header>
            {filteredTodos.length > 0 ? (
                [...filteredTodos].reverse().map((filteredTodo) => {
                    return (
                        !filteredTodo.isCompleted &&
                        !filteredTodo.isDeleted && (
                            <TodoComp
                                key={filteredTodo.id}
                                todo={filteredTodo}
                                editBtn
                                completeBtn
                                trashBtn
                            />
                        )
                    );
                })
            ) : (
                <p to="/add-todo" className="first-todo">
                    Click {"\u00a0\u00a0"} <MdPlaylistAdd fontSize={"24px"} />
                    {"\u00a0\u00a0"} to add a todo
                </p>
            )}
        </div>
    );
}
