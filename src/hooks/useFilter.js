import { useEffect, useState } from "react";

export default function useFilter(todos, selectedCategory) {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        let filteredData;

        if (selectedCategory === "All") {
            filteredData = todos;
        } else {
            filteredData = todos.filter(
                (todo) => todo.category === selectedCategory
            );
        }

        setFilteredTodos(filteredData);
    }, [todos, selectedCategory]);

    return { filteredTodos };
}
