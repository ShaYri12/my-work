import React, { useEffect, useState } from "react";
import { Task } from "../assets/tasksData"; // Ensure Task interface matches your data structure
import TasksTable from "../components/TasksTable";

const user = JSON.parse(localStorage.getItem("auth") || "{}");
const userEmail: string = user.email || "";

const ProfileTasks: React.FC = () => {
  const [tasksInfo, setTasksInfo] = useState<Task[]>(() => {
    // Initialize tasksInfo with data from localStorage
    const storedTasks = localStorage.getItem("tasksData");
    return storedTasks ? JSON.parse(storedTasks) : []; // Fallback to an empty array if no tasks found
  });

  useEffect(() => {
    // Refetch tasks data on component mount
    const storedTasks = localStorage.getItem("tasksData");
    if (storedTasks) {
      setTasksInfo(JSON.parse(storedTasks));
    } else {
      setTasksInfo([]); // Fallback to an empty array if no tasks found
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
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

      // Update localStorage with the new tasks array
      localStorage.setItem("tasksData", JSON.stringify(updatedTasks));
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

      // Update localStorage with the new tasks array
      localStorage.setItem("tasksData", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  return (
    <div>
      <TasksTable
        tasks={userTasks}
        onStatusChange={handleStatusChange}
        onAssigneeChange={handleAssigneeChange}
      />
    </div>
  );
};

export default ProfileTasks;
