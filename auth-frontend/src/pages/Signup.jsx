import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

export default function Signup() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '', role: 'USER' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post('/auth/signup', formData);
            alert('Registration successful! Please login.');
            navigate('/login');
        } catch (err) {
            setError(err.response?.data || 'Registration failed');
        }
    };

    return (
        <div className="flex justify-center items-center h-[85vh] bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">Sign Up</h2>
                {error && <p className="text-red-500 text-sm mb-4 bg-red-50 p-2 rounded">{error}</p>}
                <input type="text" placeholder="Username" className="w-full p-2 mb-4 border rounded focus:outline-cyan-500" onChange={e => setFormData({ ...formData, username: e.target.value })} required />
                <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded focus:outline-cyan-500" onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded focus:outline-cyan-500" onChange={e => setFormData({ ...formData, password: e.target.value })} required />
                <select className="w-full p-2 mb-6 border rounded focus:outline-cyan-500" onChange={e => setFormData({ ...formData, role: e.target.value })}>
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                </select>
                <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold p-2 rounded transition">Register</button>
            </form>
        </div>
    );
}