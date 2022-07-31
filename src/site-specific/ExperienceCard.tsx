import { Card } from "../common/Card";
import { textToReact } from "../helpers/textToReact";
import "./ExperienceCard.scss";

export interface ExperienceCardProps {
    company: string
    title?: string
    description: string
    imageUrl?: string
}

const ExperienceCard = (props: ExperienceCardProps) => {
    return (
        <div className="expCard">
            <Card>
                <div className="expTitle">
                    <div>
                        <span className="company">{props.company}</span><span className="jobTitle">{props.title !== undefined && (": " + props.title)}</span>
                    </div>
                    {props.imageUrl && 
                        <img className="companyLogo" src={props.imageUrl} alt={props.company + " logo not found"}/>
                    }
                </div>
                <div className="jobDescription">
                    {textToReact(props.description)}
                </div>

            </Card>
        </div>
    );
}

export { ExperienceCard };