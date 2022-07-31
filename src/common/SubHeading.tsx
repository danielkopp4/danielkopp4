import "./SubHeading.scss";

interface SubHeadingProps {
    children?: string;
}

const SubHeading = (props: SubHeadingProps) => {
    return (
        <p className={"subHeadingText"}>
            {props.children}
        </p>
    );
}

export { SubHeading };