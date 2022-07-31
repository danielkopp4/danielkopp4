import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { Break } from "./Break";
import "./Title.scss";

interface TitleProps {
    title: string,
    subtitle?: string
}

const Title = (props: TitleProps) => {
    return (
        <div>
            <Heading className="title">
                {props.title}
            </Heading>
            {props.subtitle && <SubHeading>
                {props.subtitle}
            </SubHeading>}
            <Break amount="30px"/>
        </div>
    );
}

export { Title };