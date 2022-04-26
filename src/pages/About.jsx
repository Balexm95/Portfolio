import React from 'react';


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#119DA4] text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#FF4C29]'>
              About
            </p>
          </div>
          
          </div>
          <div className='max-w-[1050px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <img className="me-image" src="./assets/Me.png"/>
           
            <div>
            <div className='about-text'>
            <h1> Please take a look around!</h1>
            </div>
              <p>I have a technical background with a creative passion and I have used my skills and passions to problem solve and design web applications. I am passionate about building great 
              software solutions and designing dynanmic user interfaces that improve
              the lives of those around me. I also enjoy artistic outlets like drawing, painting and playing instruments, like the piano and guitar. I hope you enjoy the sample of projects I have had the pleasure of working on. </p>  
            </div>
            
          </div>
      </div>
    </div>
  );
};

export default About;
