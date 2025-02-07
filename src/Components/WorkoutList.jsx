import React from 'react';
import WorkoutItem from './WorkoutItem';

function WorkoutList({ workouts, completedWorkouts, onToggleCompletion }) {
  return (
    <div>
      <h2>List of workouts for this place:</h2>
      <ul>
        {workouts.map((workout) => (
          <WorkoutItem
            key={workout.id}
            workout={workout}
            isCompleted={completedWorkouts.includes(workout.id)}
            onToggleCompletion={onToggleCompletion}
          />
        ))}
      </ul>
    </div>
  );
}

export default WorkoutList;