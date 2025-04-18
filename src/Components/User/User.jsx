import React, { Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import UsersDetails2 from '../UserDetails2/UsersDetails2';

const User = ({ user }) => {
    const [showInfo, setShowInfo] = useState(false)
    const { id, name, email, phone } = user;
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/users/${id}`)
    }
    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={handleNavigate}>Detail of {id}</button>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'} Info</button>
            {
                showInfo && <Suspense fallback ={<span>Loading...</span>}>
                    <UsersDetails2 userPromise = {userPromise}></UsersDetails2>

                </Suspense>
            }
        </div>
    );
};

export default User;