import React, { useEffect } from "react";

const DoneTasks: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Done Tasks Page</h1>
      <p>This is the Done Tasks page content.</p>
    </div>
  );
};

export default DoneTasks;
