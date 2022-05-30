import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { KeyProvider } from "./keyProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <KeyProvider>
            <App />
        </KeyProvider>
    </React.StrictMode>
);
