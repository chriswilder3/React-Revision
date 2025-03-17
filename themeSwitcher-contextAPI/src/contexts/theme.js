import React, { useContext } from "react";

export const ThemeContext = React.createContext({
    themeMode: "light",
    lightTheme : () => {},
    darkTheme : () => {}
}) 

export const ThemeContextProvider = ThemeContext.Provider

export const useTheme = () => {
    // A direct hook to access this context
    return useContext(ThemeContext)
}