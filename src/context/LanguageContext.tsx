import React, { createContext } from "react";
import useTranslationn from "../hooks/useTranslation";


export interface LanguageContextInterface {
    children?: React.ReactNode;
    t?: Function
    updateLanguage?: Function
    language?: string
}
const contextDefaultValues: LanguageContextInterface = {
    t: () => { },
    updateLanguage: () => { },
    language: ""
};
export const LanguageContext = createContext(contextDefaultValues);
export const LanguageProvider: React.FC<LanguageContextInterface> = ({ children }) => {
    const { t, language, updateLanguage } = useTranslationn();
    return (
        <LanguageContext.Provider value={{ language, updateLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
};