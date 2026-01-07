import { useNavigate } from "react-router-dom";
import "../Style/role.css";

export default function Student() {
  const navigate = useNavigate();

  return (
    <div className="role-container">
      <h2>Student Dashboard</h2>

      <div className="role-cards">
        <div
          className="role-card clickable"
          onClick={() => navigate("/profile")}
        >
          <h3>View Profile</h3>
          <p>Check your personal details</p>
        </div>

        <div
          className="role-card clickable"
          onClick={() => navigate("/student/courses")}
        >
          <h3>My Courses</h3>
          <p>View enrolled subjects</p>
        </div>

        <div
          className="role-card clickable"
          onClick={() => navigate("/student/attendance")}
        >
          <h3>Attendance</h3>
          <p>Track your attendance</p>
        </div>
      </div>
    </div>
  );
}
