import "./header.scss";
import { MdAddTask } from "react-icons/md";
import { Link } from "react-router-dom";

export default function HeaderComp() {
    return (
        <header>
            <Link to="/" className="logo">
                <MdAddTask fontSize={"32px"} /> Todo Land
            </Link>
        </header>
    );
}
