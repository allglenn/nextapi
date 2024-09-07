'use client';
import React from 'react';
import Image from 'next/image';

type User = {
    id: number;
    name: string;
    email: string;
    avatar: string;
    first_name: string;
    last_name: string;
};


const UserScreen = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/users')
            .then((res) => res.json())
            .then((data) => setUsers(data?.data));
    }, []);

    if(!users) {
        return <div>Loading...</div>;
    }
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <header className="py-8">
          <Image
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWRidXp5eWZ4OXU2NmNzdzJsdHFqaHpvZGRqOXh6ZnQycHE2M2lxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/iMzifRiFdqmhb6cbSC/giphy.gif"
            alt="Logo"
            width={180}
            height={38}
          />
        </header>

        <main className="flex flex-col items-center gap-8">
          <h1 className="text-3xl font-bold">All Users</h1>
          <ul className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols">
            {users.map((user: User) => (
              <li key={user.id}>
                <img 
                src={user.avatar} 
                alt={user.first_name} 
                className="w-30 h-30 rounded-full"
                />
                <p>
                  {user.first_name} {user.last_name}
                </p>
                <p>{user.email}</p>
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
}

export default UserScreen;