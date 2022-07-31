import "./Heading.scss";

let ids: Array<string> = [];

function getUniqueId(id: string): string {
    if (!(id in ids)) {
        ids.push(id);
        return id;
    }

    let newId: string = id + String(1000*Math.random());
    return getUniqueId(newId);
}

interface HeadingProps {
    children?: string;
    className?: string;
}

const Heading = (props: HeadingProps) => {
    let id: string = getUniqueId(
        props.children !== undefined ? props.children.replaceAll(" ", "-") : ""
    );

    return (
        <div id={id} className={props.className + " headingText"}>
            {props.children} <a href={"#"+id} className="visitParagraph">#</a>
        </div>
    );
}

export { Heading };