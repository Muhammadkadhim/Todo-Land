import "./layout.scss";

import { HeaderComp, NavbarComp } from "../components";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <HeaderComp />
            <NavbarComp />
            <main>{children}</main>
        </div>
    );
}
