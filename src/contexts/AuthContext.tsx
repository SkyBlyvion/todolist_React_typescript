import { ReactElement, ReactNode, createContext, useContext, useState } from "react";
import { STORAGE_KEY } from "../constants/AppConstant";

// définition des propriétées de l'utilisateur
interface UserInfo {
    userId: string;
    name: string;
    email: string;
}

// définition du type de l'objet du contexte d'authentification
interface AuthContextType extends Partial<UserInfo> {
    setUserInfo: (userInfo: UserInfo) => void;
    signIn: (userInfo: UserInfo) => void;
    signOut: () => void;
}

// creétion du context ( par default l'user nest pas connecté)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// definition des propriétes du composant
interface AuthContextProviderProps {
    children: ReactNode;
}

// création du composant contexte
const AuthContextProvider = ({ children }: AuthContextProviderProps): ReactElement => {

    //on déclare le state de l'user
    const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

    //méthode pour connecter l'user
    // clé user correspond a l'interface userInfo et retourne :void
    const signIn = (user: UserInfo): void => {
        setUserInfo(user);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }

    //méthode pour déconnecter l'user
    const signOut = (): void => {
        setUserInfo(undefined);
        localStorage.removeItem(STORAGE_KEY);
    }

    //définition des propriétes du contexte
    // ... recupére les propriétes de l'user et son etat si défini, sinon undefined retourne tableau vide
    const contextValue: AuthContextType = {
        signIn,
        signOut,
        setUserInfo,
        ...userInfo || {}
    }

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

//méthode pour récupérer le contexte
const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuthContext must be used within an AuthContextProvider');
    }
    return context;
}

//il faut exporter les méthodes et les propriétes du contexte
export { AuthContext, AuthContextProvider, useAuthContext }