import React, { useState, useEffect, useRef } from "react";
import { Task } from "../assets/tasksData";
import { IoIosArrowDown } from "react-icons/io";

interface TasksTableProps {
  tasks: Task[];
}

const TasksTable: React.FC<TasksTableProps> = ({ tasks }) => {
  const [tasksState, setTasksState] = useState<Task[]>(tasks);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const dropdownRefs = useRef<Map<number, HTMLDivElement | null>>(new Map());

  const handleStatusChange = (
    taskId: number,
    newStatus: "TO DO" | "IN PROGRESS" | "DONE"
  ) => {
    setTasksState((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    setSelectedTaskId(null);
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
      if (selectedTaskId !== null) {
        const dropdown = dropdownRefs.current.get(selectedTaskId);
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setSelectedTaskId(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedTaskId]);

  return (
    <div className="flex justify-center overflow-auto items-center md:px-8 px-3 py-8 bg-[#F5DAFF] rounded-[30px]">
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
            {tasksState.map((task, index) => (
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
                  <td className="sm:py-4 py-1 md:px-6 px-2 bg-white shadow-lg text-center border-r-[1.5px] border-dashed border-[#000000]">
                    <div className="relative inline-block">
                      <button
                        onClick={() =>
                          setSelectedTaskId(
                            selectedTaskId === task.id ? null : task.id
                          )
                        }
                        className={`flex items-center gap-1 font-[700] md:text-[20px] sm:text-[15px] text-[11px] sm:leading-[30px] font-poppins ${getStatusColor(
                          task.status
                        )}`}
                      >
                        {task.status}
                        <IoIosArrowDown />
                      </button>
                      {selectedTaskId === task.id && (
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
                              )} text-white hover:bg-gray-200`}
                            >
                              {status}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="sm:py-4 py-1 md:px-6 px-2 bg-white rounded-r-[20px] shadow-lg text-center">
                    <span className="font-[700] md:text-[18px] sm:text-[15px] text-[11px] sm:leading-[30px] text-black font-poppins">
                      {task.assignee}
                    </span>
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
  );
};

export default TasksTable;
