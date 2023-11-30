import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebook, FaGithub } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <BsLinkedin />
            </div>
            <div>
                <FaGithub />
            </div>
            <div>
                <BsInstagram />
            </div>
        </div>
    )
}

export default SocialMedia
