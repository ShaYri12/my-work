import React from "react";
import tasksData from "../assets/tasksData"; // Adjust path if necessary

const Tasks: React.FC = () => {
  const storedUser = localStorage.getItem("auth");
  const userEmail: string | null = storedUser
    ? JSON.parse(storedUser).email
    : null;

  // Filter tasks based on userEmail
  const userTasks = userEmail
    ? tasksData.filter((task) => task.email === userEmail)
    : [];

  // Function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "DONE":
        return "text-green-500"; // Green color for DONE
      case "TO DO":
        return "text-red-500"; // Red color for TO DO
      case "IN PROGRESS":
        return "text-blue-500"; // Blue color for IN PROGRESS
      default:
        return "text-gray-500"; // Default color
    }
  };

  return (
    <div className="flex justify-center items-center md:px-8 px-3 py-8 bg-[#F5DAFF] min-h-screen">
      <div className="w-full overflow-x-auto">
        <table
          cellSpacing="3"
          className="w-full max-w-full table-auto bg-transparent"
        >
          {/* Table Header */}
          <thead>
            <tr className="uppercase">
              <th className="sm:py-4 py-1 md:px-6 sm:px-2 px-1 text-left ">
                <div className="bg-[#A15FF480] text-center md:text-[15px] sm:text-[13px] text-[11px] sm:leading-[22.5px] text-[#FCFCFC] font-[700] font-poppins rounded-[12px] py-[16px] px-4">
                  Key
                </div>
              </th>
              <th className="sm:py-4 py-1 md:px-6 sm:px-2 px-1 text-left ">
                <div className="bg-[#A15FF480] text-center md:text-[15px] sm:text-[13px] text-[11px] sm:leading-[22.5px] text-[#FCFCFC] font-[700] font-poppins rounded-[12px] py-[16px] px-4">
                  Summary
                </div>
              </th>
              <th className="sm:py-4 py-1 md:px-6 sm:px-2 px-1 text-left ">
                <div className="bg-[#A15FF480] text-center md:text-[15px] sm:text-[13px] text-[11px] sm:leading-[22.5px]  text-[#FCFCFC] font-[700] font-poppins rounded-[12px] py-[16px] px-4">
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
            {userTasks.map((row, index) => (
              <React.Fragment key={row.id}>
                <tr>
                  <td className="md:py-[14px] sm:py-[12px] py-[10px] md:px-6 px-2 rounded-l-[20px] text-center border-r-[1.5px] border-dashed border-[#000000]"></td>
                  <td className="md:py-[14px] sm:py-[12px] py-[10px] md:px-6 px-2 rounded-l-[20px] text-center border-r-[1.5px] border-dashed border-[#000000]"></td>
                  <td className="md:py-[14px] sm:py-[12px] py-[10px] md:px-6 px-2 rounded-l-[20px] text-center border-r-[1.5px] border-dashed border-[#000000]"></td>
                </tr>
                <tr
                  key={row.id}
                  style={{
                    marginTop: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <td className="sm:py-4 py-1 md:px-6 px-2 bg-white rounded-l-[20px] shadow-lg text-center border-r-[1.5px] border-dashed border-[#000000]">
                    <div className="font-[700] md:text-[25px] sm:text-[15px] text-[11px] text-black font-poppins sm:leading-[37.5px]">
                      #{index + 1}
                    </div>
                  </td>
                  <td className="max-w-[320px] sm:py-4 py-1 md:px-6 px-2 bg-white shadow-lg text-left border-r-[1.5px] border-dashed border-[#000000]">
                    <span className="font-[400] md:text-[15px] sm:text-[13px] text-[10px] sm:leading-[22.5px] font-poppins text-black">
                      {row.summary}
                    </span>
                  </td>
                  <td className="sm:py-4 py-1 md:px-6 px-2 bg-white shadow-lg text-center border-r-[1.5px] border-dashed border-[#000000]">
                    <span
                      className={`font-[700] md:text-[20px] sm:text-[15px] text-[11px] sm:leading-[30px] font-poppins ${getStatusColor(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="sm:py-4 py-1 md:px-6 px-2 bg-white rounded-r-[20px] shadow-lg text-center">
                    <span className="font-[700] md:text-[20px] sm:text-[15px] text-[11px] sm:leading-[30px] text-black font-poppins">
                      {row.assignee}
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

export default Tasks;
