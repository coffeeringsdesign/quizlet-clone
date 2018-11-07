import React from 'react';
import HeaderText from './HeaderText';

function Header() {
  const headerStyles = {
    backgroundImage: 'url(https://quizlet.com/a/i/homepage/splash-laptop-desktop.m34g.jpg)',
    width: '100vw',
    height: '670px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative'
  }
  return (
    <div style={headerStyles}>
      <HeaderText/>
    </div>
  );
}

export default Header;
