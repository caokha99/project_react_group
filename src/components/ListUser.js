import React, { useState } from 'react';
import './listUser.css';

const ListUser = () => {
    const [listUser, setListUser] = useState([
        {
            id: 1,
            username: 'nguyenvana',
            firstName: 'Nguyen',
            lastName: 'Van A',
            email: 'nva@gmail.com',
            role: 'User',
            status: 'Active',
            address: 'Can Tho',
        },
        {
            id: 2,
            username: 'nguyenvanb',
            firstName: 'Nguyen',
            lastName: 'Van B',
            email: 'nvb@gmail.com',
            role: 'User',
            status: 'Active',
            address: 'Can Tho',
        },
        {
            id: 3,
            username: 'nguyenvanc',
            firstName: 'Nguyen',
            lastName: 'Van C',
            email: 'nvc@gmail.com',
            role: 'User',
            status: 'Active',
            address: 'Can Tho',
        },
    ]);

    const handleDeleteUser = (data) => {
        let currentListUser = [...listUser];
        let newListUser = currentListUser.filter((user) => {
            return user.id !== data.id;
        });
        setListUser(newListUser);
    };
    return (
        <div className='table-container'>
            <div className='table-wrap'>
                <h1 className='title'>List User</h1>
                <table className='table-user'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.status}</td>
                                    <td>{user.address}</td>
                                    <td className='icon'>
                                        <span>
                                            <i className='far fa-eye'></i>
                                        </span>
                                        <span>
                                            <i className='fas fa-edit'></i>
                                        </span>
                                        <span
                                            onClick={() =>
                                                handleDeleteUser(user)
                                            }
                                        >
                                            <i className='far fa-trash-alt'></i>
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListUser;
