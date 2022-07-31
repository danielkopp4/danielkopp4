
const getBullet = (firstString: string) => {
    var delimiter = firstString.replace("[UL]", "");
    if (delimiter.trim() === "") {
        return " - ";
    }

    return `${delimiter}`;
};

const textToReact = (input: string) => {
    var temp = input.split("\n");
    if (temp[0].startsWith("[UL]")) {
        const firstLine = temp[0];
        temp = temp.splice(1, temp.length - 1);
        return (
            <ul style={{ listStyleType: getBullet(firstLine) }}>
                {temp.map((item) => (<li key={item}>{item.replace("-", "")}</li>))}
            </ul>
        )
    }
    return temp.map((item) => (<div key={item}>{item}</div>));
};

export { textToReact };