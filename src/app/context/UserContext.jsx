'use client';
import React, { createContext, useState } from 'react';
import UsersPage from '../user/page';

const users = {
    name : "Akash",
    age : 25
}

export const UserContext = createContext({});

const UserContextPage = ({children}) => {

    const [count, setCount] = useState(0);
    const [increse, setIncrease] = useState(0);

    const is = {
      count,
      setCount,
      increse,
      setIncrease,
      users
    }

    return (
        <UserContext.Provider  value={is}    >
           {children}
        </UserContext.Provider>
    );
};

export default UserContextPage;