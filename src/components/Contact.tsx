import React, { type ReactElement } from 'react'

import { FiGithub, FiFileText, FiLinkedin, FiMail } from 'react-icons/fi'

import { ContactButton, ContactContainer } from '@/styles/contact.styled'

const Contact = (): ReactElement => {
  return (
    <ContactContainer>
      <ContactButton type='button' onClick={() => { }}>
        <FiFileText size="20px" />
      </ContactButton>
      <ContactButton type='button' onClick={() => { }}>
        <FiGithub size="20px" />
      </ContactButton>
      <ContactButton type='button' onClick={() => { }}>
        <FiLinkedin size="20px" />
      </ContactButton>
      <ContactButton type='button' onClick={() => { }}>
        <FiMail size="20px" />
      </ContactButton>
    </ContactContainer>
  )
}

export default Contact
