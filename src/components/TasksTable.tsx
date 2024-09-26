import React, { useState, useEffect, useRef } from "react";
import { Task } from "../assets/tasksData";
import { IoIosArrowDown } from "react-icons/io";

interface TasksTableProps {
  tasks: Task[];
  onStatusChange: (
    taskId: number,
    newStatus: "TO DO" | "IN PROGRESS" | "DONE"
  ) => void;
  onAssigneeChange: (
    taskId: number,
    newAssignee: string,
    newEmail: string
  ) => void;
}

const TasksTable: React.FC<TasksTableProps> = ({
  tasks,
  onStatusChange,
  onAssigneeChange,
}) => {
  const [tasksState, setTasksState] = useState<Task[]>(tasks);
  const [userData, setUserData] = useState<{ name: string; email: string }[]>(
    []
  ); // Updated to include email
  const [openStatusTaskId, setOpenStatusTaskId] = useState<number | null>(null); // Status dropdown tracking
  const [openAssigneeTaskId, setOpenAssigneeTaskId] = useState<number | null>(
    null
  ); // Assignee dropdown tracking
  const dropdownRefs = useRef<Map<number, HTMLDivElement | null>>(new Map());

  useEffect(() => {
    // Load user data from localStorage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData)); // Parse the user data from localStorage
    }
  }, []);

  const handleStatusChange = (
    taskId: number,
    newStatus: "TO DO" | "IN PROGRESS" | "DONE"
  ) => {
    setTasksState((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    onStatusChange(taskId, newStatus); // Call the callback prop
    setOpenStatusTaskId(null); // Close status dropdown
  };

  const handleAssigneeChange = (
    taskId: number,
    newAssignee: string,
    newEmail: string
  ) => {
    setTasksState((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, assignee: newAssignee, email: newEmail }
          : task
      )
    );
    onAssigneeChange(taskId, newAssignee, newEmail); // Call the callback prop with email
    setOpenAssigneeTaskId(null); // Close assignee dropdown
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DONE":
        return "text-[#6FD33F]"; // Green color for DONE
      case "TO DO":
        return "text-[#BE5353]"; // Red color for TO DO
      case "IN PROGRESS":
        return "text-[#51BADC]"; // Sky Blue color for IN PROGRESS
      default:
        return "text-gray-500"; // Default color
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const openDropdown = dropdownRefs.current.get(
        openStatusTaskId || openAssigneeTaskId || -1
      );
      if (openDropdown && !openDropdown.contains(event.target as Node)) {
        setOpenStatusTaskId(null);
        setOpenAssigneeTaskId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openStatusTaskId, openAssigneeTaskId]);

  return (
    <div className="flex justify-start">
      <div className="flex justify-center w-full items-center md:px-8 px-3 py-8 bg-[#F5DAFF] rounded-[30px]">
        <div className="overflow-x-auto w-full">
          <table className="w-full bg-transparent">
            {/* Table Header */}
            <thead>
              <tr className="uppercase text-nowrap">
                <th className="sm:py-4 py-1 md:px-6 sm:px-2 px-1 text-left">
                  <div className="bg-[#A15FF480] text-center md:text-[15px] sm:text-[13px] text-[11px] sm:leading-[22.5px] text-[#FCFCFC] font-[700] font-poppins rounded-[12px] py-[16px] px-4 text-balance">
                    Key
                  </div>
                </th>
                <th className="sm:py-4 py-1 md:px-6 sm:px-2 px-1 text-left">
                  <div className="bg-[#A15FF480] text-center md:text-[15px] sm:text-[13px] text-[11px] sm:leading-[22.5px] text-[#FCFCFC] font-[700] font-poppins rounded-[12px] py-[16px] px-4">
                    Summary
                  </div>
                </th>
                <th className="sm:py-4 py-1 md:px-6 sm:px-2 px-1 text-left">
                  <div className="bg-[#A15FF480] text-center md:text-[15px] sm:text-[13px] text-[11px] sm:leading-[22.5px] text-[#FCFCFC] font-[700] font-poppins rounded-[12px] py-[16px] px-4">
                    Status
                  </div>
                </th>
                <th className="sm:py-4 py-1 md:px-6 sm:px-2 px-1 text-left">
                  <div className="bg-[#A15FF480] text-center md:text-[15px] sm:text-[13px] text-[11px] sm:leading-[22.5px] text-[#FCFCFC] font-[700] font-poppins rounded-[12px] py-[16px] px-4">
                    Assignee
                  </div>
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="space-y-10">
              {tasksState.map((task) => (
                <React.Fragment key={task.id}>
                  <tr className="text-nowrap">
                    <td className="md:py-[14px] sm:py-[12px] py-[10px] md:px-6 px-2 rounded-l-[20px] text-center border-r-[1.5px] border-dashed border-[#000000]"></td>
                    <td className="md:py-[14px] sm:py-[12px] py-[10px] md:px-6 px-2 rounded-l-[20px] text-center border-r-[1.5px] border-dashed border-[#000000]"></td>
                    <td className="md:py-[14px] sm:py-[12px] py-[10px] md:px-6 px-2 rounded-l-[20px] text-center border-r-[1.5px] border-dashed border-[#000000]"></td>
                  </tr>
                  <tr
                    key={task.id}
                    style={{ marginTop: "16px", marginBottom: "16px" }}
                  >
                    <td className="sm:py-4 py-1 md:px-6 px-2 bg-white rounded-l-[20px] shadow-lg text-center border-r-[1.5px] border-dashed border-[#000000]">
                      <div className="font-[700] md:text-[25px] sm:text-[15px] text-[11px] text-black font-poppins sm:leading-[37.5px]">
                        #{task.key} {/* Use task.key instead of index + 1 */}
                      </div>
                    </td>
                    <td className="min-w-[180px] 2xl:max-w-auto xl:max-w-[330px] md:py-[14px] sm:py-[12px] py-[10px] md:px-6 px-2 bg-white shadow-lg text-left border-r-[1.5px] border-dashed border-[#000000]">
                      <span className="font-[400] md:text-[15px] sm:text-[13px] text-[10px] sm:leading-[22.5px] font-poppins text-black">
                        {task.summary}
                      </span>
                    </td>
                    {/* Status Dropdown */}
                    <td className="sm:py-4 py-1 md:px-6 px-2 bg-white shadow-lg text-center border-r-[1.5px] border-dashed border-[#000000]">
                      <div className="relative inline-block">
                        <button
                          onClick={() => {
                            setOpenStatusTaskId(
                              openStatusTaskId === task.id ? null : task.id
                            );
                            setOpenAssigneeTaskId(null); // Close assignee dropdown if open
                          }}
                          className={`flex items-center gap-1 font-[700] md:text-[20px] sm:text-[15px] text-[11px] sm:leading-[30px] font-poppins ${getStatusColor(
                            task.status
                          )}`}
                        >
                          {task.status}
                          <IoIosArrowDown />
                        </button>
                        {openStatusTaskId === task.id && (
                          <div
                            ref={(el) => dropdownRefs.current.set(task.id, el)}
                            className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 font-poppins rounded-lg shadow-lg z-10"
                          >
                            {["TO DO", "IN PROGRESS", "DONE"].map((status) => (
                              <div
                                key={status}
                                onClick={() =>
                                  handleStatusChange(
                                    task.id,
                                    status as "TO DO" | "IN PROGRESS" | "DONE"
                                  )
                                }
                                className={`cursor-pointer px-4 py-2 font-[600] text-sm ${getStatusColor(
                                  status
                                )} hover:bg-gray-200`}
                              >
                                {status}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                    {/* Assignee Dropdown */}
                    <td className="sm:py-4 py-1 md:px-6 px-2 bg-white rounded-r-[20px] shadow-lg text-center">
                      <div className="relative inline-block">
                        <button
                          onClick={() => {
                            setOpenAssigneeTaskId(
                              openAssigneeTaskId === task.id ? null : task.id
                            );
                            setOpenStatusTaskId(null); // Close status dropdown if open
                          }}
                          className="flex items-center gap-1 font-[700] md:text-[18px] sm:text-[15px] text-[11px] sm:leading-[30px] text-black font-poppins"
                        >
                          {task.assignee}
                          <IoIosArrowDown />
                        </button>
                        {openAssigneeTaskId === task.id && (
                          <div
                            ref={(el) => dropdownRefs.current.set(task.id, el)}
                            className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 font-poppins rounded-lg shadow-lg z-10"
                          >
                            {userData.map((user) => (
                              <div
                                key={user.name}
                                onClick={() =>
                                  handleAssigneeChange(
                                    task.id,
                                    user.name,
                                    user.email
                                  )
                                }
                                className="cursor-pointer px-4 py-2 font-[600] text-sm text-black hover:bg-gray-200"
                              >
                                {user.name}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="md:py-[14px] sm:py-[12px] py-[10px] md:px-6 px-2 rounded-l-[20px] text-center border-r-[1.5px] border-dashed border-[#000000]"></td>
                    <td className="md:py-[14px] sm:py-[12px] py-[10px] md:px-6 px-2 rounded-l-[20px] text-center border-r-[1.5px] border-dashed border-[#000000]"></td>
                    <td className="md:py-[14px] sm:py-[12px] py-[10px] md:px-6 px-2 rounded-l-[20px] text-center border-r-[1.5px] border-dashed border-[#000000]"></td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TasksTable;
