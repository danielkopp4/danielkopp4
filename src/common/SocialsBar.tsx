import { ReactComponent as LinkedInLogo } from "../imgs/linkedin.svg";
import { ReactComponent as GitHubLogo } from "../imgs/github.svg";
import "./SocialsBar.scss";
import { socials } from "../config/socials";
 

const SocialsBar = () => {
    return (
        <div>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInLogo className="linkedInSVG"/>
            </a>

            <a href={socials.github} target="_blank" rel="noopener noreferrer">
                <GitHubLogo className="githubSVG"/>
            </a>
        </div>
    )
}

export { SocialsBar };