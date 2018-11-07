import React from 'react';

function Mission() {
  const missionStyles = {
    display: 'flex',
    width: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    color: '#455358',
    marginTop: '100px'
  }
  const rightTextStyles = {
    lineHeight: '1.7',
    width: '85%'
  }
  const paragraphStyles = {
    marginBottom: '20px'
  }
  const h2Styles = {
    fontSize: '35px',
    marginBottom: '10px',
    textAlign: 'right'
  }
  const leftTextStyles = {
    width: '70%',
    marginRight: '30px'
  }
  const quizletStyles = {
    textTransform: 'uppercase',
    fontSize: '15px',
    letterSpacing: '1.5px',
    borderBottom: '5px solid #3ccfcf',
    paddingBottom: '10px',
    width: '170px',
    marginTop: '28px'
  }
  return (
    <div style={missionStyles}>
      <div style={leftTextStyles}>
        <h2 style={h2Styles}>Our mission is to help students practice and master whatever they're learning.</h2>
      </div>
      <div style={rightTextStyles}>
        <p style={paragraphStyles}>We do this by making it simple for students and teachers to create and share online learning materials. Quizlet is proud to be the most popular online educational service in the United States, used by more than 50 million students and teachers each month.</p>
        <p style={paragraphStyles}>Starting with a simple online learning tool, Quizlet today offers tools for students to make flashcards, practice spelling, play learning games, test their knowledge, collaborate with other students, and more.</p>
        <h5 style={quizletStyles}>Quizlet's Mission</h5>
      </div>
    </div>
  );
}

export default Mission;
