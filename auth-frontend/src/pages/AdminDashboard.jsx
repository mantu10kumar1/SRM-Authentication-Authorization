import { useEffect, useState } from 'react';
import API from '../services/api';

export default function AdminDashboard() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        API.get('/test/admin')
            .then(res => setMessage(res.data))
            .catch(() => setMessage('Failed to load secure data.'));
    }, []);

    return (
        <div className="p-8 max-w-4xl mx-auto bg-white shadow rounded mt-10">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Admin Console</h1>
            <p className="p-4 bg-red-50 border-l-4 border-red-500 text-slate-700 font-mono text-lg">{message}</p>
        </div>
    );
}