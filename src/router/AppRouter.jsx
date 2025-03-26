import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
    return (
        <>

            <Routes>

                {/* METODO PARA HACER UNA RUTA PUBLICA */}
{/* 
                <Route path="/login" element=
                    {<PublicRoute>
                        <LoginPage />

                    </PublicRoute>} /> */}


                {/* METODO PARA HACER UNA RUTA PRIVADA */}

                <Route path="/*" element=
                    {<PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>} />


            </Routes>
        </>
    )
}

