import { Break } from "../common/Break";
import { Heading } from "../common/Heading";
import { MainPane } from "../common/MainPane";
import { Title } from "../common/Title";
import { NavBar } from "../site-specific/NavBar";
import { SocialsBar } from "../common/SocialsBar";
import { GriddedPreviews } from "../common/GriddedPreviews";
import { AllProjects } from "./projects/ProjectList";
import { toPreviewables } from "../common/ComponentPreviewWrapper";
import { projectPreviews } from "../config/projects.temp";
import { ExperienceCard } from "../site-specific/ExperienceCard";
import { experiences, educationList, introBlurb } from "../config/resume";
import "./Resume.scss";
import { ReactNode } from "react";

const projectUrl = "/project";

const Resume = () => {
    document.title = "Resume";

    let expierienceCards: ReactNode[] = [];

    for (const i in experiences) {
        expierienceCards.push((
            <ExperienceCard key={i} {...experiences[i]} />
        ));
    }

    let educationCards: ReactNode[] = [];

    for (const i in educationList) {
        educationCards.push((
            <ExperienceCard key={i} {...educationList[i]} />
        )); 
    }

    return (
        <div className="resume">
            <NavBar />
            <Break amount="5%" />
            <MainPane lineSpacing={2} width="70%">
                <>
                    <Title title="Resume" subtitle="" />

                    {introBlurb}

                    <br/>
                    <br/>

                    <Heading>Experience</Heading>
                    <br/>
                    
                    {expierienceCards}
                    <br/>
                    <br />

                    <Heading>Projects</Heading>

                    <br/>
                    {/* <GriddedPreviews previews={toPreviewables(AllProjects, projectUrl)}/> */}
                    {/* temporary change while working on post content */}
                    {<GriddedPreviews previews={projectPreviews} />}

                    <br />
                    <br />

                    <Heading>Education</Heading>
                    <br/>

                    {educationCards}

                    <br/>
                    <br/>
            
                </>
                
            </MainPane>

            <div style={{position: "fixed", bottom: "2%", right: "2%"}}>
                <SocialsBar/>
            </div>
        </div>
    );
}

export { Resume };