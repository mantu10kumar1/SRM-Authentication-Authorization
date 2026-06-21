import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav className="bg-slate-800 text-white p-4 flex justify-between items-center shadow-md">
            <Link to="/" className="text-xl font-bold tracking-wider text-cyan-400">AuthSystem</Link>
            <div className="space-x-4">
                {user ? (
                    <>
                        <span className="text-gray-300">Welcome, <b>{user.username}</b> ({user.role})</span>
                        {user.role === 'ROLE_ADMIN' && <Link to="/admin" className="hover:text-cyan-400">Admin</Link>}
                        {user.role === 'ROLE_USER' && <Link to="/user" className="hover:text-cyan-400">User Dashboard</Link>}
                        <button onClick={() => { logout(); navigate('/login'); }} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="hover:text-cyan-400">Login</Link>
                        <Link to="/signup" className="bg-cyan-500 hover:bg-cyan-600 px-3 py-1 rounded text-slate-900 font-semibold">Signup</Link>
                    </>
                )}
            </div>
        </nav>
    );
}