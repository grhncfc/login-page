import React,{useState,useContext} from "react";

const UserContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({children}) => {
    const [user, setUser] = useState("");

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};
