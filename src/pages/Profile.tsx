import React from "react";

const Profile: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("auth") || "{}");
  return (
    <div>
      <h1 className="text-3xl font-bold">Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
