import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate, useLocation } from 'react-router-dom';
import FlashMessage from 'react-flash-message'

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);
    const { pathname, search } = useLocation();


    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);


    return (logged)
        ? children
        : <Navigate to="/login" />
    {/* <>
            <FlashMessage duration={5000} >
                < strong > ¡Desapareceré en 5 segundos! </strong>
            </FlashMessage>
            <Navigate to="/login" />
        </> */}

}
