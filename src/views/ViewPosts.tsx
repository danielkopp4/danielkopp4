import { GriddedPreviews } from "../common/GriddedPreviews";
import { toPreviewables, toRoutes } from "../common/ComponentPreviewWrapper";
import { AllPosts } from "./posts/PostList";
import { NavBar } from "../site-specific/NavBar";
import { Routes, Route } from "react-router-dom";
import { ParentURLProps } from "../common/ParentURLProps";


const ViewPostsPage = (props: ParentURLProps) => {
    document.title = "View Posts";
    return (
        <Routes>
            {toRoutes(AllPosts)}
            <Route path={"*"} element={
                <div>
                    <NavBar />
                    <div style={{width: "70%", margin: "auto"}}>
                        <GriddedPreviews previews={toPreviewables(AllPosts, props.url)}/>
                    </div>
                </div>
            }>
            </Route>
        </Routes>
    )
}

export { ViewPostsPage };