import UserCard from "@/components/common/UserCard";
import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import { GetStaticProps } from "next";
import { type UserProps } from "@/interfaces";

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
   
    return (
        <main>
            <Header />
            <h1 className="font-bold">Users Page</h1>
            <p>This is the users page.</p>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                users.length > 0 ? (
                    users.map((user) => (
                        <UserCard
                            key={user.id}
                            id={user.userId}
                            name={user.name}
                            address={{
                                street: user.address.street,
                                city: user.address.city,
                                zipcode: user.address.zipcode
                            }}
                            email={user.email}
                        />
                    ))
                ) : (
                    <div>No users available</div>
                )}
            </div>
        </main>
    );
}

export const getStaticProps: GetStaticProps<{ users: UserProps[] }> = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users: UserProps[] = await response.json();
        return {
            props: {
                users,
            },
        };
    } catch (error) {
        console.error('Error fetching users:', error);
        return {
            props: {
                users: [],
            },
        };
    }
}

export default Users;
