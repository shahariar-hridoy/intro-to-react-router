import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    const {name, email, phone, website} =user

    const navigate = useNavigate();
    return (
        <div>
            <h3>User details here</h3>
            <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <p><small>Phone: {phone}</small></p>
            <p>Website: {website}</p>
            <button onClick={() => navigate(-1) }>Go Back</button>
            </div>
        </div>
    );
};

export default UserDetails;