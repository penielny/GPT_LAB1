import React, { createContext, useContext, useState } from 'react';


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')


    const contextValue = {
        theme, 
        setTheme,  
        isLight :  theme === ThemeState.light
    };


    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};


export const ThemeState = {
    dark:"dark",
    light:"light",
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within an ThemeProvider');
    }
    return context;
};
