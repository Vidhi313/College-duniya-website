import React from "react"
import { FaLinkedinIn } from "react-icons/fa";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>College Duniya</h1>
            <span>The Place For Education</span>
          </div>
          <div>
            <FaLinkedinIn className='icon'></FaLinkedinIn>
            <AiFillGithub className=' icon'></AiFillGithub>
            <AiOutlineTwitter className=' icon'></AiOutlineTwitter>
            <AiFillInstagram className=' icon'></AiFillInstagram>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
