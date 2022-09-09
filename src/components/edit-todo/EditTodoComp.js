import React, { useEffect, useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editTodo } from "../../redux/todosSlice";
import { showAddCategoryModal } from "../../redux/modalSlice";
import AddCategoryComp from "../add-category/AddCategoryComp";

export default function EditTodoComp() {
    const { todoId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const todos = useSelector((state) => state.todos.todos);
    const categories = useSelector((state) => state.categories.categories);

    const [form, setForm] = useState({});

    useEffect(() => {
        todos.map((todo) => {
            if (todo.id === todoId) {
                setForm((form) => ({
                    ...form,
                    newTodo: todo.todo,
                    newCategory: todo.category,
                }));
            }
        });
    }, [todoId]);

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm((form) => ({ ...form, [name]: value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(
            editTodo({
                id: todoId,
                newTodo: form.newTodo,
                newCategory: form.newCategory,
            })
        );
        navigate("/");
    };

    return (
        <div className="container">
            <AddCategoryComp />
            <header className="header" style={{ "--space": "center" }}>
                <h1>Edit Todo</h1>
            </header>
            <form className="form" onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="editedTodo">Edit Todo</label>
                    <input
                        type="text"
                        name="newTodo"
                        id="newTodo"
                        value={form.newTodo || ""}
                        autoFocus={true}
                        required={true}
                        autoComplete="off"
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="newCategory">
                        Change Category
                        <button
                            className="secondary-btn"
                            type="button"
                            onClick={() => dispatch(showAddCategoryModal())}
                        >
                            <AiOutlineAppstoreAdd fontSize={"18px"} />
                        </button>
                    </label>
                    <select
                        name="newCategory"
                        id="newCategory"
                        defaultValue={"DEFAULT"}
                    >
                        <option disabled value="DEFAULT">
                            Select A Category
                        </option>
                        {categories.map((category) => {
                            return (
                                <option value={category} key={category}>
                                    {category}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div>
                    <button className="primary-btn">Edit Todo</button>
                </div>
                <div>
                    <Link to="/">Cancel</Link>
                </div>
            </form>
        </div>
    );
}
