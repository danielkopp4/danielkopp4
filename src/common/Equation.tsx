import { Section } from "./Section";
import { Reference } from "./Reference";
import "./Equation.scss";
var Latex = require('react-latex');

interface EquationProps {
    equation: string;
    block?: boolean;
    id?: string;
    reference?: number;
}

type EquationSet = { [key: string]: string }; // maps name of eq to latex eq
type ReferenceMap = { [key: string]: number};

class EquationManager {
    equations: EquationSet;
    referenceMap: ReferenceMap;

    constructor(equations: EquationSet) {
        this.equations = equations;

        this.referenceMap = {};

        let counter = 0;
        for (const name in equations) {
            this.referenceMap[name] = counter;
            counter++;
        }
    }

    generateReference(name: string) {
        return (<Reference referenceNum={this.referenceMap[name]} id={name}/>);
    }

    generateEquation(name: string) {
        return (<Equation equation={this.equations[name]} id={name} reference={this.referenceMap[name]} block/>);
    }
}

const hasReference = (props: EquationProps) => {
    return props.reference !== undefined && props.id !== undefined;
}

const ReferenceChecker = (props: EquationProps) => {
    if (props.reference !== undefined && props.id !== undefined) {
        return <Reference referenceNum={props.reference} id={props.id}/>;
    }

    return (<></>);
}

const Equation = (props: EquationProps) => {
    const bodyText = "$$" + props.equation + "$$";
    let sectionClassName = "blockedEquation";
    sectionClassName += props.block && hasReference(props)  ? " referenced" : "";

    return (
        <Section className={sectionClassName} inline={!props.block}>
            <Latex id={props.id} displayMode={props.block}>
                {bodyText}
            </Latex>
            <ReferenceChecker {...props} />
        </Section>
    );
}

interface EQManagedProps {
    eqManager: EquationManager,
    name: string
}

const ManagedEquation = (props: EQManagedProps) => {
    return props.eqManager.generateEquation(props.name);
}

const ManagedReference = (props: EQManagedProps) => {
    return props.eqManager.generateReference(props.name);
}


export { Equation, EquationManager, ManagedEquation, ManagedReference };