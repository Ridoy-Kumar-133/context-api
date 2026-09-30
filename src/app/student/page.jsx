'use client'
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const StudentPage = () => {

    const data = useContext(UserContext);
    const {users, count, setCount} = data;

    const handleIncrease = () =>{
        setCount(count+1)
    }

    return (
        <div>
            <h2>Student Details page  : </h2>
            <div>
                <h1>Stuent name :  {users.name} </h1>
                <h1>Student age : {users.age} </h1>

                 <div className=' h-[500] w-[500] bg-amber-100 flex items-center justify-center gap-6 m-auto'>
                     <button className='btn btn-success'>{count}</button>

                    <button
                    onClick={() => handleIncrease()}
                     className='btn btn-success'>InCrease</button>
                 </div>
            </div>
        </div>
    );
};

export default StudentPage;