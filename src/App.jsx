import React, { useState } from 'react';
import './App.css';

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon">
          <img src= "eye.png" alt="Eye Icon"/>
        </div>
        <h2>Name: javeed</h2>
        <p>Registration No: 7657556</p>
        <button onClick={handleToggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="details">
            <p>Age: 30</p>
            <p>Department: Computer Science</p>
            <p>Address: 1234 Elm Street, Springfield</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;