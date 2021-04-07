import React from 'react';
import {Link} from 'react-router-dom';


function Users(props) {
let users = (!props.users) ? [{}] : props.users;

const handledelete = (item) =>{
    props.deleteUser(item);
}

    return (
    <main style={{marginTop: "58px"}}>
        <div className="container pt-4">
        {users.length > 0 ? (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Pnone No.</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => (
                    <tr key={user._id}>
                        <th scope="row">{index+1}</th>
                        <td>{user.username}</td>
                        <td>{user.address}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>{user.contactNumber}</td>
                        <td>
                            <button type="button" className="btn btn-outline-danger btn-sm" data-mdb-ripple-color="dark" onClick={()=>handledelete(user)}>Delete</button>
                            <Link to={{
                                pathname:"/users/edit/"+user._id,
                                state: { userId: user._id }

                            }}><button type="button" className="btn btn-outline-primary btn-sm" style={{marginLeft : '10px'}} data-mdb-ripple-color="dark" >Edit</button></Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        ) :  (
            <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
        )}
        </div>
    </main>
  );
}

export default Users;