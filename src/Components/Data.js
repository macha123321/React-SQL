import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Data = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    console.log('useEffect called');
    fetch('http://localhost:3001/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Data from MySQL</h1>
      {data.length === 0 ? (
        <p>No data available</p>
      ) : (
        <div>
          {data.map(item => (
            <div key={item.userID} style={{ marginBottom: '10px' }}>
              <p><strong>Username:</strong> {item.username}</p>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Password:</strong> {item.password}</p>
              <p><strong>Phone Number:</strong> {item.phoneNumber}</p>
            </div>
          ))}
        </div>
      )}
      <Link to='/'>Main Menu</Link>
    </div>
  );
}

export default Data