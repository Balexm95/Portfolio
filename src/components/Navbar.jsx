import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#119DA4] text-white'>
      

      {/* menu */}
      <div className="me-logo" >
        <Link to='home' smooth={true} duration={500}><img src="./images/Logo.png"alt='Logo Image' height="100%" width="130px"/>
          </Link>
      </div>
      <ul className='hidden md:flex'>
      
        <li className ="nav-link active">
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className ="nav-link">
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className ="nav-link">
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className ="nav-link">
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className ="nav-link">
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
     
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
        <div className = "contact-buttons">
          <li className='rounded-full w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/briamccoy/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          </div>
          <div className = "contact-buttons">
          <li className='rounded-full w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Balexm95'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          </div>
          <div className = "contact-buttons">
          <li className=' rounded-full w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:bria.mccoy95@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          </div>
          <div className = "contact-buttons ">
          <li className='rounded-full w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1Iky77vi19fRiT4a-FR-e5HebpM1DFHqq/view?usp=sharing'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;