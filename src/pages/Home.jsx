import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#F3FCF0]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      
        <p className='text-[#343F56]'>Hi, my name is</p>
        
        <h1 className='text-4xl sm:text-7xl font-bold text-[#FF4C29]'>
          Bria McCoy
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Software Engineer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a Software Engineer specializing in building and 
          designing digital experiences. Currently, I’m focused on solving problems and
          building responsive web applications.
        </p>
        <button className ="work-btn py-4 max-w-[200px] "><Link to='work' smooth={true} duration={500}>
        Check Out My Work
          </Link></button>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
