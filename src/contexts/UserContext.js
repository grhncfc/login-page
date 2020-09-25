import React,{useState,useContext} from "react";
import userData from "../assets/user";

const UserContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({children}) => {
    const [user] = useState({userData});

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};
