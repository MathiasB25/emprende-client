import axios from "axios";
import { createContext, useState, useEffect } from "react";
import useAxiosConfig from "../hooks/useAxiosConfig";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [ auth, setAuth ] = useState({});
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('WRkAxpZRq6Gv')
            if(!token) {
                setLoading(false);
                return
            }

            try {
                const config = useAxiosConfig();
                const { data } = await axios.post('/api/userProfile', { config });
                setAuth(data);
                setLoading(false);
            } catch (error) {
                setAuth({})
                setLoading(false);
            }
        })();
    }, [])

    return (
        <AuthContext.Provider value={{
            auth,
            loading,
            setAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }
export default AuthContext