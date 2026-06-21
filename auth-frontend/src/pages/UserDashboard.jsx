import { useEffect, useState } from 'react';
import API from '../services/api';

export default function UserDashboard() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        API.get('/test/user')
            .then(res => setMessage(res.data))
            .catch(() => setMessage('Failed to load dashboard.'));
    }, []);

    return (
        <div className="p-8 max-w-4xl mx-auto bg-white shadow rounded mt-10">
            <h1 className="text-3xl font-bold text-emerald-600 mb-4">User Dashboard</h1>
            <p className="p-4 bg-emerald-50 border-l-4 border-emerald-500 text-slate-700 text-lg">{message}</p>
        </div>
    );
}