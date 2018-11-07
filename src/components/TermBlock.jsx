import React from 'react';
import Terms from './Terms';

const masterTermList = [
  {
    title: 'Human Biology - Blood',
    author: 'JerichoFallen',
    status: null,
    terms: '39',
    photo: null,
    profilePic: 'https://quizlet.com/a/i/animals/33.4XdT.jpg'
  },
  {
    title: 'Trigonometric and inverse trigonometric functions',
    author: 'mkorot',
    status: 'teacher',
    terms: '32',
    photo: null,
    profilePic: 'https://gimg.quizlet.com/-6ktfaV-DTdg/AAAAAAAAAAI/AAAAAAAAACA/Z4KKBTLdyRs/photo.jpg?sz=24'
  },
  {
    title: 'Map of Mexico states',
    author: 'laura_oppen',
    status: 'teacher',
    terms: '29',
    photo: null,
    profilePic: 'https://gimg.quizlet.com/-_4XVKDyAjVU/AAAAAAAAAAI/AAAAAAAAAA0/0GDBCgUg_j4/photo.jpg?sz=24'
  },
  {
    title: 'Stoachastic methods',
    author: 'lois_perry3',
    status: null,
    terms: '14',
    photo: null,
    profilePic: 'https://gimg.quizlet.com/-ml8NY9PmkPo/AAAAAAAAAAI/AAAAAAAAAAA/TqzZu6R3uww/photo.jpg?sz=24'
  },
  {
    title: 'Missions of California',
    author: 'Chris_MacNeil',
    status: null,
    terms: '27',
    photo: 'https://o.quizlet.com/i/hJX1KwboNDuGoOH7buXg0Q.jpg',
    profilePic: 'https://gimg.quizlet.com/-Tbfv_MurR_I/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaM-z5N7LawMOCQ8AU4Zn8LbYIscVA/mo/photo.jpg?sz=24'
  },
  {
    title: 'Cat breeds',
    author: 'Cheercatsara',
    status: null,
    terms: '51',
    photo: 'https://farm5.staticflickr.com/4120/4942444012_07fc707abb.jpg',
    profilePic: 'https://quizlet.com/a/i/animals/44.T4pg.jpg'
  },
  {
    title: 'Capitals of the world',
    author: 'LHaara',
    status: null,
    terms: '60',
    photo: 'https://o.quizlet.com/i/6RMhgydtFcV4R8vAOTTk9Q.jpg',
    profilePic: 'https://quizlet.com/a/i/animals/36.mYfN.jpg'
  },
  {
    title: 'Chinese dynasties',
    author: 'LCS-High',
    status: 'teacher',
    terms: '13',
    photo: null,
    profilePic: 'https://up.quizlet.com/11nehh-sAdcZ-96s.jpg'
  },
  {
    title: 'Geometric angles',
    author: 'Kate_N',
    status: null,
    terms: '9',
    photo: 'https://o.quizlet.com/1iCoPbQFiEeeRjCBEPPqPg_b.png',
    profilePic: 'https://gimg.quizlet.com/-ml8NY9PmkPo/AAAAAAAAAAI/AAAAAAAAAAA/TqzZu6R3uww/photo.jpg?sz=24'
  },
  {
    title: 'Music theory',
    author: 'Joshua_P',
    status: null,
    terms: '15',
    photo: null,
    profilePic: 'https://gimg.quizlet.com/-rpJJ71tEl1U/AAAAAAAAAAI/AAAAAAAAADg/E2Lv3F49hOo/photo.jpg?sz=24'
  },
  {
    title: 'Airport short codes',
    author: 'CFrench',
    status: 'plus',
    terms: '9',
    photo: 'https://farm6.staticflickr.com/5160/7199223346_e53868b5f4.jpg',
    profilePic: 'https://quizlet.com/a/i/animals/54.8bGG.jpg'
  }
]

function TermBlock() {
  const termBlockStyles = {
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '80%',
    height: '1850px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  const studyStyles = {
    width: '30%',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '4px dashed #3ccfcf',
    padding: '5%',
    color: '#455358',
    marginBottom: '28px'
  }
  const createStyles = {
    backgroundColor: '#3ccfcf',
    padding: '13px 26px',
    color: 'white',
    width: '160px',
    fontSize: '14px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '24px'
  }
  const createHeadlineStyles = {
    fontSize: '29px'
  }
  return(
    <div style={termBlockStyles}>
      <div style={studyStyles}>
        <h3 style={createHeadlineStyles}>Make the perfect study set</h3>
        <p style={createStyles}>Create your own</p>
      </div>
      {masterTermList.map((term, index)=>
      <Terms title={term.title}
        author={term.author}
        status={term.status}
        terms={term.terms}
        photo={term.photo}
        profilePic={term.profilePic}
        key={index}/>
      )}
    </div>
  );
}

export default TermBlock;
