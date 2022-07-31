import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import "./NavBar.scss";


export const NavBar = () => {
    return (
        <div className="navBar">
            <span className="logoWrapper">
                <Logo />
            </span>

            {/* <Link className="navLink" to="/post">
                <div>
                    Posts
                </div>
            </Link> */}

            <Link className="navLink" to="/resume">
                <div>
                    Resume
                </div>
            </Link>

            {/* <Link className="navLink" to="/project">
                <div>
                    Projects
                </div>
            </Link> */}
        </div>
    );
}