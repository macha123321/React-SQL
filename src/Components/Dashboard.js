import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
    <h1>Dashboard</h1>
    <Link to='/'>Main Menu</Link>
    </>
  )
}

export default Dashboard