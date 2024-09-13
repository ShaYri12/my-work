import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { FiFileText, FiCheckSquare, FiUsers } from "react-icons/fi";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

// Sidebar Component
const Sidebar: React.FC = () => (
  <div className="relative min-h-screen xl:w-[290px] lg:w-[240px] w-[200px] p-6 flex flex-col justify-between">
    <img
      className="absolute object-cover h-full w-full left-0 top-0 z-[50]"
      src="/assets/sidebar-gradient.png"
    />
    {/* Top Section */}
    <div className="relative z-[52]">
      <h1 className="text-3xl text-black font-bold text-center mb-8">MyWork</h1>

      {/* Menu Button */}
      <button className="flex items-center bg-purple-600 text-white rounded-full px-4 py-2 mb-6 shadow hover:bg-purple-700 transition">
        <AiOutlineMenu className="mr-2" />
        Menu
      </button>

      {/* Navigation Items */}
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-[6px] text-black bg-white rounded-l-full py-2 pl-4 pr-2 shadow-lg -mr-4"
                : "flex items-center gap-[6px] text-black"
            }
          >
            <FiFileText />
            <span>News</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-[6px] text-black bg-white rounded-l-full py-2 pl-4 pr-2 shadow-lg -mr-4"
                : "flex items-center gap-[6px] text-black"
            }
          >
            <FiCheckSquare />
            <span>Tasks</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/done-tasks"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-[6px] text-black bg-white rounded-l-full py-2 pl-4 pr-2 shadow-lg -mr-4"
                : "flex items-center gap-[6px] text-black"
            }
          >
            <FiCheckSquare />
            <span>Done Tasks</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/person-list"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-[6px] text-black bg-white rounded-l-full py-2 pl-4 pr-2 shadow-lg -mr-4"
                : "flex items-center gap-[6px] text-black"
            }
          >
            <FiUsers />
            <span>Person List</span>
          </NavLink>
        </li>
      </ul>
    </div>

    {/* Social Media Icons */}
    <div className="flex justify-around mt-8 relative z-[52]">
      <a href="#">
        <FaLinkedin
          className="text-[#694BDB] hover:scale-110 transition"
          size={24}
        />
      </a>
      <a href="#">
        <FaInstagram
          className="text-[#694BDB] hover:scale-110 transition"
          size={24}
        />
      </a>
      <a href="#">
        <FaTwitter
          className="text-[#694BDB] hover:scale-110 transition"
          size={24}
        />
      </a>
    </div>
  </div>
);

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("auth");
    toast.info("Logout Successful");
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-bl-lg rounded-br-lg shadow-md flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-full shadow px-4 py-2 w-60">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none flex-1"
        />
      </div>

      {/* Center Nav Links */}
      <nav className="flex space-x-10">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-black font-bold" : "text-black hover:underline"
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? "text-black font-bold" : "text-black hover:underline"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-black font-bold" : "text-black hover:underline"
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Exit Button */}
      <div
        className="flex items-center text-brown-600 font-bold hover:text-brown-700 cursor-pointer"
        onClick={handleLogout}
      >
        <FiLogOut className="mr-2" size={20} />
        <span>Exit</span>
      </div>
    </header>
  );
};

// DashboardLayout Component that renders the sidebar, header, and children (via Outlet)
const DashboardLayout: React.FC = () => (
  <div className="flex bg-[#F2F2FD]">
    <Sidebar />
    <div className="flex-1">
      <Header />
      <main className="p-4">
        <Outlet /> {/* This will render the matched child route component */}
      </main>
    </div>
  </div>
);

export default DashboardLayout;
