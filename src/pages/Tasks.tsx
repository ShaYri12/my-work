import React, { useState } from "react";
import { Task } from "../assets/tasksData";
import TasksTable from "../components/TasksTable";
import tasksData from "../assets/tasksData";

const Tasks: React.FC = () => {
  const [tasksInfo, setTasksInfo] = useState<Task[]>(tasksData);

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

  const handleAssigneeChange = (taskId: number, newAssignee: string) => {
    setTasksInfo((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, assignee: newAssignee } : task
      )
    );
  };

  return (
    <TasksTable
      tasks={tasksInfo}
      onStatusChange={handleStatusChange}
      onAssigneeChange={handleAssigneeChange}
    />
  );
};

export default Tasks;
