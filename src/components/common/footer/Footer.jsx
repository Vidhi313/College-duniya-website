import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import { FaLinkedinIn } from "react-icons/fa";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";


const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>College Duniya</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <FaLinkedinIn className='icon'></FaLinkedinIn>
            <AiFillGithub className=' icon'></AiFillGithub>
            <AiOutlineTwitter className=' icon'></AiOutlineTwitter>
            <AiFillInstagram className=' icon'></AiFillInstagram>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                B-223 , Rajasthan
              </li>
              <li>
                +2 392 3929 210
              </li>
              <li>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023  All rights reserved | This template is made by  Vidhi Sharma
        </p>
      </div>
    </>
  )
}

export default Footer
