import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
  const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
  const response = await fetch(`${baseUrl}/api/message`);
  const data = await response.json();
  setMessage(data.text);
};

  return (
    <div>
      <button onClick={handleClick}>Get Message</button>
      <p>{message}</p>
    </div>
  );
}

export default App;