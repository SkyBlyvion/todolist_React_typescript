import { ReactElement, ReactNode, createContext, useState } from "react";
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
const SessionContextProvider = ({children}:SessionContextProviderProps):ReactElement => {
    const [inSession, setInSession] = useState<boolean>(false);
    const {setUserInfo} = useAuthContext();

    //méthode pour recuperer les informations de l'utilisateur
}
