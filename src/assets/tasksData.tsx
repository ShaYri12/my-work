export interface Task {
  id: number;
  key: number;
  summary: string;
  status: "TO DO" | "IN PROGRESS" | "DONE"; // Ensure the status type is restricted
  assignee: string;
  email: string;
}

const tasksData: Task[] = [
  {
    id: 1,
    key: 1,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "TO DO",
    assignee: "John Doe",
    email: "john@example.com",
  },
  {
    id: 2,
    key: 2,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "IN PROGRESS",
    assignee: "Jane Smith",
    email: "jane@example.com",
  },
  {
    id: 3,
    key: 3,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "DONE",
    assignee: "John Doe",
    email: "john@example.com",
  },
  {
    id: 4,
    key: 4,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "TO DO",
    assignee: "Jane Smith",
    email: "jane@example.com",
  },
  {
    id: 5,
    key: 5,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "TO DO",
    assignee: "John Doe",
    email: "john@example.com",
  },
  {
    id: 6,
    key: 6,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "IN PROGRESS",
    assignee: "Jane Smith",
    email: "jane@example.com",
  },
  {
    id: 7,
    key: 7,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "DONE",
    assignee: "John Doe",
    email: "john@example.com",
  },
  {
    id: 8,
    key: 8,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    status: "TO DO",
    assignee: "Jane Smith",
    email: "jane@example.com",
  },
];

export default tasksData;
