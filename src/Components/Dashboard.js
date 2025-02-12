import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import SettingSelector from './SettingSelector';
import WorkoutList from './WorkoutList';

const workoutsData = {
  Room: [
    { id: 1, name: "Push Ups" },
    { id: 2, name: "Squats" },
    { id: 3, name: "Plank" }
  ],
  Beach: [
    { id: 4, name: "Jogging" },
    { id: 5, name: "Lunges" },
    { id: 6, name: "Swimming" }
  ],
  Office: [
    { id: 7, name: "Desk Push Ups" },
    { id: 8, name: "Chair Squats" },
    { id: 9, name: "Standing Leg Raises" }
  ]
};

const Dashboard = () => {
  const [selectedSetting, setSelectedSetting] = useState(null);
  const [completedWorkouts, setCompletedWorkouts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/Login');
    }
  }, [navigate]);


  const handleSettingChange = (setting) => {
    setSelectedSetting(setting);
    setCompletedWorkouts([]);
  };

  const toggleWorkoutCompletion = (id) => {
    setCompletedWorkouts((prev) =>
      prev.includes(id)
        ? prev.filter((workoutId) => workoutId !== id)
        : [...prev, id]
    );
  };


  return (
    <div className="main-container">
    <h1>Workouts for different location</h1>
    <SettingSelector onSettingChange={handleSettingChange} />
    {selectedSetting && (
      <WorkoutList
        workouts={workoutsData[selectedSetting]}
        completedWorkouts={completedWorkouts}
        onToggleCompletion={toggleWorkoutCompletion}
      />
    )}
    <Link to='/'>Main Menu</Link>
  </div>
  )
}

export default Dashboard