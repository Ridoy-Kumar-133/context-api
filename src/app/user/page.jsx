'use client';
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UsersPage = () => {

    const data = useContext(UserContext);

    const { users} = data;
    
    return (
        <div>
            <h2>This is users page : </h2>
             <div>
                <h1>User name : {users.name} </h1>
                <h2>User age : {users.age} </h2>
             </div>
        </div>
    );
};

export default UsersPage;