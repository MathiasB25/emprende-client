import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [ store, setStore ] = useState({});
    const [ editorPage, setEditorPage ] = useState('');

    return (
        <AppContext.Provider value={{
            store,
            setStore,
            editorPage,
            setEditorPage
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider }
export default AppContext