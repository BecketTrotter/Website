import React, { useState, useEffect } from 'react';
import Project from './Project';
import ReactPageScroller from 'react-page-scroller';
import './App.css'
import { BrowserView, MobileView } from 'react-device-detect';

const baseProjects = [
  {
    id: 0,
    projectName: 'Bio',
    src: 'https://personal-website-videos.s3.us-east-2.amazonaws.com/ojo.mov',
    mobile: 'https://personal-website-videos.s3.us-east-2.amazonaws.com/ojo_mobile.mov',
    description: <p>
      As a seasoned professional in the field of software development, I have experience working as a contractor for organizations such as DARPA and Joint Special Operations Command. <br /><br />
      My time contracting for DARPA was spent with Jataware, where I was a key player in several innovative projects aimed at utilizing data analytics and modeling to solve complex problems. In one such project, I was part of a team that developed a framework for standardizing machine learning models and connecting them to a vast repository of trained models and datasets. This project was funded by DARPA and later continued in collaboration with the Gates Foundation.
      <br /><br />
      I then transitioned to Iron Eagle X, where I support the Joint Special Operations Command as a software developer. My work involves designing, developing and delivering cutting-edge software solutions that meet the unique needs of the Special Operations community. With my strong background in software development and a proven track record of delivering mission-critical solutions, I am well equipped to handle any challenge that comes my way.
      <br /><br />
      With my extensive experience in software development, I bring a wealth of knowledge and a commitment to excellence to every project I work on. I am always seeking new and challenging opportunities to grow as a professional and am passionate about using technology to solve real-world problems.
    </p>,
    expanded: false
  },
  {
    id: 1,
    projectName: 'Poseidon',
    src: 'https://personal-website-videos.s3.us-east-2.amazonaws.com/ship2.mp4',
    mobile: 'https://personal-website-videos.s3.us-east-2.amazonaws.com/ship2_mobile.mov',
    description: <p>
      Our team leveraged the latest technology to tackle a critical global issue - detecting North Korean maritime smuggling. <br /><br />
      We processed over 1 billion records per year of daily maritime GPS data (AIS data) through our robust AWS-based data pipeline. <br /><br />
      Our advanced analytics capabilities allowed us to analyze the data and calculate risk scores for each ship and suspected transfer, effectively flagging instances of smuggling activity. <br /><br />
      The results of our efforts were remarkable - we were able to uncover many previously undetected smuggling instances, and our findings were validated through a successful collaboration with the State Department. <br /><br />
      This project showcases our expertise in developing innovative data solutions to real-world challenges and our commitment to making a positive impact in the world.
    </p>,
    expanded: false
  },
  {
    id: 2,
    projectName: 'World Modelers',
    src: 'https://personal-website-videos.s3.us-east-2.amazonaws.com/World_Modelers.mp4',
    mobile: 'https://personal-website-videos.s3.us-east-2.amazonaws.com/World_Modelers_mobile.mov',
    description: <p>Our team developed Dojo through the DARPA program "World Modelers" and with continued support from the Gates Foundation with the aim of advancing the field of machine learning. <br /><br /> Dojo standardizes machine learning models and the corresponding input/output data, allowing researchers to run their models once and have their actions captured in a centralized repository.
      <br /><br /> The ultimate goal of the project is to connect all registered models and datasets, creating a comprehensive repository of trained models and data.  <br /><br /> This framework was funded through organizations such as DARPA and continued in collaboration with the Gates Foundation, alongside top university researchers who dedicated countless hours uploading hundreds of state of the art models and datasets. <br /><br />
      The impact of Dojo was evident in the follow-up contract, ASKEM, which further solidifies its value to the research community.</p>,
    expanded: false
  },
  {
    id: 3,
    projectName: 'Project 3',
    src: 'https://personal-website-videos.s3.us-east-2.amazonaws.com/art.mp4',
    mobile: 'https://personal-website-videos.s3.us-east-2.amazonaws.com/art_mobile.mov',
    description: 'Our team leveraged the latest technology to tackle a critical global issue - detecting North Korean maritime smuggling. We processed over 1 billion records per year of daily maritime GPS data (AIS data) through our robust AWS-based data pipeline. Our advanced analytics capabilities allowed us to analyze the data and calculate risk scores for each ship and suspected transfer, effectively flagging instances of smuggling activity. The results of our efforts were remarkable - we were able to uncover many previously undetected smuggling instances, and our findings were validated through a successful collaboration with the State Department. This project showcases our expertise in developing innovative data solutions to real-world challenges and our commitment to making a positive impact in the world.',
    expanded: false
  },
];

const App: React.FC = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  let totalProjects = baseProjects.length.toString()
  const projectIndexStr = (projectIndex + 1).toString()
  const [projectName, setProjectName] = useState(baseProjects[0].projectName);
  const [projects, setProjects] = useState(baseProjects);

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
      console.log('width: ' + width)
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;


  function onPageChange(event: number) {
    setProjectIndex(event);
    if (event !== projectIndex && event >= 0 && event < projects.length) {
      setExpanded(false);
      setProjectName(projects[event].projectName);
    }
  }

  const handleClick = () => {
    setExpanded(!expanded)
  }

  const Header = (<div className="header">
    <p style={{ margin: '8px', textAlign: 'center' }}> Henry Trotter - Project: <strong style={{ color: 'red' }}> {projectName} </strong> <span style={{ float: 'right' }}>{projectIndex + 1}{' /  ' + totalProjects} </span></p>
  </div>)

  const ExpandDescription = (
    <div className="expandDiv" onClick={handleClick} />
  )

  const ProjectDescription = (
    <div className='projectDescription' onClick={handleClick}> <div style={{ margin: '8px' }}> {projects[projectIndex].description}</div> </div>
  )

  return (
    <div>
      <BrowserView>
        <ReactPageScroller animationTimer={800} renderAllPagesOnFirstRender={true} pageOnChange={onPageChange}>
          {projects.map((item) => {
            return <Project mobile={item.mobile} key={item.id} projectName={item.projectName} src={item.src} expanded={item.expanded} />
          })}
        </ReactPageScroller>
        {Header}
        {expanded ? ProjectDescription : ExpandDescription}
      </BrowserView>
      <MobileView>
        <ReactPageScroller animationTimer={800} renderAllPagesOnFirstRender={true} pageOnChange={onPageChange}>
          {projects.map((item) => {
            return <Project mobile={item.mobile} key={item.id} projectName={item.projectName} src={item.mobile} expanded={item.expanded} />
          })}
        </ReactPageScroller>
        {Header}
        {expanded ? ProjectDescription : ExpandDescription}
      </MobileView> </div>
  );
};

export default App;
