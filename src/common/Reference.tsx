import "./Reference.scss";

export interface ReferenceProps {
    referenceNum: number;
    id: string;
    left?: string,
    right?: string
}

const Reference = (props: ReferenceProps) => {
    const left = props.left ? props.left : "[";
    const right = props.right ? props.right : "]";
    return (
        <a className="reference" href={"#"+props.id}>
            {left + props.referenceNum + right}
        </a>
    );
}

export { Reference };