// src/assets/tasksData.ts

interface Task {
  id: number;
  summary: string;
  status: "TO DO" | "IN PROGRESS" | "DONE";
  assignee: string;
  email: string;
}

const tasksData: Task[] = [
  {
    id: 1,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "TO DO",
    assignee: "John Doe",
    email: "john@example.com",
  },
  {
    id: 2,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "IN PROGRESS",
    assignee: "Jane Smith",
    email: "jane@example.com",
  },
  {
    id: 3,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "DONE",
    assignee: "John Doe",
    email: "john@example.com",
  },
  {
    id: 4,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "TO DO",
    assignee: "Jane Smith",
    email: "jane@example.com",
  },
  {
    id: 5,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "TO DO",
    assignee: "John Doe",
    email: "john@example.com",
  },
  {
    id: 6,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "IN PROGRESS",
    assignee: "Jane Smith",
    email: "jane@example.com",
  },
  {
    id: 7,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "DONE",
    assignee: "John Doe",
    email: "john@example.com",
  },
  {
    id: 8,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "TO DO",
    assignee: "Jane Smith",
    email: "jane@example.com",
  },
];

export default tasksData;
