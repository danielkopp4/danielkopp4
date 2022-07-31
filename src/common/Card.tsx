import "./Card.scss";

export interface CardProps {
    padding?: string
    children?: React.ReactNode
    width?: string
    className?: string
}

const Card = (props: CardProps) => {
    const cardClassName = "card" + (props.className ? " " + props.className : "");
    return (
        <div className={cardClassName} style={{padding: props.padding, width: props.width}}>
            {props.children}
        </div>
    );
}

export { Card };