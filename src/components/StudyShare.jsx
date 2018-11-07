import React from 'react';

function StudyShare() {
  const studyShareContainerStyles = {
    paddingTop: '100px',
    display: 'flex',
    width: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-around'
  }
  const studentStyles = {
    textTransform: 'uppercase',
    fontSize: '15px',
    letterSpacing: '1.5px',
    borderBottom: '5px solid #3ccfcf',
    paddingBottom: '10px',
    width: '134px',
    marginTop: '28px',
    marginLeft: 'auto',
  }
  const teacherStyles = {
    textTransform: 'uppercase',
    fontSize: '15px',
    letterSpacing: '1.5px',
    borderBottom: '5px solid #3ccfcf',
    paddingBottom: '10px',
    width: '134px',
    marginTop: '28px'
  }
  const studySectionStyles = {
    display: 'flex',
    color: '#455358',
    flexDirection: 'column',
    height: '940px',
    justifyContent: 'space-between',
    textAlign: 'right',
    marginRight: '30px'
  }
  const studyHeading={
    fontSize: '35px',
    marginBottom: '10px'
  }
  const studySectionText = {
    paddingRight: '80px',
    lineHeight: '1.7'
  }
  const shareSectionStyles = {
    display: 'flex',
    color: '#455358',
    flexDirection: 'column',
    height: '940px',
    justifyContent: 'space-between',
    textAlign: 'left',
    marginleft: '30px'
  }
  const shareSectionText = {
    paddingLeft: '80px',
    lineHeight: '1.7'
  }
  return(
    <div style={studyShareContainerStyles}>
      <div style={studySectionStyles}>
        <div style={studySectionText}>
          <h2 style={studyHeading}>Study smarter</h2>
          <p>More than 95% of students who learn with Quizlet report improved grades. See how Quizlet’s simple tools can help you learn anything, from beginning algebra, to AP US History, to college level econometrics — and beyond.</p>
          <h5 style={studentStyles}>i'm a student</h5>
        </div>
        <div>
          <img src="https://quizlet.com/a/i/homepage/teachers.YuB2.jpg"></img>
        </div>
      </div>
      <div style={shareSectionStyles}>
        <div>
          <img src="https://quizlet.com/a/i/homepage/students.Nq73.jpg"></img>
        </div>
        <div style={shareSectionText}>
          <h2 style={studyHeading}>Share knowledge</h2>
          <p>Keep students engaged and motivated with Quizlet. Create your own classroom sets, collaborate with other teachers, play Quizlet Live, and give your students materials to help them learn in a more fun and more efficient way.</p>
          <h5 style={teacherStyles}>i'm a teacher</h5>
        </div>
      </div>
    </div>
  );
}

export default StudyShare;
