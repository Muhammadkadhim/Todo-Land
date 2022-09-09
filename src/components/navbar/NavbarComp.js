import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import {
    MdOutlineDoneAll,
    MdPlaylistAdd,
    MdOutlineDeleteOutline,
} from "react-icons/md";

export default function NavbarComp() {
    return (
        <nav>
            <ul className="navlist">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <FaTasks fontSize={"24px"} />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/completed-todos"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <MdOutlineDoneAll fontSize={"24px"} />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/trash"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <MdOutlineDeleteOutline fontSize={"24px"} />
                    </NavLink>
                </li>
                <span>|</span>
                <li>
                    <NavLink
                        to="/add-todo"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <MdPlaylistAdd fontSize={"28px"} />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
