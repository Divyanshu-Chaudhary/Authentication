import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import About from './Pages/About';

import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import AdminUsers from './Pages/AdminUsers';
import Unauthorized from './Pages/Unauthorized';

import ProtectedRoute from './Components/ProtectedRoute';

import StudentCourses from "./Pages/StudentCourses";
import StudentAttendance from "./Pages/StudentAttendance";



function App() {
  return (
    <Routes>

      {/* 🌐 Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/student/courses" element={<StudentCourses />} />
      <Route path="/student/attendance" element={<StudentAttendance />} />

      {/* 🔐 Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* 👑 Admin Only */}
      <Route
        path="/admin/users"
        element={
          <ProtectedRoute role="admin">
            <AdminUsers />
          </ProtectedRoute>
        }
      />

      {/* ❌ Unauthorized */}
      <Route path="/unauthorized" element={<Unauthorized />} />

    </Routes>
  );
}

export default App;
