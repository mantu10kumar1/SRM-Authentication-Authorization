import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // formData me { username: "aapka_email", password: "password" } ja raha hai
        const response = await API.post('/auth/signin', formData);
        login(response.data); 
        if (response.data.role === 'ROLE_ADMIN') navigate('/admin');
        else navigate('/user');
    } catch (err) {
        setError(err.response?.data || 'Invalid Credentials');
    }
};

   return (
    <div className="flex justify-center items-center h-[85vh] bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">Sign In</h2>
            {error && <p className="text-red-500 text-sm mb-4 bg-red-50 p-2 rounded border border-red-200">{error}</p>}
            
            {/* 1. Username input ko Email input me badla */}
            <input 
                type="email" // Type email kiya taaki validation ho ske
                placeholder="Email Address" 
                className="w-full p-2 mb-4 border rounded focus:outline-cyan-500" 
                value={formData.username} // State field same rahega taki DTO match ho
                onChange={e => setFormData({ ...formData, username: e.target.value })} 
                required 
            />
            
            {/* 2. Password input */}
            <input 
                type="password" 
                placeholder="Password" 
                className="w-full p-2 mb-6 border rounded focus:outline-cyan-500" 
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })} 
                required 
            />
            
            <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold p-2 rounded transition">Login</button>
        </form>
    </div>
);
}