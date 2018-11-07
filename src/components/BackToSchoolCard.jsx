import React from 'react';

function BackToSchoolCard() {
  const cardStyles = {
    backgroundColor: 'white',
    width: '1060px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    color: '#455358',
    height: '100%',
    boxShadow: '2px 4px 17px 1px rgba(0,0,0,0.29)',
    overflow: 'hidden'
  }
  const imageStyles = {
    width: '43%',
    backgroundImage: 'url(https://quizlet.com/a/i/homepage/back-to-school.Qztr.png)',
    height: '500px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  const cardTextStyles = {
    width: '57%',
    padding: '80px 40px'
  }
  const cardHeadlineTextStyles = {
    marginBottom: '28px',
    fontSize: '37px'
  }
  const cardParagraphStyles = {
    lineHeight: '1.7'
  }
  const learnMoreStyles = {
    textTransform: 'uppercase',
    fontSize: '15px',
    letterSpacing: '1.5px',
    borderBottom: '5px solid #3ccfcf',
    paddingBottom: '10px',
    width: '113px',
    marginTop: '28px'
  }
  return (
    <div style={cardStyles}>
      <div style={cardTextStyles}>
        <h2 style={cardHeadlineTextStyles}>Welcome back to school — and Quizlet!</h2>
        <p style={cardParagraphStyles}>We know the start of the school year can be tough. If you’re a teacher, it means prepping your class material and lesson plans. And, if you’re a student, it means getting back into your studying groove. Fortunately, while you were enjoying your summer, we were working on making Quizlet smarter. Check out four new features that will help save you time, study more efficiently and collaborate more effectively.</p>
        <h5 style={learnMoreStyles}>Learn More</h5>
      </div>
      <div style={imageStyles}></div>
    </div>
  );
}

export default BackToSchoolCard;
