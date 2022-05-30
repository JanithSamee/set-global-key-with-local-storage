import React, { useEffect, useState } from "react";
import ChangeKey from "./ChangeKey";
import DataHeader from "./DataHeader";
import useKey from "./keyProvider";

function App() {
    const { key } = useKey();
    return (
        <div>
            <h1>Local Storage</h1>
            <ChangeKey></ChangeKey>
            <hr />
            {key && <DataHeader value={key}></DataHeader>}
        </div>
    );
}

export default App;
