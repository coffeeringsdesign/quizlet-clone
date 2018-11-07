import React from 'react';
import BackToSchoolCard from './BackToSchoolCard';

function BackToSchool() {
  const backToSchoolStyles = {
    backgroundColor: '#f0f0f0',
    padding: '7% 10%'
  }
  return (
    <div style={backToSchoolStyles}>
      <BackToSchoolCard/>
    </div>
  );
}

export default BackToSchool;
