import axios from 'axios';
import { useEffect, useState } from 'react';
import "../Style/table.css";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2>Registered Users</h2>
      <table>
        <tr>
          <th>Name</th><th>Email</th><th>Role</th>
        </tr>
        {users.map(u => (
          <tr key={u._id}>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.role}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
