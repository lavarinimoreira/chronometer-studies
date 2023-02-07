import React from 'react'
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter, AiFillInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <footer className='header'>
            <a className='site' href="https://www.lavarinimoreira.me" target="_blank" rel="noreferrer">lavarinimoreira</a>
            <div className='footer__div'>
                <a className='git' href="https://www.github.com/lavarinimoreira" target="_blank" rel="noreferrer">
                    <AiFillGithub />
                </a>
                <a className='mail' href="mailto:gabriel@lavarinimoreira.me" target="_blank" rel="noreferrer">
                    <AiOutlineMail />
                </a>
                <a className='linkedin' href="https://www.linkedin.com/in/gabriel-lavarini-moreira-878706149/" target="_blank" rel="noreferrer">
                    <AiOutlineLinkedin />
                </a>
                <a className='twitter' href="https://twitter.com/lavarinimoreira" target="_blank" rel="noreferrer">
                    <AiOutlineTwitter />
                </a>
                <a className='instagram' href="https://www.instagram.com/gabriel_lavarini/" target="_blank" rel="noreferrer">
                    <AiFillInstagram />
                </a>
            </div>
        </footer>
    </div>
  )
}
export default Footer