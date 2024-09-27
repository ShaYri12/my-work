import React, { useEffect, useState } from "react";
import { Task } from "../assets/tasksData"; // Ensure Task interface matches your data structure
import TasksTable from "../components/TasksTable";

const ProfileTasks: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("auth") || "{}");
  const userEmail: string = user.email || "";

  const [tasksInfo, setTasksInfo] = useState<Task[]>(() => {
    // Initialize tasksInfo with data from localStorage
    const storedTasks = localStorage.getItem("tasksData");
    return storedTasks ? JSON.parse(storedTasks) : []; // Fallback to an empty array if no tasks found
  });

  const fetchTasksData = () => {
    const storedTasks = localStorage.getItem("tasksData");
    setTasksInfo(storedTasks ? JSON.parse(storedTasks) : []);
  };

  useEffect(() => {
    // Fetch tasks data on component mount
    fetchTasksData();

    // Listen for storage changes (in case `tasksData` is updated in another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "tasksData") {
        fetchTasksData();
      }
    };
    window.addEventListener("storage", handleStorageChange);

    // Scroll to top when the component is mounted
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Filter tasks for the logged-in user
  const userTasks = tasksInfo.filter((task) => task.email === userEmail);

  // Handle status change and update localStorage
  const handleStatusChange = (
    taskId: number,
    newStatus: "TO DO" | "IN PROGRESS" | "DONE"
  ) => {
    setTasksInfo((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      );
      localStorage.setItem("tasksData", JSON.stringify(updatedTasks)); // Update localStorage
      return updatedTasks;
    });
  };

  // Handle assignee change and update localStorage
  const handleAssigneeChange = (
    taskId: number,
    newAssignee: string,
    newAssigneeEmail: string
  ) => {
    setTasksInfo((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, assignee: newAssignee, email: newAssigneeEmail }
          : task
      );
      localStorage.setItem("tasksData", JSON.stringify(updatedTasks)); // Update localStorage
      return updatedTasks;
    });
  };

  return (
    <div>
      <TasksTable
        tasks={userTasks} // Pass the filtered tasks for the logged-in user
        onStatusChange={handleStatusChange}
        onAssigneeChange={handleAssigneeChange}
      />
    </div>
  );
};

export default ProfileTasks;
