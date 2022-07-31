import { PostTemplate } from "../../site-specific/PostTemplate";
import { ComponentPreviewWrapper } from "../../common/ComponentPreviewWrapper";
import { CitationManager } from "../../common/Citation";
import { CodeBlock } from "../../common/CodeBlock";
import { Heading } from "../../common/Heading";

const title = "Infinite Animation Generation";
const subtitle = "Infinitely Looping Animations with Eulerian Motion";


const EulerianMotion = () => {
    const citationManager = new CitationManager({
        // include uw paper
        "github-repo": (<>{"Kopp D., "}<a href="https://github.com/danielkopp4/AnimationUsingEulerianMotion">https://github.com/danielkopp4/AnimationUsingEulerianMotion</a></>)
    });

    return (
        <PostTemplate title={title} subtitle={subtitle} date="May 27, 2022">

            This is where the text about implementing alpha zero would go! {citationManager.generateReference("alpha-paper")}
         
            <br/><br/>

            <Heading>
                Overview and Scope
            </Heading>

            <br/>

            <Heading>
                Background
            </Heading>

            <br/>

            <Heading>
                Implementation Details
            </Heading>

            <br/>

            <Heading>
                Use
            </Heading>

            <CodeBlock
                language={"python"}
                fileUrl={process.env.PUBLIC_URL + "/snippets/alphazero.py"}
            />

            <br/>

            <Heading>
                References
            </Heading>
            <br/>
            
            {citationManager.generateCitations()}
        </PostTemplate>
    );
}

const eulerianMotionWrapped = new ComponentPreviewWrapper(
    (<EulerianMotion/>),
    "/eulerian-motion-animation",
    "He was excellent indeed, madam: the king very lately spoke of him admiringly and mourningly: he was skilful enough to have lived still, if knowledge could be set up against mortality. His sole child, my lord, and bequeathed to my overlooking. I have those hopes of her good that her education promises; her dispositions she inherits, which makes fair gifts fairer; for where an unclean mind carries virtuous qualities, there commendations go with pity; they are virtues and traitors too; in her they are the better for their simpleness; she derives her honesty and achieves her goodness.",
    title
)

export { EulerianMotion, eulerianMotionWrapped };