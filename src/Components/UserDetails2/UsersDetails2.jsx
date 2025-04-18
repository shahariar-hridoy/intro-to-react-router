import React, { use } from 'react';

const UsersDetails2 = ({userPromise}) => {
    const {name, username} = use(userPromise);
    return (
        <div>
            <p><small>User name: {username}</small></p>
            <p>name: {name}</p>
        </div>
    );
};

export default UsersDetails2;