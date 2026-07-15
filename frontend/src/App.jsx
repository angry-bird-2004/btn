import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

 const baseUrl = import.meta.env.VITE_API_BASE || 'http://localhost:5000';
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