import React, { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">About Page</h1>
      <p>This is the About page content.</p>
    </div>
  );
};

export default About;
