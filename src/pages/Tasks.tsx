import React, { useState, useEffect } from "react";
import { Task } from "../assets/tasksData";
import TasksTable from "../components/TasksTable";

// Helper function to get tasks from localStorage or default to initial data
const getTasksFromLocalStorage = (): Task[] => {
  const tasks = localStorage.getItem("tasksData");
  return tasks ? JSON.parse(tasks) : []; // Default to empty array if no tasks in localStorage
};

const Tasks: React.FC = () => {
  // Load tasks from localStorage or use initial data
  const [tasksInfo, setTasksInfo] = useState<Task[]>(getTasksFromLocalStorage);

  // Update tasks data in localStorage whenever it changes
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

  return <TasksTable tasks={tasksInfo} onStatusChange={handleStatusChange} />;
};

export default Tasks;
