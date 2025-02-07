import React from 'react';

function SettingSelector({ onSettingChange }) {
  return (
    <div>
      <h2>Select a location</h2>
      <button onClick={() => onSettingChange('Beach')}>Beach</button>
      <button onClick={() => onSettingChange('Room')}>Room</button>
      <button onClick={() => onSettingChange('Office')}>Office</button>
    </div>
  );
}

export default SettingSelector;