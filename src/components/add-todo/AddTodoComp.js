import { AddCategoryComp } from "../";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAddCategoryModal } from "../../redux/modalSlice";
import { addTodo } from "../../redux/todosSlice";
import { useId } from "react";

export default function AddTodoComp() {
    const navigate = useNavigate();
    const id = useId();

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);

    const [form, setForm] = useState({ category: categories[0] });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm((form) => ({ ...form, [name]: value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo({ ...form, id: id }));
        navigate("/");
    };

    return (
        <div className="container">
            <AddCategoryComp />
            <header className="header" style={{ "--space": "center" }}>
                <h1>New Todo</h1>
            </header>
            <form className="form" onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="todo">New Todo</label>
                    <input
                        type="text"
                        name="todo"
                        value={form.todo || ""}
                        id="todo"
                        autoFocus={true}
                        required={true}
                        onChange={onChangeHandler}
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label htmlFor="category">
                        Category{" "}
                        <button
                            className="secondary-btn"
                            type="button"
                            onClick={() => dispatch(showAddCategoryModal())}
                        >
                            <AiOutlineAppstoreAdd fontSize={"18px"} />
                        </button>
                    </label>
                    <select
                        name="category"
                        id="category"
                        onChange={onChangeHandler}
                        defaultValue={"DEFAULT"}
                    >
                        <option disabled value="DEFAULT">
                            Select A Category
                        </option>
                        {[...categories].map((category) => {
                            return (
                                <option value={category} key={category}>
                                    {category}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <button className="primary-btn">Add Todo</button>
                </div>
                <div>
                    <Link to="/">cancel</Link>
                </div>
            </form>
        </div>
    );
}
