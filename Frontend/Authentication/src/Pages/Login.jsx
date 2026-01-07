import axios from 'axios';
import "../Style/auth.css";

export default function Login() {
  const login = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const res = await axios.post("http://localhost:5000/login", {
      email: form.get("email"),
      password: form.get("password")
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("name", res.data.user.name);
    localStorage.setItem("email", res.data.user.email);
    localStorage.setItem("phone", res.data.user.phone);
    localStorage.setItem("department", res.data.user.department);
    localStorage.setItem("rollNumber", res.data.user.rollNumber);
    localStorage.setItem("role", res.data.user.role);

    window.location.href = "/dashboard";
  };

  return (
    <form className="auth-form" onSubmit={login}>
      <h2>Login</h2>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  );
}
