import React, { useState } from "react";
import { Task } from "../assets/tasksData";
import TasksTable from "../components/TasksTable";
import initialTasksData from "../assets/tasksData";

const user = JSON.parse(localStorage.getItem("auth") || "{}");
const userEmail: string = user.email || "";

const ProfileTasks: React.FC = () => {
  // Initialize tasksInfo with the imported initialTasksData
  const [tasksInfo, setTasksInfo] = useState<Task[]>(initialTasksData);

  // Filter tasks for the logged-in user
  const userTasks = tasksInfo.filter((task) => task.email === userEmail);

  // Handle status change (no localStorage, just state management)
  const handleStatusChange = (
    taskId: number,
    newStatus: "TO DO" | "IN PROGRESS" | "DONE"
  ) => {
    setTasksInfo((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // Handle assignee change
  const handleAssigneeChange = (taskId: number, newAssignee: string) => {
    setTasksInfo((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, assignee: newAssignee } : task
      )
    );
  };

  return (
    <div className="">
      <TasksTable
        tasks={userTasks}
        onStatusChange={handleStatusChange}
        onAssigneeChange={handleAssigneeChange} // Pass the handler here
      />
    </div>
  );
};

export default ProfileTasks;
