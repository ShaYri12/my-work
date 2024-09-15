import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaNewspaper,
  FaTasks,
  FaCheckDouble,
  FaClipboardList,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const checkWidth = () => {
    if (window.innerWidth >= 1024) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      if (window.innerWidth < 1024) {
        setIsExpanded(false);
      }
    }
  };

  useEffect(() => {
    // Check width on mount
    checkWidth();

    // Add event listener for window resize
    window.addEventListener("resize", checkWidth);

    // Add event listener for clicks outside the sidebar
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkWidth);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className={`flex ${
          isExpanded
            ? "xl:w-[290px] lg:w-[240px] w-[70px]"
            : "lg:w-[240px] w-[70px]"
        }`}
      ></div>

      <div
        ref={sidebarRef}
        className={`bg-white fixed top-0 left-0 h-screen transition-all duration-200 ${
          isExpanded
            ? "xl:w-[290px] lg:w-[240px] w-[200px] lg:px-[23px]"
            : "w-[70px]"
        } flex flex-col justify-between z-[60]`}
      >
        <img
          className="absolute object-cover h-full w-full left-0 top-0 z-[50]"
          src="/assets/sidebar-gradient.png"
        />

        {/* Top Section */}
        <div className="relative z-[52]">
          {isExpanded && (
            <h1 className="md:text-[45px] text-[30px] text-[#0F0F0F] md:font-[500] font-[600] leading-[62.69px] text-center my-[7px]">
              MyWork
            </h1>
          )}

          {/* Menu Button */}
          <div className={`${isExpanded ? "lg:px-0 px-4" : "px-2"} `}>
            <button
              onClick={toggleSidebar}
              className={`flex items-center lg:gap-[21px] gap-[12px] bg-[#A15FF4] text-white rounded-[15px] ${
                isExpanded
                  ? "lg:px-[23px] px-[10px] py-[7.9px]"
                  : "px-[10px] py-[7.9px] mt-[6px]"
              } mb-[30px] md:text-[20px] font-[500] leading-[24.2px] shadow hover:bg-[#A15FF9] transition`}
            >
              <img
                className="lg:min-w-[30px] w-[30px] h-[30px] lg:min-h-[30px]"
                src="/assets/icons/menu.svg"
              />
              {isExpanded && (
                <span className="mt-[0.4px] font-inter">Menu</span>
              )}
            </button>
          </div>

          {/* Navigation Items */}
          <ul className={`${isExpanded ? "xl:ps-[35px] ps-4" : "ps-2"}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-[6px] text-[16px] font-[500] leading-[25px] py-[20px] px-[18px] lg:-mr-6 ${
                    isActive
                      ? "bg-[#F2F2FD] text-[#383838] rounded-l-full"
                      : "text-black"
                  }`
                }
              >
                <span className="md:min-h-[25px] min-h-[20px] min-w-[20px] md:min-w-[25px]">
                  <FaNewspaper className="w-full h-full" />
                </span>
                {isExpanded && (
                  <span className="mb-[-4px] font-inter">News</span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  `flex items-center gap-[6px] text-[16px] font-[500] leading-[25px] py-[20px] px-[18px] -mr-6 ${
                    isActive
                      ? "bg-[#F2F2FD] text-[#383838] rounded-l-full"
                      : "text-black"
                  }`
                }
              >
                <span className="md:min-h-[25px] min-h-[20px] min-w-[20px] md:min-w-[25px]">
                  <FaTasks className="w-full h-full" />
                </span>
                {isExpanded && (
                  <span className="mb-[-4px] font-inter">Tasks</span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/done-tasks"
                className={({ isActive }) =>
                  `flex items-center gap-[6px] text-[16px] font-[500] leading-[25px] py-[20px] px-[18px] -mr-6 ${
                    isActive
                      ? "bg-[#F2F2FD] text-[#383838] rounded-l-full"
                      : "text-black"
                  }`
                }
              >
                <span className="md:min-h-[25px] min-h-[20px] min-w-[20px] md:min-w-[25px]">
                  <FaCheckDouble className="w-full h-full" />
                </span>
                {isExpanded && (
                  <span className="mb-[-4px] font-inter">Done Tasks</span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/person-list"
                className={({ isActive }) =>
                  `flex items-center gap-[6px] text-[16px] font-[500] leading-[25px] py-[20px] px-[18px] -mr-6 ${
                    isActive
                      ? "bg-[#F2F2FD] text-[#383838] rounded-l-full"
                      : "text-black"
                  }`
                }
              >
                <span className="md:min-h-[25px] min-h-[20px] min-w-[20px] md:min-w-[25px]">
                  <FaClipboardList className="w-full h-full" />
                </span>
                {isExpanded && (
                  <span className="mb-[-4px] font-inter">Person List</span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div
          className={`flex ${
            isExpanded ? "" : "flex-col gap-[16px]"
          } justify-center items-center gap-[22px] relative z-[52] mb-[45px]`}
        >
          <a
            href="#"
            className={`${
              isExpanded ? "h-[27px] w-[27px]" : "h-[24px] w-[24px]"
            }`}
          >
            <FaLinkedin className="text-[#694BDB] hover:scale-110 transition h-full w-full" />
          </a>
          <a
            href="#"
            className={`${
              isExpanded ? "h-[27px] w-[27px]" : "h-[24px] w-[24px]"
            }`}
          >
            <FaInstagram className="text-[#694BDB] hover:scale-110 transition h-full w-full" />
          </a>
          <a
            href="#"
            className={`${
              isExpanded ? "h-[27px] w-[27px]" : "h-[24px] w-[24px]"
            }`}
          >
            <FaTwitter className="text-[#694BDB] hover:scale-110 transition h-full w-full" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
