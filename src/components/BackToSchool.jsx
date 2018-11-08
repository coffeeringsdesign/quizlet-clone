import React from 'react';
import BackToSchoolCard from './BackToSchoolCard';

function BackToSchool() {
  const backToSchoolStyles = {
    backgroundColor: '#f0f0f0',
    padding: '7% 10%',
    position: 'relative'
  }
  const decoration1Styles = {
    position: 'absolute',
    top: '0',
    left: '0'
  }
  const decoration2Styles = {
    position: 'absolute',
    right: '0',
    bottom: '-175px'
  }
  return (
    <div style={backToSchoolStyles}>
      <div style={decoration1Styles}>
        <img src="https://quizlet.com/a/i/homepage/decoration-a.jdAq.png"></img>
      </div>
      <BackToSchoolCard/>
      <div style={decoration2Styles}>
        <img src="https://quizlet.com/a/i/homepage/decoration-b.RCdp.png"></img>
      </div>
    </div>
  );
}

export default BackToSchool;
