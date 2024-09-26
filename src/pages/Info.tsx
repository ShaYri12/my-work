import React, { useEffect } from "react";

const Info: React.FC = () => {
  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem("auth") || "{}");
  const userName = user.name || "Guest"; // Default to "Guest" if no name
  const userEmail = user.email || "No email provided"; // Default email message

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">User Information</h2>
      <p>
        <strong>Name:</strong> {userName}
      </p>
      <p>
        <strong>Email:</strong> {userEmail}
      </p>
    </div>
  );
};

export default Info;
