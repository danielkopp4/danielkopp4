import { Link } from "react-router-dom";
import "./Logo.scss";

export interface LogoProps {
    full?: boolean;
}

const Logo = (props: LogoProps) => {
    const logoClassName = props.full ? "fullLogo" : "shortLogo";
    const contents = props.full ? "Daniel Kopp" : "DK";
    
    if (props.full) {
        return (
            <div className={logoClassName}>
                {contents}
            </div>
        );
    } 

    return (
        <Link className={logoClassName} to={"/"}>
            {contents}
        </Link> 
    );

}

export { Logo };