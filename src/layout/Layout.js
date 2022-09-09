import "./layout.scss";

import { HeaderComp, NavbarComp } from "../components";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <HeaderComp />
            <main>{children}</main>
            <NavbarComp />
        </div>
    );
}
