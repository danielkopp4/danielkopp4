import React from "react";
import { Preview } from "./Preview";

export interface Previewable {
    to: string,
    title: string,
    description: string
}

interface GriddedPreviewsProps {
    previews: Array<Previewable>
    cols?: number
}

const colDefault = 2;


const GriddedPreviews = (props: GriddedPreviewsProps) => {
    let cols: number | undefined = props.cols;

    if (cols === undefined) {
        cols = colDefault;
    }

    cols = Math.floor(Math.abs(cols));

    if (cols === 0) {
        console.error("cannot enter 0 cols for grid, will not display");
        return (<></>);
    }

    const previewComponents: Array<React.ReactNode> = props.previews.map((preview: Previewable, i: number) => {
        return (<Preview key={i} title={preview.title} to={preview.to}>{preview.description}</Preview>)
    });

    return (
        <div style={{display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`}}>
            {previewComponents}
        </div>
    );
}

export { GriddedPreviews };