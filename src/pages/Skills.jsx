import React from 'react';

// import HTML from '../assets/html.png';
// import CSS from '../assets/css.png';
// import JavaScript from '../assets/javascript.png';
// import ReactImg from '../assets/react.png';
// import Node from '../assets/node.png';
// import AWS from '../assets/aws.png';
// import GitHub from '../assets/github.png';
// import mysql from '../assets/mysql.svg.png'
import SkillsSlider from '../components/SkillsSlider';

const Skills = () => {
  return (
      
    <div name='skills' className='w-full h-screen bg-[#119DA4] text-white'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-[50%]'>
          <div>
              <p className='skills-title text-4xl font-bold inline border-b-4 border-[#FF4C29] '>Skills</p>
              <p className='skills-desc py-4'>* These are the technologies I've worked with</p>
          </div>
      </div>
      <div className ="skills-slider">
      <SkillsSlider/>
      </div>
    </div>
  );
};

export default Skills;
