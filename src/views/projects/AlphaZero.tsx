import { PostTemplate } from "../../site-specific/PostTemplate";
import { ComponentPreviewWrapper } from "../../common/ComponentPreviewWrapper";
import { CitationManager } from "../../common/Citation";
import { CodeBlock } from "../../common/CodeBlock";
import { Heading } from "../../common/Heading";

const title = "AlphaZero Implementation";
const subtitle = "Reinforcement Learning with Chess";


const AlphaZero = () => {
    const citationManager = new CitationManager({
        "alpha-paper": (<>{"Silver et al., (2018). A general reinforcement learning algorithm that Masters Chess, Shogi, and go through self-play. Science, 362(6419), 1140–1144. "}<a href="https://doi.org/10.1126/science.aar6404">https://doi.org/10.1126/science.aar6404</a></>),
        "alpha-stanford": (<>{"Nair, S. (2017, September 29). A Simple Alpha(Go) Zero Tutorial. Stanford University. Retrieved May 27, 2022, from "}<a href="https://web.stanford.edu/~surag/posts/alphazero.html">{"https://web.stanford.edu/~surag/posts/alphazero.html"}</a></>),
        "github-repo": (<>{"Kopp D., "}<a href="https://github.com/danielkopp4/AlphaZeroChess">https://github.com/danielkopp4/AlphaZeroChess</a></>)
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
                Usage
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

const alphaZeroWrapped = new ComponentPreviewWrapper(
    (<AlphaZero/>),
    "/alpha-zero",
    "He was excellent indeed, madam: the king very lately spoke of him admiringly and mourningly: he was skilful enough to have lived still, if knowledge could be set up against mortality. His sole child, my lord, and bequeathed to my overlooking. I have those hopes of her good that her education promises; her dispositions she inherits, which makes fair gifts fairer; for where an unclean mind carries virtuous qualities, there commendations go with pity; they are virtues and traitors too; in her they are the better for their simpleness; she derives her honesty and achieves her goodness.",
    title
)

export { AlphaZero, alphaZeroWrapped };