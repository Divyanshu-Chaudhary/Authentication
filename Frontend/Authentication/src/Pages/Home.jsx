import { Link } from 'react-router-dom';
import "../Style/Home.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Campus Portal</h1>
      <p>Role Based Authentication System</p>

      <div className="home-buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/register">
          <button>Register</button>
        </Link>

        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </div>
  );
}
