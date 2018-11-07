import React from 'react';
import GetStartedButton from './GetStartedButton';

function HeaderText() {
  const headerTextStyles = {
    textAlign: 'right',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '500px',
    left: '17%',
    color: '#455358'
  }
  const headlineStyles = {
    fontSize: '56px',
    fontWeight: '700',
    marginBottom: '20px',
  }
  const headerParagraphStyles = {
    lineHeight: '1.7'
  }
  const getStartedButton = {
    display: 'flex',
    flexDirection: 'row-reverse'
  }
  return(
    <div style={headerTextStyles}>
      <h1 style={headlineStyles}>Simple tools for learning anything.</h1>
      <p style={headerParagraphStyles}>Search millions of study sets or create your own. Improve your grades by studying with flashcards, games and more.</p>
      <div style={getStartedButton}>
        <GetStartedButton/>
      </div>
    </div>
  );
}

export default HeaderText;
