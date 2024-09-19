// src/pages/Profile.tsx

import React from "react";
import tasksData from "../assets/tasksData";
import TasksTable from "../components/TasksTable";

const Profile: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("auth") || "{}");
  const userEmail: string = user.email || "";

  // Filter tasks for the logged-in user
  const userTasks = tasksData.filter((task) => task.email === userEmail);

  return (
    <div>
      <TasksTable tasks={userTasks} />
    </div>
  );
};

export default Profile;
