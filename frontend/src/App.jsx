import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
 
const response = await fetch(`${baseUrl}/api/message`);
const handleClick = async () => {
  try {
    // Relative path works automatically on Vercel
    // const response = await fetch('/api/message');
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