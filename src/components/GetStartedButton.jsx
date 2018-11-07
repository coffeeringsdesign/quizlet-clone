import React from 'react';

function GetStartedButton() {
  const getStartedButtonStyles = {
    color: 'white',
    backgroundColor: '#3ccfcf',
    padding: '25px',
    textAlign: 'center',
    width: '325px',
    fontSize: '18px',
    marginTop: '28px',
    letterSpacing: '1px'
  }
  return(
    <h5 style={getStartedButtonStyles}>Get started</h5>
  );
}

export default GetStartedButton;
