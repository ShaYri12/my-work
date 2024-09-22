import React from "react";

const Info: React.FC = () => {
  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem("auth") || "{}");
  const userName = user.name || "Guest"; // Default to "Guest" if no name
  const userEmail = user.email || "No email provided"; // Default email message

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
