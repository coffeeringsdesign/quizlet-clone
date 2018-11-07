import React from 'react';
import Logo from './Logo';
import Links from './Links';
import SignUpButtons from './SignUpButtons';

function Nav() {
  const navStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: '1.4% 5%',
    alignItems: 'center',
    backgroundColor: '#4257b2',
    color: 'white'
  }
  return (
    <div style={navStyles}>
      <Logo/>
      <Links/>
      <SignUpButtons/>
    </div>
  );
}

export default Nav;
