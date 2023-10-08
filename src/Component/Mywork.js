import React from 'react';
import In from '../Images/copay-in-health-insurance.jpg';
import Por from '../Images/portfolio.jpg';
import chat from '../Images/chat.jpg';
import ecom from '../Images/ecomm.jpg';
import soc from '../Images/socialmedia.jpg';
import cyber from "../Images/cyber1.jpg";
// import fit from "../Images/fitness-app.png";
// import hms from "../Images/Hospital-Management-System-01.png";


const Mywork = () => {
  // Define an array of project data with image URLs and project links
  const projects = [
    { imageUrl: In, projectLink: 'project1-link' },
    { imageUrl: Por, projectLink: 'project2-link' },
    { imageUrl: chat, projectLink: 'project2-link' },
    { imageUrl: ecom, projectLink: 'project2-link' },
    { imageUrl: soc, projectLink: 'project2-link' },
    { imageUrl: cyber, projectLink: 'project2-link' },
    // { imageUrl: fit, projectLink: 'project2-link' },
    // { imageUrl: hms, projectLink: 'project2-link' },
    // Add more project data as needed
  ];

  const imageStyle = {
    width: '299px', // Adjust the width as per your preference
    height: '250px', // Adjust the height as per your preference
  };

  return (
    <>
    <h2 className='work'>MY WORK</h2>
    <p className='workk'>Here are a few past projects I've worked on. Want to know more? Let's talk</p>
    <div className="mywork-gallery">
      {projects.map((project, index) => (
        <div className="gallery-item" key={index}>
          <a href={project.projectLink}>
            <img
              src={project.imageUrl}
              alt={`Project ${index + 1}`}
              className="image-hover"
              style={imageStyle}
            />
          </a>
        </div>
      ))}
      <p className='workk'>Interested in working together? We should queue up a time to chat.<br/>
       I’ll buy the coffee.
</p>
    </div>
    <button className='talkbutt'>Let's do it! </button>
    </>
  );
};

export default Mywork;
