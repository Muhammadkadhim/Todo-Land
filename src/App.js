import "./scss/global.scss";
import { Routes, Route } from "react-router-dom";
import {
    AddTodoComp,
    CompletedTodosComp,
    EditTodoComp,
    TodosComp,
    TrashComp,
} from "./components";
import Layout from "./layout/Layout";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<TodosComp />} />
                <Route
                    path="/completed-todos"
                    element={<CompletedTodosComp />}
                />
                <Route path="/trash" element={<TrashComp />} />
                <Route path="/add-todo" element={<AddTodoComp />} />
                <Route path="/edit-todo/:todoId" element={<EditTodoComp />} />
            </Routes>
        </Layout>
    );
}

export default App;
