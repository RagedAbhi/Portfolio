import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import resume from '../../assets/Resume.pdf'
import './Footer.scss'

const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setIsFormSubmitted(true);
        setLoading(false);
      })
  }

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className='app__footer-cards'>
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:abhilash.khadanga@gmail.com" className='p-text'>abhilash.khadanga@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: 8981096136" className='p-text'>8981096136</a>
        </div>
      </div>

      {!isFormSubmitted ?
        <div className="app__footer-form app__flex">
          <div className='app__flex'>
            <input className='p-text' type='text' placeholder='Your Name' value={name} name='name' onChange={handleChangeInput} />
          </div>
          <div className='app__flex'>
            <input className='p-text' type='email' placeholder='Your Email' value={email} name='email' onChange={handleChangeInput} />
          </div>
          <div>
            <textarea className='p-text' placeholder='Your Message' name="message" value={message} onChange={handleChangeInput}></textarea>
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>
        : <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>}

      <div className="copyright">
        <a className='app__navbar-download' href={resume} target='_blank' download='Abhilash Resume'>Download Resume</a>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  "app__whitebg"
)
