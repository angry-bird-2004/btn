import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

 // Use explicit production backend in production builds to avoid localhost fallback on Vercel
 const baseUrl = import.meta.env.VITE_API_URL || (
  import.meta.env.MODE === "production"
    ? "https://btn-xsnr.vercel.app"
    : "http://localhost:5000"
);
  const handleClick = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/message`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.text);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Get Message</button>
      <p>{message}</p>
    </div>
  );
}

export default App;