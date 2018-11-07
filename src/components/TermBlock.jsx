import React from 'react';
import Terms from './Terms';

const masterTermList = [
  {
    title: 'Flowers',
    author: 'emilyjester',
    status: 'plus',
    terms: '9',
    photo: 'https://o.quizlet.com/XmLG2MuKyEVHZzZ0CU.KYw_b.png',
    profilePic: 'https://gimg.quizlet.com/-_4XVKDyAjVU/AAAAAAAAAAI/AAAAAAAAAA0/0GDBCgUg_j4/photo.jpg?sz=24'
  },
  {
    title: 'Kittens',
    author: 'emilyjester',
    status: 'plus',
    terms: '9',
    photo: 'https://o.quizlet.com/XmLG2MuKyEVHZzZ0CU.KYw_b.png',
    profilePic: 'https://gimg.quizlet.com/-_4XVKDyAjVU/AAAAAAAAAAI/AAAAAAAAAA0/0GDBCgUg_j4/photo.jpg?sz=24'
  },
  {
    title: 'Flowers',
    author: 'emilyjester',
    status: 'plus',
    terms: '9',
    photo: 'https://o.quizlet.com/XmLG2MuKyEVHZzZ0CU.KYw_b.png',
    profilePic: 'https://gimg.quizlet.com/-_4XVKDyAjVU/AAAAAAAAAAI/AAAAAAAAAA0/0GDBCgUg_j4/photo.jpg?sz=24'
  },
  {
    title: 'Flowers',
    author: 'emilyjester',
    status: 'plus',
    terms: '9',
    photo: 'https://o.quizlet.com/XmLG2MuKyEVHZzZ0CU.KYw_b.png',
    profilePic: 'https://gimg.quizlet.com/-_4XVKDyAjVU/AAAAAAAAAAI/AAAAAAAAAA0/0GDBCgUg_j4/photo.jpg?sz=24'
  },
  {
    title: 'Flowers',
    author: 'emilyjester',
    status: 'plus',
    terms: '9',
    photo: 'https://o.quizlet.com/XmLG2MuKyEVHZzZ0CU.KYw_b.png',
    profilePic: 'https://gimg.quizlet.com/-_4XVKDyAjVU/AAAAAAAAAAI/AAAAAAAAAA0/0GDBCgUg_j4/photo.jpg?sz=24'
  },
  {
    title: 'Flowers',
    author: 'emilyjester',
    status: 'plus',
    terms: '9',
    photo: 'https://o.quizlet.com/XmLG2MuKyEVHZzZ0CU.KYw_b.png',
    profilePic: 'https://gimg.quizlet.com/-_4XVKDyAjVU/AAAAAAAAAAI/AAAAAAAAAA0/0GDBCgUg_j4/photo.jpg?sz=24'
  },
  {
    title: 'Flowers',
    author: 'emilyjester',
    status: 'plus',
    terms: '9',
    photo: 'https://o.quizlet.com/XmLG2MuKyEVHZzZ0CU.KYw_b.png',
    profilePic: 'https://gimg.quizlet.com/-_4XVKDyAjVU/AAAAAAAAAAI/AAAAAAAAAA0/0GDBCgUg_j4/photo.jpg?sz=24'
  },
  {
    title: 'Flowers',
    author: 'emilyjester',
    status: 'plus',
    terms: '9',
    photo: 'https://o.quizlet.com/XmLG2MuKyEVHZzZ0CU.KYw_b.png',
    profilePic: 'https://gimg.quizlet.com/-_4XVKDyAjVU/AAAAAAAAAAI/AAAAAAAAAA0/0GDBCgUg_j4/photo.jpg?sz=24'
  },
  {
    title: 'Flowers',
    author: 'emilyjester',
    status: 'plus',
    terms: '9',
    photo: 'https://o.quizlet.com/XmLG2MuKyEVHZzZ0CU.KYw_b.png',
    profilePic: 'https://gimg.quizlet.com/-_4XVKDyAjVU/AAAAAAAAAAI/AAAAAAAAAA0/0GDBCgUg_j4/photo.jpg?sz=24'
  },
  {
    title: 'Flowers',
    author: 'emilyjester',
    status: 'plus',
    terms: '9',
    photo: 'https://o.quizlet.com/XmLG2MuKyEVHZzZ0CU.KYw_b.png',
    profilePic: 'https://gimg.quizlet.com/-_4XVKDyAjVU/AAAAAAAAAAI/AAAAAAAAAA0/0GDBCgUg_j4/photo.jpg?sz=24'
  },
  {
    title: 'Flowers',
    author: 'emilyjester',
    status: 'plus',
    terms: '9',
    photo: 'https://o.quizlet.com/XmLG2MuKyEVHZzZ0CU.KYw_b.png',
    profilePic: 'https://gimg.quizlet.com/-_4XVKDyAjVU/AAAAAAAAAAI/AAAAAAAAAA0/0GDBCgUg_j4/photo.jpg?sz=24'
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
