import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [ editorPage, setEditorPage ] = useState('');

    return (
        <AppContext.Provider value={{
            editorPage,
            setEditorPage
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider }
export default AppContext