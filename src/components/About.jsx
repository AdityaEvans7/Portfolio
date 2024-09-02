import React from 'react'

function About() {
  return (
    <>
    <div name="About" 
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
      <h1 className='text-3xl font-bol mb-5'>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores voluptatibus eveniet tempora minima ea consequatur fuga tenetur blanditiis quaerat fugit temporibus laborum amet expedita, consequuntur, necessitatibus ipsum natus doloribus?
      </p>
      <br />
      <h1 className='text-yellow-300 font-semibold text-xl'>Education</h1>
      <span>
        <h2 className='font-sembold'>Rajasthan Technical University :)</h2>
        <li>
            Arya College of Engineering :-
            <h5 >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere est eos numquam eveniet? Error ipsum, laudantium dolores consequatur, quod assumenda et similique saepe nemo ipsam delectus.</h5>

        </li>
      </span>
      <br />
      <h1 className="text-yellow-300 font-semibold text-xl">Skill & Experties</h1>
      <p>Proficient in Full Stck Developer, UI Designer and Android Studio, Experienced with [Figma, Android Studio & Photoshop], Excellent problem-solving skills Effective communicator and effective collaborator.</p>
      <br />
      <h1 className="text-yellow-300 font-semibold text-xl">Internships</h1>
      <li>
        Full Stack Development : <span className="text-red-500">)</span>
        <p>I've successfully completed my 45 days Internships with PMCS in which i learned How websites are created and worked in Frontend & Backend. </p> <br />
      </li>
      <li>
        Learn & Build : <span className='text-red-500'>)</span>
        <p>In the starting of my 2nd year, I've successfully completed my Python Internship with Learn & Build,  in which i created two project Weather & Bank Management</p> <br />
      </li>
      <h1 className="text-yellow-300 font-semibold text-xl">Achievements & Certificates</h1>
      <li>
        Full Stack Development (PMCS)
      </li>
      <li>
        C++ (IIT Bombay)
      </li>
      <li>
        my SQL (Geekster)
      </li>
      <li>
        Python Programming Language (L&B)
      </li>
      <li>
        Basic Python (HackerRank)
      </li>
      <li>
        Cyber Security and Ethical Hacking Bootcamp (Lets Upgrade)
      </li> <br />
      <h1 className="text-yellow-300 font-semibold text-xl">Mission Statement</h1>
      <p>My mission is to leverage my skills and creativity to deliver solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizon.</p>

    </div>
    </>
  )
}

export default About
