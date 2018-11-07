import React from 'react';
import PropTypes from 'prop-types';


function Terms(props) {
  return(
    <div>
      <img src="{props.photo}"></img>
      <div>
        <p>{props.terms} terms</p>
        <img src="{props.profilePic}"></img>
        <p>{props.author}</p>
        <p>{props.status}</p>
      </div>
      <h3>{props.title}</h3>
    </div>
  );
}

Terms.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  status: PropTypes.string,
  terms: PropTypes.string.isRequired,
  photo: PropTypes.string,
  profilePic: PropTypes.string.isRequired
}

export default Terms;
