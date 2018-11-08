import React from 'react';
import Logo from './Logo';
import SocialMedia from './SocialMedia';

function Footer() {
  const footerStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: '1.4% 5%',
    alignItems: 'center',
    backgroundColor: '#4257b2',
    color: 'white',
    paddingTop: '50px',
    paddingBottom: '60px',
    alignItems: 'flex-start'
  }
  const linksStyles = {
    display: 'flex',
    width: '45%',
    justifyContent: 'space-between',
    lineHeight: '2.65'
  }
  const linkListStyles = {
    fontSize: '13px',
    letterSpacing: '0.7px',
    listStyle: 'none'
  }
  const linksHeaderStyles = {
    fontSize: '16px'
  }
  const leftDivStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '320px',
    justifyContent: 'space-between'
  }
  const copyrightStyles = {
    fontSize: '12px',
    letterSpacing: '1.5px'
  }
  const languagesStyles = {
    marginTop: '30px',
    lineHeight: '2'
  }
  return(
    <div style={footerStyles}>
      <div style={leftDivStyles}>
        <Logo/>
        <div>
          <p style={copyrightStyles}>© 2018 Quizlet Inc.</p>
        </div>
      </div>
      <div style={linksStyles}>
        <div>
          <h5 style={linksHeaderStyles}>Features</h5>
          <ul style={linkListStyles}>
            <li>Quizlet Live</li>
            <li>Quizlet Learn</li>
            <li>Diagrams</li>
            <li>Flash Cards</li>
            <li>Mobile</li>
            <li>Verified Creators</li>
          </ul>
        </div>
        <div>
          <h5 style={linksHeaderStyles}>Help</h5>
          <ul style={linkListStyles}>
            <li>Sign up</li>
            <li>Help Center</li>
            <li>Honor Code</li>
            <li>Community Guidelines</li>
            <li>Students</li>
            <li>Teachers</li>
          </ul>
        </div>
        <div>
          <h5 style={linksHeaderStyles}>About</h5>
          <ul style={linkListStyles}>
            <li>Company</li>
            <li>Press</li>
            <li>Jobs</li>
            <li>Testimonials</li>
            <li>Advertise</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h5 style={linksHeaderStyles}>Follow us</h5>
          <SocialMedia/>
        </div>
        <div style={languagesStyles}>
          <h5 style={linksHeaderStyles}>Language</h5>
          <ul style={linkListStyles}>
            <li>English (USA)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
