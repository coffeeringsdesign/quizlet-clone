import React from 'react';

function SignUpButtons() {
  const buttonsStyles = {
    display: 'flex',
    flexDirection: 'row',
    width: '12.2%',
    justifyContent: 'space-between',
    fontSize: '13px',
    alignItems: 'center'
  }
  const signUpStyles = {
    backgroundColor: '#3ccfcf',
    padding: '13px 26px'
  }
  return (
    <div style={buttonsStyles}>
      <h3>Log in</h3>
      <h3 style={signUpStyles}>Sign up</h3>
    </div>
  );
}

export default SignUpButtons;
