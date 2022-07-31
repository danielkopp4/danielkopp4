import { BackgroundAnimation } from "./background-animation/BackgroundAnimation";
import { Logo } from "./Logo";
import "./LogoAnimation.scss";

const LogoAnimation = () => {
    return (
        <div className="logoAnimation">
            <Logo full />
            <BackgroundAnimation />
        </div>
    );
}

export { LogoAnimation };