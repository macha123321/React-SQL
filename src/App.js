import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Data from './Components/Data';
import Main from './Components/Main';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';


function App() {
  

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path ='/' element={<Main />}/>
          <Route path='/Data' element={<Data />}/>
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='Dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
