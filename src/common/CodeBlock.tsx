import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'; 
import "./CodeBlock.scss";

interface CodeBlockProps {
    code?: string
    language?: string
    fileUrl?: string 
}

const CodeBlock = (props: CodeBlockProps) => {
    const [code, setCode] = useState<string | undefined>(props.code);

    if (props.fileUrl) {
        fetch(props.fileUrl)
            .then((r) => r.text())
            .then(text => {
                setCode(text);
            });
    }

    if (code === undefined) {
        setCode("");
    }

    return (
        <div className="codeBlock">
            <SyntaxHighlighter language={props.language} style={atomOneDark} showLineNumbers>
                {code as string}
            </SyntaxHighlighter>
        </div>
    )
}

export { CodeBlock };