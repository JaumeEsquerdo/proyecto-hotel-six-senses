import { createContext, useContext, useState } from "react";


const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); //abrir / cerrar menu
    const [selectedRoom, setSelectedRoom] = useState(null); // aññadir hab a la reserva




    return (
        <AppContext.Provider
            value={{

                isMenuOpen,
                setIsMenuOpen,
                selectedRoom,
                setSelectedRoom,

            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);

