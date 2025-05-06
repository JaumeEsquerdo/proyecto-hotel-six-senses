import { createContext, useContext, useState } from "react";


const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); //abrir / cerrar menu





    return (
        <AppContext.Provider
            value={{

                isMenuOpen,
                setIsMenuOpen,

            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);

