import Student from './Student';
import Faculty from './Faculty';
import Admin from './Admin';

import "../Style/dashboard.css";

export default function Dashboard() {
  const role = localStorage.getItem("role");

  if (role === "admin") return <Admin />;
  if (role === "faculty") return <Faculty />;
  return <Student />;
}
