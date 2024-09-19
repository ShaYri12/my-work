import React from "react";
import tasksData from "../assets/tasksData";
import TasksTable from "../components/TasksTable";

const Tasks: React.FC = () => {
  // Display all tasks
  return <TasksTable tasks={tasksData} />;
};

export default Tasks;
