
interface BreakProps {
    amount: string
}

const Break = (props: BreakProps) => {
    return (
        <div className="break" style={{marginBottom: props.amount}}></div>
    );
}

export { Break };