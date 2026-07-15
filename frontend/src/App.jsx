import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/message');
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