import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../routes/authProvider';


function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();
    const { setAuthStatus } = useAuth();
   
    const handleRegister = async () => {
        try {
            // Make a POST request to the login endpoint
            const response = await axios.post('https://authorization-jwt.onrender.com/signup', {
                username,
                password,
                email,
                phone
            });
    
            const accessToken = response.data.accessToken;
    
           
            localStorage.setItem('accessToken', accessToken);
           
            setAuthStatus(true);
            navigate("/");

        } catch (error) {
            console.error('Process failed:', error.response.data);
            alert('ICannot Create Account');
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
             <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
             <input
                type="phone"
                placeholder="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;
