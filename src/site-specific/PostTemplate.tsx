import { NavBar } from "../site-specific/NavBar";
import { MainPane } from "../common/MainPane";
import { Break } from "../common/Break";
import { Title } from "../common/Title";

export interface PostTemplateProps {
    title: string
    subtitle: string
    date: string
    children?: React.ReactNode
}

export const PostTemplate = (props: PostTemplateProps) => {
    document.title = props.title;
    return (
        <div>
            <NavBar />

            <Break amount="70px" />

            <MainPane lineSpacing={2}>
                <Title title={props.title} subtitle={props.subtitle + " - " + props.date} />
                {props.children}
            </MainPane>
        </div>
    );
}
