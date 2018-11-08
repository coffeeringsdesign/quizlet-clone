import React from 'react';
import StudyShare from './StudyShare';
import Mission from './Mission';

function MissionStatement() {
  const missionStatementContainer = {
    backgroundColor: '#f0f0f0',
    paddingBottom: '100px',
    position: 'relative'
  }
  const decoration3Styles = {
    position: 'absolute',
    left: '0',
    top: '-165px'
  }
  return(
    <div style={missionStatementContainer}>
      <div style={decoration3Styles}>
        <img src="https://quizlet.com/a/i/homepage/decoration-c.Vvfg.png"></img>
      </div>
      <StudyShare/>
      <Mission/>
    </div>
  );
}

export default MissionStatement;
