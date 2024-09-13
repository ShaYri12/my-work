import React, { useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const dummyUsers = [
  { name: "John Doe", email: "john@example.com", password: "password123" },
  { name: "Jane Smith", email: "jane@example.com", password: "mypassword" },
];

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if email is already in use
    const userExists = dummyUsers.some((user) => user.email === formData.email);

    if (userExists) {
      setError("Email already in use, please use another.");
    } else {
      navigate("/login");
    }
  };

  // Helper function to check if any form field is empty
  const isFormIncomplete = () => {
    return Object.values(formData).some((value) => value.trim() === "");
  };

  return (
    <div className="relative min-h-screen bg-[#A15FF466] flex items-center justify-center">
      <img
        src="/assets/login-object.png"
        className="absolute left-0 h-full z-[1]"
      />
      <div className="relative z-[2] py-[50px] max-w-[400px] w-full">
        <h1 className="text-center text-white text-[45px] font-[500] leading-[62.69px] mb-[30px]">
          MyWork
        </h1>
        <div className="bg-[#212936] p-[30px] rounded-[34px] shadow-lg w-full flex-grow flex flex-col">
          <h2 className="text-[#B1E457] text-center text-[30px] font-[500]">
            Create a MyWork Account
          </h2>
          <form
            className="flex flex-col gap-[28px] mt-[29px]"
            onSubmit={handleRegister}
          >
            {error && (
              <div className="flex items-start gap-[4px] px-[22px] py-[10px] text-white bg-[#AE2D5D] rounded-[22px]">
                <span className="min-w-[24px] min-h-[24px]">
                  <img
                    className="w-[24px] h-[24px]"
                    src="/assets/icons/error.svg"
                    alt="Error"
                  />
                </span>
                <div className="flex flex-col gap-[10px]">
                  <span className="text-[20px] leading-[27.86px] font-[400] ps-[6px]">
                    Registration error
                  </span>
                  <div className="flex items-center gap-[10px] text-[16px]">
                    <span className="w-[5px] h-[5px] min-w-[5px] min-h-[5px] rounded-full bg-white"></span>
                    {error}
                  </div>
                </div>
              </div>
            )}
            <div className="relative flex items-center">
              <span className="absolute left-4 flex items-center">
                <LuUser2 color="#B1E457" size={24} />
              </span>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full ps-12 pr-[18px] pt-[10px] pb-[7px] bg-[#6C727F] text-[20px] font-[400] text-white placeholder-[#C4C4C4] rounded-full focus:outline-none focus:ring-1 focus:ring-[#B1E457]"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative flex items-center">
              <span
                className={`absolute left-4 ${
                  error ? "text-[#AE2D5D]" : "text-[#B1E457]"
                } flex items-center`}
              >
                <MdOutlineMail size={24} />
              </span>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full ps-12 pr-[18px] pt-[10px] pb-[7px] bg-[#6C727F] text-[20px] font-[400] text-white placeholder-[#C4C4C4] rounded-full focus:outline-none focus:ring-1 focus:ring-[#B1E457]"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative flex items-center">
              <span className="absolute left-4 flex items-center">
                <img
                  className="w-[24px] h-[24px]"
                  src="/assets/icons/lock.svg"
                  alt="Password icon"
                />
              </span>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full ps-12 pr-[18px] pt-[10px] pb-[7px] bg-[#6C727F] placeholder:text-[20px] font-[400] text-white placeholder-[#C4C4C4] rounded-full focus:outline-none focus:ring-1 focus:ring-[#B1E457]"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative flex items-center">
              <span className="absolute left-4 flex items-center">
                <img
                  className="w-[24px] h-[24px]"
                  src="/assets/icons/lock.svg"
                  alt="Confirm Password icon"
                />
              </span>
              <input
                type="password"
                id="cpassword"
                placeholder="Confirm Password"
                className="w-full ps-12 pr-[18px] pt-[10px] pb-[7px] bg-[#6C727F] placeholder:text-[20px] font-[400] text-white placeholder-[#C4C4C4] rounded-full focus:outline-none focus:ring-1 focus:ring-[#B1E457]"
                value={formData.cpassword}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full px-4 ${
                isFormIncomplete()
                  ? "bg-[#A15FF433] text-[#6C727F]"
                  : "bg-[#B1E457] text-[#212936] hover:bg-[#B1E470]"
              } h-[45px] text-[24px] font-[500] leading-[33.43px] flex items-center justify-center rounded-full transition mt-[22px]`}
              disabled={isFormIncomplete()} // Disable button if form is incomplete
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="text-center text-[18px] font-[500] leading-[25.07px] mt-[11px]">
          <span className="text-white">Already have an account?</span>
          <Link to="/login" className="text-[#58820E] hover:underline">
            {" "}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
