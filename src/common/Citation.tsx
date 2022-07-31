import { Reference } from "./Reference";
import { Card } from "./Card";
import { ReactNode } from "react";
import "./Citation.scss";


type CitationSet = { [key: string]: ReactNode };
type ReferenceMap = { [key: string]: number};

class CitationManager {
    citations: CitationSet;
    referenceMap: ReferenceMap;

    constructor(citations: CitationSet) {
        this.citations = citations;

        this.referenceMap = {};

        let counter = 0;
        for (const name in citations) {
            this.referenceMap[name] = counter;
            counter++;
        }
    }

    generateReference(name: string) {
        return (<Reference referenceNum={this.referenceMap[name]} id={name}/>);
    }

    generateCitations() {
        let result: ReactNode[] = [];
        for (const name in this.citations) {
            result.push((
                <div key={name} id={name} className="citation">
                    {this.generateReference(name)}
                    {" "}
                    {this.citations[name]}
                </div>
            ));
        }

        return (
            <Card>
                <div className="monospaced">
                    {result}
                </div>
            </Card>
        );
    }
}


interface CMManagedProps {
    citationManager: CitationManager
    name: string
}

const ManagedCitationReference = (props: CMManagedProps) => {
    return props.citationManager.generateReference(props.name);
}


export { ManagedCitationReference, CitationManager };