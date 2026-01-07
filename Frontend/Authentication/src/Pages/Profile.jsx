import "../Style/profile.css";

export default function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <h2>My Profile</h2>

        <div className="profile-row">
          <span className="label">Name</span>
          <span className="value">{localStorage.getItem("name")}</span>
        </div>

        <div className="profile-row">
          <span className="label">Email</span>
          <span className="value">{localStorage.getItem("email")}</span>
        </div>

        <div className="profile-row">
          <span className="label">Phone</span>
          <span className="value">
            {localStorage.getItem("phone") || "Not provided"}
          </span>
        </div>

        <div className="profile-row">
          <span className="label">Department</span>
          <span className="value">
            {localStorage.getItem("department") || "Not provided"}
          </span>
        </div>

        <div className="profile-row">
          <span className="label">Roll Number</span>
          <span className="value">
            {localStorage.getItem("roll") || "Not provided"}
          </span>
        </div>
      </div>
    </div>
  );
}
