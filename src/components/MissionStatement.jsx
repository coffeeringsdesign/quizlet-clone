import React from 'react';
import StudyShare from './StudyShare';
import Mission from './Mission';

function MissionStatement() {
  const missionStatementContainer = {
    backgroundColor: '#f0f0f0',
    paddingBottom: '100px'
  }
  return(
    <div style={missionStatementContainer}>
      <StudyShare/>
      <Mission/>
    </div>
  );
}

export default MissionStatement;
