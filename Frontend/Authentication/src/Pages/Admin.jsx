import { Link } from 'react-router-dom';
import "../Style/role.css";

export default function Admin() {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <Link to="/admin/users">View All Users</Link>
    </div>
  );
}
