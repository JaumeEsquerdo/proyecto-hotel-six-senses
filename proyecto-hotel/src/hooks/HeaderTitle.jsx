import { useLocation } from "react-router-dom";


/*  para tener en el header la seccion */
export const useHeaderTitle = () => {
    const { pathname } = useLocation();

    switch (pathname) {
        case '/reservar':
            return 'reservar';
        case '/habitaciones':
            return 'habitaciones';
        case '/instalaciones':
            return 'instalaciones';
        default:
            return '';
    }
}
