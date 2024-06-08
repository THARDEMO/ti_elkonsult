import { useState } from 'react';
import PubSub from '../logic/PubSub.js';
import Auth from './context/auth.jsx';


const Admin = () => {
    const [page, setPage] = useState( 'auth');

    PubSub.Sub({
        event: 'Auth::User',
        listener: () => setPage( 'dashboard')
    });
    if( sessionStorage.getItem( 'auth') && page !== 'dashboard') setPage('dashboard');

    //CASE NOT AUTHENTICATED
    if( page === 'auth') {
        return (
            <>
                <p>ADMIN</p>
                <Auth />
            </>
        )
    }

    if( page === 'dashboard') {
        return  ( 
            <>
                <p>Dashboard</p>
            </>
        ) 
    }

} 

export default Admin;