
import  { Equation, EquationManager, ManagedEquation, ManagedReference } from "../../common/Equation";
import { Heading } from "../../common/Heading";
import { PostTemplate } from "../../site-specific/PostTemplate";
import { ComponentPreviewWrapper } from "../../common/ComponentPreviewWrapper";

const title = "First Post";
const subtitle = "Introduction to the Site";


const FirstPost = () => {
    const eqManager = new EquationManager({
        "x+2": "x + 2",
        "pythagoras": "c^2 = a^2 + b^2"
    });

    return (
        <PostTemplate title={title} subtitle={subtitle} date="5th of november">

                This NOT is the home page with an equation <Equation equation="\int_{2}^3 (x + 3) dx" />.

                <Equation equation="\int_{2}^3 \frac{\partial x}{\partial y} \partial y = [x]_{2}^{3}" block/>
                
                <ManagedEquation eqManager={eqManager} name="pythagoras" />

                <ManagedReference eqManager={eqManager} name="pythagoras" />

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                <Heading>l'autre</Heading>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <p>
                    Hello
                </p>

                
        </PostTemplate>
    );
}

const wrappedFirstPost = new ComponentPreviewWrapper(
    (<FirstPost/>),
    "/first-post",
    "He was excellent indeed, madam: the king very lately spoke of him admiringly and mourningly: he was skilful enough to have lived still, if knowledge could be set up against mortality. His sole child, my lord, and bequeathed to my overlooking. I have those hopes of her good that her education promises; her dispositions she inherits, which makes fair gifts fairer; for where an unclean mind carries virtuous qualities, there commendations go with pity; they are virtues and traitors too; in her they are the better for their simpleness; she derives her honesty and achieves her goodness.",
    title
)

export { FirstPost, wrappedFirstPost };