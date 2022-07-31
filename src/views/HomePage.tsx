
import { NavBar } from "../site-specific/NavBar";
import { LogoAnimation } from "../site-specific/LogoAnimation";
import "./HomePage.scss";

export const HomePage = () => {
    document.title = "DK Homepage";
    return (
        <div>
            <NavBar />
            <LogoAnimation /> 

            <p className="homePageText">
                Interested in Machine Learning
            </p>
        </div>
    );
}
