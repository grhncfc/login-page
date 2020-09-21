import React,{useState,useContext} from "react";

const DarkThemeContext = React.createContext();
const DarkThemeToggleContext = React.createContext();

export const useDarkTheme = () => {
    return useContext(DarkThemeContext);
}
export const useDarkThemeToggle = () => {
    return useContext(DarkThemeToggleContext);
}


export const DarkThemeProvider = ({children}) => {
    const [darkTheme,setDarkTheme] = useState(true);
    return (
        <DarkThemeContext.Provider value={darkTheme}>
            <DarkThemeToggleContext.Provider value={setDarkTheme}>
                {children}
            </DarkThemeToggleContext.Provider>
        </DarkThemeContext.Provider>
    );
};
