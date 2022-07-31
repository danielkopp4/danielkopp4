import React from "react";

interface SectionProps {
    inline?: boolean;
    children?: React.ReactNode;
    className?: string;
}

const Section = (props: SectionProps) => {
    if (props.inline) {
        return (
            <span className={props.className}>
                {props.children}
            </span>
        )

    }

    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export { Section };