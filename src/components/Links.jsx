import React from 'react';

function Links() {
  const linksStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '200px',
    marginRight: '60%',
    marginLeft: '60px',
    fontSize: '13px'
  }
  const searchStyle = {
    borderRight: '2px solid #3b4c9b',
    paddingRight: '2rem'
  }
  return (
    <div style={linksStyles}>
      <h3 style={searchStyle}>Search</h3>
      <h3>Create</h3>
    </div>
  );
}

export default Links;
