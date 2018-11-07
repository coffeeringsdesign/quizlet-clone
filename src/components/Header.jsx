import React from 'react';
import HeaderText from './HeaderText';

function Header() {
  const headerStyles = {
    backgroundImage: 'url(https://quizlet.com/a/i/homepage/splash-laptop-desktop.m34g.jpg)',
    width: '100%',
    height: '670px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    overflow: 'hidden'
  }
  return (
    <div style={headerStyles}>
      <HeaderText/>
    </div>
  );
}

export default Header;
