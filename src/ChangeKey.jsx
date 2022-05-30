import React from "react";
import useKey from "./keyProvider";

function ChangeKey() {
    const { changeKey } = useKey();
    return (
        <div>
            <button
                onClick={() => {
                    changeKey((Math.random() * 1000).toFixed());
                }}
            >
                change key
            </button>
        </div>
    );
}

export default ChangeKey;
