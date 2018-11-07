import React from 'react';

function Logo() {
  const logoStyles = {
    fontFamily: "'Krona One', sans-serif",
    letterSpacing: "-0.5px",
    fontSize: '23px',
    fontWeight: 'normal'
  }
  return (
    <h1 style={logoStyles}>Quizlet</h1>
  );
}

export default Logo;
