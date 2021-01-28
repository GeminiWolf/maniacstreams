import React, { useState } from 'react';
import './users.css';

const Users = () => {
  const [users, setUsers] = useState([])

  // componentDidMount() {
  //   fetch('/api/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }, () => console.log('users fetched', users)))
  // }

  return (
    <div>
      <h2>Users</h2>

      <ul>
        {users.map(user =>
          <li key={user.id}>{user.name} {user.number}</li>
        )}
      </ul>
    </div>
  );
}

export default Users;
