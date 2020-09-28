import React,{useState,useContext} from "react";

const UserContext = React.createContext();
const UserSetContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext);
};
export const useSetUser = () => {
    return useContext(UserSetContext);
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState("");

    return (
        <UserContext.Provider value={user}>
            <UserSetContext.Provider value={setUser}>
                {children}
            </UserSetContext.Provider>
        </UserContext.Provider>
    );
};
