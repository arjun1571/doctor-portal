import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {

    const {data: user=[]}= useQuery({
        queryKey:["user"],
        queryFn:async () =>{
            const res = await fetch(`http://localhost:5000/user`)
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head*/}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Eamil</th>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        user.map((us,i)=>  <tr key={user?._id}>
            <th>{i+1}</th>
            <td>{us.name}</td>
            <td>{us.email}</td>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
          </tr>)
     }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;