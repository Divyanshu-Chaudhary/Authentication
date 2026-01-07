import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Style/auth.css";

export default function Register() {

  const navigate = useNavigate(); // ✅ hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    try {
      await axios.post("http://localhost:5000/register", {
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
        role: form.get("role"),
        department: form.get("department"),
        phone: form.get("phone"),
        rollNumber: form.get("rollNumber")
      });

      alert("Registered Successfully");

      // ✅ REDIRECT TO HOME PAGE
      navigate("/");

    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" required />
      <input name="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <select name="role">
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
      </select>
      <input name="department" placeholder="Department" />
      <button>Register</button>
    </form>
  );
}
