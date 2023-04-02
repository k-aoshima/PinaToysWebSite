import React from 'react'
import da_icon from '../images/da-icon.png'
import a_icon from '../images/a-icon.png'
import hori_icon from '../images/hori-icon.png'
import co_icon from '../images/co-icon.png'
import MemberItem from './MemberItem'

const About = () => {
  return (
    <body>
      <div class='about'>
        <h1 class='about-ttl'>About</h1>
        <p class="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio neque iusto ipsum animi esse quod odit molestias quisquam, accusamus vitae, perferendis mollitia provident assumenda beatae quo autem qui eveniet recusandae quibusdam facilis repellendus quam. Dolore, magni nisi. Facilis!
        </p>
        <h2 class='member-ttl'>Member</h2>
        <div class='member-list'>
          <MemberItem img = {da_icon} name='だ。' skill='Designer' comment='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem libero similique facilis eligendi optio iste aliquid aperiam error corporis, molestias temporibus laboriosam fuga officiis vel enim accusamus distinctio ratione cum.'></MemberItem>
          <MemberItem img = {a_icon} name='あ' skill='Designer' comment='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem libero similique facilis eligendi optio iste aliquid aperiam error corporis, molestias temporibus laboriosam fuga officiis vel enim accusamus distinctio ratione cum.'></MemberItem>
          <MemberItem img = {hori_icon} name='ほり' skill='3DModeler'comment='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem libero similique facilis eligendi optio iste aliquid aperiam error corporis, molestias temporibus laboriosam fuga officiis vel enim accusamus distinctio ratione cum.'></MemberItem>
          <MemberItem img = {co_icon} name='Co,' skill='Programer' comment='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem libero similique facilis eligendi optio iste aliquid aperiam error corporis, molestias temporibus laboriosam fuga officiis vel enim accusamus distinctio ratione cum.'></MemberItem>
        </div>
      </div>
    </body>
  )
}

export default About