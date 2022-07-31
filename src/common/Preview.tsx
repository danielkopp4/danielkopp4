import { Card, CardProps } from "./Card"
import { Link } from 'react-router-dom';
import "./Preview.scss";

interface PreviewProps extends CardProps {
    title: string;
    to: string;
} 

const Preview = (props: PreviewProps) => {

    let childWidth = undefined;
    if (props.width) {
        childWidth = props.width.includes("%") ?  "100" : props.width;
    } else {
    }

    return (
        <div style={{width: props.width}} className="previewCard">
            <a href={props.to}>
                <Card {...props} width={childWidth}>
                    <div className="title">
                        {props.title}
                    </div>
                    <div className="children">
                        <div className="childrenContainer">
                            {props.children}
                        </div>
                    </div>
                </Card>
            </a>
        </div>
    )
}

export { Preview };