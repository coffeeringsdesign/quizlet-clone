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
  }
]

function TermBlock() {
  return(
    <div>Yo this termblock
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
