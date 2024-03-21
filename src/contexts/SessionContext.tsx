import { ReactElement, ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";

// on définit l'objet du contexte de session
interface SessionContextType {
    inSession: boolean;
    setInSession: (inSession: boolean) => void;
}

//création du contexte
const SessionContext = createContext<SessionContextType | null>(null);

//propriété du composant
interface SessionContextProviderProps {
    children: ReactNode;
}

// création du composant contexte
const SessionContextProvider = ({ children }: SessionContextProviderProps): ReactElement => {
    const [inSession, setInSession] = useState<boolean>(false);
    const { setUserInfo } = useAuthContext();

    //méthode pour recuperer les informations de l'utilisateur
    const getUserInfo = async () => {
        const userString = localStorage.getItem('STORAGE_KEY');
        if (userString) {
            const user = JSON.parse(userString);
            setUserInfo(user);
            setInSession(true);
        } else {
            setInSession(false);
        }
    };

    // appel de la méthode pour recuperer les informations de l'utilisateur
    useEffect(() => {
        getUserInfo();
    }, [setUserInfo, inSession]);

    //définition des propriétes du contexte
    const valueContext: SessionContextType = {
        inSession,
        setInSession
    }

    return <SessionContext.Provider value={valueContext}>{children}</SessionContext.Provider>
}

//methode pour recuperer le contexte
const useSessionContext = (): SessionContextType => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error('useSessionContext must be used within an SessionContextProvider');
    }
    return context;
}

export { SessionContextProvider, useSessionContext, SessionContext }