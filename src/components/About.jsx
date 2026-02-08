import React from 'react';

const About = ({ accentColor }) => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#1E90FF] text-white px-4 sm:px-6 py-16 sm:py-20'>
      <div className='max-w-[1000px] mx-auto'>
        <div className='text-center pb-8 sm:pb-12'>
          <p className='text-2xl sm:text-3xl md:text-4xl font-bold inline border-b-4 text-white' style={{ borderColor: accentColor }}>
            About
          </p>
        </div>
        
        <div className='space-y-6 sm:space-y-8'>
          <div className='text-center'>
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed'>
              Hi! I'm Yohanes, a passionate Computer Science student and aspiring full-stack developer. Welcome to my world of coding, creativity, and problem-solving!
            </p>
          </div>
          
          <div className='max-w-3xl mx-auto space-y-4'>
            <p className='text-sm sm:text-base md:text-lg leading-relaxed text-white text-justify'>
              I am currently in my 3rd year of studying Computer Science, where I have developed a strong foundation in programming, algorithms, and software engineering principles. Over the past few years, I have focused on learning modern web technologies, including React, Next.js, Laravel, Tailwind CSS, and MySQL, and applying them to real-world projects.
            </p>

            <p className='text-sm sm:text-base md:text-lg leading-relaxed text-white text-justify'>
              My projects include building systems like dormitory management platforms, personal portfolio websites, and interactive web applications that demonstrate both my technical skills and my ability to solve practical problems. I enjoy creating solutions that are user-friendly, efficient, and scalable, while also focusing on clean and maintainable code.
            </p>

            <p className='text-sm sm:text-base md:text-lg leading-relaxed text-white text-justify'>
              Beyond coding, I am passionate about learning new technologies, exploring emerging trends in software development, and contributing to open-source projects. I strongly believe that technology can make a positive impact on people's lives, and I strive to build applications that are not only functional but meaningful.
            </p>

            <p className='text-sm sm:text-base md:text-lg leading-relaxed text-white text-justify'>
              My ultimate goal is to become a skilled full-stack developer, capable of handling end-to-end application development, from designing databases and backend APIs to crafting responsive and interactive frontends. I am eager to continue growing, collaborating with others, and building software that solves real-world problems.
            </p>

            <p className='text-sm sm:text-base md:text-lg leading-relaxed text-white text-justify'>
              Thank you for visiting my portfolio! I hope my work inspires confidence in my skills and demonstrates my dedication, creativity, and passion for software development. I am always excited to learn, innovate, and contribute to impactful projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
