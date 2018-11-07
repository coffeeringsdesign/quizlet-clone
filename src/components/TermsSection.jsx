import React from 'react';
import TermBlock from './TermBlock';
import GetStartedButton from './GetStartedButton';

function TermsSection() {
  const termSectionStyles = {
    marginTop: '100px',
    marginBottom: '100px'
  }
  const titleStyles = {
    fontSize: '35px',
    textAlign: 'center',
    marginBottom: '8px',
    color: '#455358'
  }
  const getStartedTerms = {
    display: 'flex',
    justifyContent: 'center'
  }
  return(
    <div style={termSectionStyles}>
      <h2 style={titleStyles}>289,259,000</h2>
      <h2 style={titleStyles}>Study Sets and Counting</h2>
      <TermBlock/>
      <div style={getStartedTerms}>
        <GetStartedButton/>
      </div>
    </div>
  );
}

export default TermsSection;
