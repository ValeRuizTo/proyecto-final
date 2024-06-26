import { useState, useEffect } from 'react';
import imgProfile from '../../assets/profile.jpg';

const Perfil = () => {
    const [userData, setUserData] = useState({}); // Estado para almacenar la información del usuario

    useEffect(() => {
        // Recuperar el token y el nombre de usuario de localStorage
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');

        // Verificar si hay un nombre de usuario almacenado
        if (username) {
            // Hacer la solicitud GET a la API con el nombre de usuario como parte de la URL
            fetch(`https://api-proyecto-beryl.vercel.app/profile/${username}`, {
                headers: {
                    'Authorization': token // Incluye el token en el encabezado de autorización
                }
            })
            .then(response => response.json())
            .then(data => {
                // Actualizar el estado con los datos del usuario recibidos de la API
                setUserData(data);
            })
            .catch(error => console.error('Error fetching user data:', error));
        }
    }, []);

    return (
        <div className="right-container">
            <div className="img-container-right">
                 <img src={imgProfile} alt="Profile" />
                 <p className="user">{userData.username}</p>
                 <p className="email-user">{userData.email}</p>
            </div>
        </div>
    );
}

export default Perfil;
