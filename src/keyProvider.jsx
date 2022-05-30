import { createContext, useContext, useState, useEffect } from "react";

const keyContext = createContext(null);

const useKey = () => {
    return useContext(keyContext);
};
export default useKey;

export function KeyProvider({ children }) {
    const [key, setkey] = useState(0);
    const changeKey = (_key) => {
        setkey(_key);
    };
    useEffect(() => {
        console.count("get");
        setkey(localStorage.getItem("key"));
    }, []);

    useEffect(() => {
        if (key !== 0) {
            console.count("set");
            localStorage.setItem("key", key);
        }
    }, [key]);

    return (
        <keyContext.Provider value={{ changeKey, key }}>
            {children}
        </keyContext.Provider>
    );
}
