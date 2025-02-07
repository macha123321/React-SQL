import React from 'react';

function WorkoutItem({ workout, isCompleted, onToggleCompletion }) {
  return (
    <li
      style={{
        textDecoration: isCompleted ? 'line-through' : 'none',color: isCompleted ? 'red' : 'black',
        cursor: 'pointer',
      }}
      onClick={() => onToggleCompletion(workout.id)}
    >
      {workout.name}
    </li>
  );
}

export default WorkoutItem;