import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import News from "./pages/News";
import Tasks from "./pages/Tasks";
import ProfileTasks from "./pages/ProfileTasks";
import About from "./pages/About";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Register from "./pages/Register";
import DoneTasks from "./pages/DoneTasks";
import PersonList from "./pages/PersonList";
import Contact from "./pages/Contact";
import Info from "./pages/Info";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("auth"); // Check if the user is logged in

  return (
    <Router>
      <Routes>
        {/* Login Route (Unprotected) */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/sign-up" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<News />} /> {/* Default dashboard page */}
          <Route path="tasks" element={<Tasks />} />
          <Route path="done-tasks" element={<DoneTasks />} />
          <Route path="person-list" element={<PersonList />} />
          <Route path="profile/tasks" element={<ProfileTasks />} />
          <Route path="profile/info" element={<Info />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Fallback route for unmatched URLs */}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
