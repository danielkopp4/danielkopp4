import React from "react";
import "./MainPane.scss"

interface PaneProps {
    children?: React.ReactNode;
    lineSpacing?: number;
    width?: string;
}

const defaultWidth = "50%";

const MainPane = (props: PaneProps) => {
    const width = props.width ? props.width : defaultWidth;
    return (
        <div className="mainPane" style={{lineHeight: props.lineSpacing, width: width}}>
            {props.children}
        </div>
    );

}

export { MainPane };