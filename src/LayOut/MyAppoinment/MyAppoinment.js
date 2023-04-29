import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyAppoinment = () => {
    const {user}=useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const {data:bookings=[]}=useQuery({
        queryKey:["bookings",user.email],
        queryFn: async ()=>{
            const res = await fetch(url)
            const data = await res.json()
            return data;   
        }
    })
    return (
        <div>
            <h1 className='font-bold text-2xl'>My Appoinment</h1>
            <div className="overflow-x-auto mt-5">
            <table className="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th>Favorite Color</th>
                </tr>
                </thead>
                <tbody>
                {
                    bookings.map((book,i)=>
                    <tr>
                        <th>{i}</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Blue</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyAppoinment;