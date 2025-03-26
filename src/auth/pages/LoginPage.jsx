import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        login('Katherine Hernández');

        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className="container mt-5">
            <h1 style={{ color: '#DEEFE7' }}>Login</h1>
            <hr />
            <button className="btn "
                style={{
                    backgroundColor: '#009688',
                    color: '#DEEFE7'
                }}
                onClick={onLogin}>
                Ingresa
            </button>
        </div>
    )
}
