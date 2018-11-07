import React from 'react';
import StudyShare from './StudyShare';

function MissionStatement() {
  const missionStatementContainer = {
    backgroundColor: '#f0f0f0',
    paddingBottom: '100px'
  }
  return(
    <div style={missionStatementContainer}>
      <StudyShare/>
    </div>
  );
}

export default MissionStatement;
