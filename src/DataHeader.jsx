import useKey from "./keyProvider";

function DataHeader() {
    const { key } = useKey();
    return <div>Data Header: {key}</div>;
}

export default DataHeader;
