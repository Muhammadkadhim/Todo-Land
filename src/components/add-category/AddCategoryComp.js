import "./addCategory.scss";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { showAddCategoryModal } from "../../redux/modalSlice";
import { addCategory } from "../../redux/categoriesSlice";

export default function AddCategoryComp() {
    const [form, setForm] = useState({});
    const dispatch = useDispatch();
    const showCategoryModal = useSelector(
        (state) => state.modal.addCategoryModal
    );

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm((form) => ({ ...form, [name]: value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(addCategory(form.category));
        dispatch(showAddCategoryModal());
    };

    return (
        <div className={`wrapper ${showCategoryModal ? "" : "hidden"}`}>
            <div
                className="overlay"
                onClick={() => dispatch(showAddCategoryModal())}
            ></div>
            <div className="add-category">
                <button
                    className="close-btn"
                    onClick={() => dispatch(showAddCategoryModal())}
                >
                    <GrFormClose fontSize={"20px"} />
                </button>
                <form className="form" onSubmit={onSubmitHandler}>
                    <div>
                        <label htmlFor="category">New Category</label>
                        <input
                            type="text"
                            name="category"
                            value={form.category || ""}
                            id="category"
                            autoFocus={true}
                            required={true}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div>
                        <button className="primary-btn">Add Category</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
