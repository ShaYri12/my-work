import React, { useState } from "react";
import { Task } from "../assets/tasksData";
import TasksTable from "../components/TasksTable";
import initialTasksData from "../assets/tasksData";

// Helper function to get tasks from localStorage or default to initial data
const getTasksFromLocalStorage = (): Task[] => {
  const tasks = localStorage.getItem("tasksData");
  return tasks ? JSON.parse(tasks) : initialTasksData;
};

const user = JSON.parse(localStorage.getItem("auth") || "{}");
const userEmail: string = user.email || "";

const Profile: React.FC = () => {
  // Load tasks from localStorage or use initial data
  const [tasksInfo, setTasksInfo] = useState<Task[]>(getTasksFromLocalStorage);

  // Filter tasks for the logged-in user
  const userTasks = tasksInfo.filter((task) => task.email === userEmail);

  // Handle status change and persist to localStorage
  const handleStatusChange = (
    taskId: number,
    newStatus: "TO DO" | "IN PROGRESS" | "DONE"
  ) => {
    const updatedTasks = tasksInfo.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasksInfo(updatedTasks);
    localStorage.setItem("tasksData", JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <TasksTable tasks={userTasks} onStatusChange={handleStatusChange} />
    </div>
  );
};

export default Profile;
