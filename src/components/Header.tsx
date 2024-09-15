import { toast } from "react-toastify";
import { TbLogout2 } from "react-icons/tb";
import { MdOutlineSearch } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Drawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();
  const drawerRef = useRef<HTMLDivElement | null>(null); // Reference for the drawer

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        onClose(); // Close the drawer
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (path: string) => {
    onClose(); // Close the drawer
    navigate(path); // Navigate to the selected path
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-40 z-40" />}

      {/* Drawer */}
      <div
        ref={drawerRef} // Attach ref to the drawer
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform duration-300 w-[250px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(269.13deg, rgba(245, 218, 255, 0.8) -1.6%, rgba(255, 255, 255, 0) 100.6%)",
        }}
      >
        <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>
          <IoCloseSharp size={30} />
        </button>

        <div className="flex flex-col p-4 mt-[45px]">
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-full">
            <MdOutlineSearch size={17} className="text-[#848484] mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none flex-1 mt-[1px]"
            />
          </div>

          {/* Center Nav Links */}
          <nav className="flex flex-col mt-4">
            <NavLink
              to="/profile"
              onClick={() => handleLinkClick("/profile")} // Close drawer and navigate
              className={({ isActive }) =>
                `text-[20px] text-black font-[700] font-raleway leading-[23.48px] py-2 px-4 ${
                  isActive ? "bg-[#9D9DFF] rounded-[12px]" : ""
                }`
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/about-us"
              onClick={() => handleLinkClick("/about-us")} // Close drawer and navigate
              className={({ isActive }) =>
                `text-[20px] text-black font-[700] font-raleway leading-[23.48px] py-2 px-4 ${
                  isActive ? "bg-[#9D9DFF] rounded-[12px]" : ""
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => handleLinkClick("/contact")} // Close drawer and navigate
              className={({ isActive }) =>
                `text-[20px] text-black font-[700] font-raleway leading-[23.48px] py-2 px-4 ${
                  isActive ? "bg-[#9D9DFF] rounded-[12px]" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Exit Button */}
          <div
            className="flex items-center gap-2 text-[20px] font-inter leading-[24.2px] py-2 px-4 border-t border-dashed border-gray-500 font-[700] hover:text-red-500 cursor-pointer mt-3"
            onClick={() => {
              localStorage.removeItem("auth");
              toast.info("Logout Successful");
              setTimeout(() => {
                navigate("/login");
              }, 1000);
              onClose(); // Close the drawer after logout
            }}
          >
            <TbLogout2 size={32} />
            <span>Exit</span>
          </div>
        </div>
      </div>
    </>
  );
};

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navigate = useNavigate();

  return (
    <>
      <header
        className="xl:px-[45px] px-6 py-[25px] flex items-center gap-2 justify-between relative"
        style={{
          background:
            "linear-gradient(269.13deg, rgba(245, 218, 255, 0.6) -1.6%, rgba(255, 255, 255, 0) 77.6%)",
        }}
      >
        {/* Menu Icon for Mobile */}
        <div
          className="md:hidden flex items-center justify-end w-full text-2xl cursor-pointer"
          onClick={toggleDrawer}
        >
          <FaBars />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white rounded-full shadow-md lg:px-[20px] sm:px-[16px] px-[14px] lg:py-[12px] py-[8px] w-full lg:max-w-[261px] max-w-[200px]">
          <MdOutlineSearch
            size={17}
            className="text-[#848484] sm:mr-[12px] mr-[6px]"
          />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none flex-1 w-full"
          />
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex gap-1">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `lg:text-[20px] text-[18px] text-black font-[700] font-raleway leading-[23.48px] xl:py-[17.83px] py-4 xl:px-[35px] px-5 ${
                isActive ? "bg-[#9D9DFF] rounded-[12px]" : ""
              }`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `lg:text-[20px] text-[18px] text-black font-[700] w-max font-raleway leading-[23.48px] xl:py-[17.83px] py-4 xl:px-[35px] px-5 ${
                isActive ? "bg-[#9D9DFF] rounded-[12px]" : ""
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `lg:text-[20px] text-[18px] text-black font-[700] font-raleway leading-[23.48px] xl:py-[17.83px] py-4 xl:px-[35px] px-5 ${
                isActive ? "bg-[#9D9DFF] rounded-[12px]" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Exit Button */}
        <div
          className="hidden md:flex items-center lg:gap-[12px] gap-[6px] lg:text-[20px] text-[18px] font-inter leading-[24.2px] font-[700] hover:text-red-500 cursor-pointer transition"
          onClick={() => {
            localStorage.removeItem("auth");
            toast.info("Logout Successful");
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          }}
        >
          <TbLogout2 size={32} />
          <span>Exit</span>
        </div>
      </header>

      {/* Drawer */}
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};
export default Header;
