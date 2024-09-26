import React, { useEffect, useState } from "react";
import { Task } from "../assets/tasksData";
import TasksTable from "../components/TasksTable";

const Tasks: React.FC = () => {
  // Initialize tasksInfo with data from localStorage
  const [tasksInfo, setTasksInfo] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasksData");
    return storedTasks ? JSON.parse(storedTasks) : []; // Load tasks from localStorage or set to empty array
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
  }, []);

  // Update localStorage whenever tasksInfo changes
  useEffect(() => {
    localStorage.setItem("tasksData", JSON.stringify(tasksInfo));
  }, [tasksInfo]);

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

  const handleAssigneeChange = (
    taskId: number,
    newAssignee: string,
    newEmail: string
  ) => {
    setTasksInfo((prevTasks) =>
      prevTasks.map(
        (task) =>
          task.id === taskId
            ? { ...task, assignee: newAssignee, email: newEmail }
            : task // Update both assignee and email
      )
    );
  };

  return (
    <TasksTable
      tasks={tasksInfo}
      onStatusChange={handleStatusChange}
      onAssigneeChange={handleAssigneeChange} // Pass updated handler
    />
  );
};

export default Tasks;
