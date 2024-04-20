import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../routes/authProvider';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setAuthStatus } = useAuth();
   
    const handleLogin = async () => {
        try {
            // Make a POST request to the login endpoint
            const response = await axios.post('https://authorization-jwt.onrender.com/login', {
                username,
                password
            });
    
            const accessToken = response.data.accessToken;
    
           
            localStorage.setItem('accessToken', accessToken);
           
            setAuthStatus(true);
            navigate("/");

        } catch (error) {
            console.error('Login failed:', error.response.data);
            alert('Invalid username or password');
        }
    };
    

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
