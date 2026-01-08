import "../Style/about.css";

export default function About() {
  return (
    <>
      {/* Header Section */}
      <div className="about-hero">
        <h1>About This Project</h1>
        <p>MERN Stack Role-Based Authentication System</p>
      </div>

      {/* Content Card */}
      <div className="about-container">
        <section>
          <h2>📌 Project Overview</h2>
          <p>
            This project is a full-stack MERN application implementing
            secure authentication and authorization with role-based access
            for Students, Faculty, and Admin.
          </p>
        </section>

        <section>
          <h2>🛠️ Technology Stack</h2>
          <ul>
            <li>MongoDB – Database</li>
            <li>Express.js – Backend Framework</li>
            <li>React (Vite) – Frontend</li>
            <li>Node.js – Runtime Environment</li>
            <li>JWT – Authentication</li>
          </ul>
        </section>

        <section>
          <h2>✨ Key Features</h2>
          <ul>
            <li>User Registration & Login</li>
            <li>Role-based Dashboards</li>
            <li>Protected Routes</li>
            <li>Admin User Management</li>
            <li>Modern UI with Responsive Design</li>
          </ul>
        </section>
      </div>
    </>
  );
}
