import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Store dummy user data in localStorage if not already present
    const initialUserData = [
      { name: "John Doe", email: "john@example.com", password: "password123" },
      { name: "Jane Smith", email: "jane@example.com", password: "mypassword" },
    ];
    if (!localStorage.getItem("userData")) {
      localStorage.setItem("userData", JSON.stringify(initialUserData));
    }
  }, []);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle login form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    // Retrieve the userData from localStorage
    const storedUsers = localStorage.getItem("userData");
    if (storedUsers) {
      const users = JSON.parse(storedUsers);

      // Check if the entered email and password match any user in localStorage
      const user = users.find(
        (u: { email: string; password: string }) =>
          u.email === email && u.password === password
      );

      if (user) {
        // Store logged-in user in localStorage with key "auth"
        localStorage.setItem("auth", JSON.stringify(user));
        toast.success("Login Successful");
        navigate("/"); // Redirect to dashboard
      } else {
        setError("Incorrect email or password!");
      }
    } else {
      setError("No user data found in the system.");
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
        alt="Background"
      />
      <div className="relative z-[2] py-[50px] max-w-[400px] w-full">
        <h1 className="text-center text-white text-[45px] font-[500] leading-[62.69px] mb-[30px]">
          MyWork
        </h1>
        <div className="bg-[#212936] p-[30px] rounded-[34px] shadow-lg w-full flex-grow flex flex-col">
          <h2 className="text-[#B1E457] text-center text-[30px] font-[500]">
            Welcome
          </h2>
          <p className="text-[#6C727F] text-[26px] font-[500] leading-[36.22px] text-center mb-[14px] mt-[-9px]">
            Sign in to your account
          </p>
          <form className="flex flex-col gap-[30px]" onSubmit={handleLogin}>
            <p
              className={` ${
                !error && "invisible"
              } flex gap-[8px] text-[20px] leading-[27.86px] font-[400] items-center px-[22px] py-[10px] text-white bg-[#AE2D5D] rounded-full`}
            >
              <span className="min-w-[24px] min-h-[24px]]">
                <img
                  className="w-[24px] h-[24px]"
                  src="/assets/icons/error.svg"
                  alt="Error"
                />
              </span>
              <span className="mb-[-6px]">{error}</span>
            </p>
            <div className="relative flex items-center">
              <span className="absolute left-4 flex items-center">
                <img
                  className="w-[24px] h-[24px]"
                  src="/assets/icons/email.svg"
                  alt="Email icon"
                />
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
            <button
              type="submit"
              className={`w-full px-4 ${
                isFormIncomplete()
                  ? "bg-[#A15FF433] text-[#6C727F]"
                  : "bg-[#B1E457] text-[#212936] hover:bg-[#B1E470]"
              } h-[45px] text-[24px] font-[500] leading-[33.43px] flex items-center justify-center rounded-full transition mt-[22px]`}
              disabled={isFormIncomplete()} // Disable button if form is incomplete
            >
              Login
            </button>
          </form>
        </div>
        <div className="text-center text-[18px] font-[500] leading-[25.07px] mt-[11px]">
          <span className="text-white">Don't have an account?</span>
          <Link to="/sign-up" className="text-[#58820E] hover:underline">
            {" "}
            Sign up
          </Link>
        </div>
        <div className="text-center">
          <a
            href="#"
            className="text-[18px] text-[#58820E] font-[500] leading-[25.07px] hover:underline mt-[-3px]"
          >
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
