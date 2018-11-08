import React from 'react';

function SocialMedia() {
  const socialMediaStyles = {
    fontSize: '13px',
    letterSpacing: '0.7px',
    listStyle: 'none',
    marginTop: '18px',
    lineHeight: '2'
  }
  return(
    <ul style={socialMediaStyles}>
      <li>Facebook</li>
      <li>Instagram</li>
      <li>Twitter</li>
    </ul>
  );
}

export default SocialMedia;
