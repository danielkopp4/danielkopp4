import { Previewable } from "./GriddedPreviews";
import { Route } from 'react-router-dom';

class ComponentPreviewWrapper {
    public component: React.ReactNode;
    public to: string;
    public description: string;
    public title: string;

    constructor(component: React.ReactNode, to: string, description: string, title: string) {
        this.component = component;
        this.to = to;
        this.description = description;
        this.title = title;
    }
}

const toPreviewables = (input: Array<ComponentPreviewWrapper>, parentURL: string = "") => {
    return input.map((compWrapper: ComponentPreviewWrapper, i: number) => {
        compWrapper = JSON.parse(JSON.stringify(compWrapper));
        compWrapper.to = parentURL + compWrapper.to;
        return compWrapper as Previewable;
    });
}

const toRoutes = (input: Array<ComponentPreviewWrapper>) => {
    return input.map((compWrapper: ComponentPreviewWrapper, i: number) => {
        return (<Route key={i} path={compWrapper.to} element={compWrapper.component} />);
    });
}

export { ComponentPreviewWrapper, toPreviewables, toRoutes };