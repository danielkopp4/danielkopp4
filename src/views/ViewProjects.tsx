import { GriddedPreviews } from "../common/GriddedPreviews";
import { toPreviewables, toRoutes } from "../common/ComponentPreviewWrapper";
import { AllProjects } from "./projects/ProjectList";
import { NavBar } from "../site-specific/NavBar";
import { Routes, Route } from "react-router-dom";
import { ParentURLProps } from "../common/ParentURLProps";


const ViewProjectPage = (props: ParentURLProps) => {
    document.title = "View Projects";
    return (
        <Routes>
            {toRoutes(AllProjects)}
            <Route path={"*"} element={
                <div>
                    <NavBar />
                    <div style={{width: "70%", margin: "auto"}}>
                        <GriddedPreviews previews={toPreviewables(AllProjects, props.url)}/>
                    </div>
                </div>
            }>
            </Route>
        </Routes>
    )
}

export { ViewProjectPage };