// rafce
import React from 'react'
import peanuts_logo from '../images/peanuts.png'
import './css/MemberItem.css';

const MemberItem = ({img, name, skill, comment}) => {
  return (
    <div className='MemberItem'>
      <div className='member-contents'>
        <img src={ img } className="member-icon" alt='memberIcon'/>
        <img src={ peanuts_logo } className="peanuts-icon" alt='peanutsIcon'/>
        <div className='name-contents'>
          <h2 className='member-name'>{name}</h2>
          <p className='member-skill'>{skill}</p>
        </div>
      </div>
      <div className='comment-box'>
        <p className='comment-text'>{comment}</p>
      </div>
    </div>
  )
}

export default MemberItem