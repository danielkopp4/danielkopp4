
interface CircleProps {
    name: string;
}

const Circle = (props: CircleProps) => {
    return (
        <div className={"circle circle"+props.name}></div>
    )
}

export { Circle };