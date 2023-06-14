import React, { useState, useEffect } from 'react';
import Project from './Project';
import ReactPageScroller from 'react-page-scroller';
import './landing.css'
import { BrowserView, MobileView } from 'react-device-detect';
const linkColor = "#ff6b6b"
const baseProjects = [
  {
    id: 0,
    projectName: 'Bio',
    src: 'https://personal-website-videos.s3.us-east-2.amazonaws.com/ojo.mp4',
    mobile: 'https://personal-website-videos.s3.us-east-2.amazonaws.com/ojo_mobile.mp4',
    description:<p> As an experienced software developer with TS/SCI clearance, I have a proven track record of delivering complex projects for government agencies. My expertise in big data analytics, data pipeline development, and front-end development have enabled me to create innovative solutions that meet the unique needs of my clients.
    <br/><br/>
    I am currently supporting <strong style={{color: "red"}}>JSOC [Joint Special Operations Command]</strong><strong className="programDescription"> via technical solutions</strong>. My expertise in software development, cloud based architecture, and my ability to work with sensitive and confidential information have made me a valuable asset to this organization. 
    <br/><br/>
    I developed <strong style={{color: "red"}}>Poseidon</strong><strong className="programDescription">, a State Department project aimed at detecting illicit North Korean smuggling through big data analytics.</strong> I leveraged my skills in AWS, Django, and Python to build a system that provided valuable insights and actionable intelligence. I was able to demonstrate my ability to work effectively in a fast-paced, high-pressure environment, delivering results that exceeded expectations.
    <br/><br/>
    I played critical role in <a href="https://www.darpa.mil/program/world-modelers" style={{color: linkColor}}>World Modelers</a> and <a href="https://www.darpa.mil/program/automating-scientific-knowledge-extraction-and-modeling" style={{color: linkColor}}>ASKEM</a>,<strong className="programDescription"> DARPA programs aimed at programatically standardizing existing machine learning models and their corresponding input/output.</strong> I was responsible for creating a standardized data schema, and data annotation process. This allowed us to convert hundreds of non-standarized datasets and model outputs into the same schema, enabling them to be used in any of our standarized models. This work showcased my ability to think creatively and solve complex problems in a highly technical field.
    <br/><br/>
    Overall, my extensive experience and proven ability to deliver results make me an ideal candidate for any project that requires a highly skilled and experienced software developer.</p>
    ,
    expanded: false
  },
  {
    id: 1,
    projectName: 'JSOC',
    src: 'https://personal-website-videos.s3.us-east-2.amazonaws.com/JSOC.mp4',
    mobile: 'https://personal-website-videos.s3.us-east-2.amazonaws.com/JSOC_mobile.mov',
    description: <p>As a software developer specializing in cloud architecture development, I have had the privilege of contributing to the success of JSOC (Joint Special Operations Command). Through my expertise and technical skills, I actively collaborated with a team of professionals to address complex challenges and optimize critical systems in a classified environment.<br/><br/>Working closely with my colleagues, I focused on troubleshooting and resolving technical issues, implementing enhancements, and ensuring seamless integration of systems. With meticulous attention to detail and a commitment to excellence, I played a crucial role in ensuring the smooth and efficient operations of JSOC.<br/><br/>While the specific details of my work are confidential, my responsibilities encompassed a wide range of tasks. I demonstrated the ability to quickly adapt to evolving requirements and deliver reliable technical solutions that supported JSOC's mission.<br/><br/>Throughout my tenure, I maintained the utmost dedication to upholding the highest level of security and confidentiality. I understood the importance of safeguarding classified information and strictly adhered to protocols. My technical abilities, combined with my unwavering commitment to the organization's success, were instrumental in supporting JSOC's objectives.</p>,
    expanded: false
  },
  {
    id: 2,
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
    id: 3,
    projectName: 'World Modelers & ASKEM',
    src: 'https://personal-website-videos.s3.us-east-2.amazonaws.com/World_Modelers.mp4',
    mobile: 'https://personal-website-videos.s3.us-east-2.amazonaws.com/World_Modelers_mobile.mov',
    description: <p>Our team developed Dojo through the DARPA programs <a href="https://www.darpa.mil/program/world-modelers" style={{color: linkColor}}>World Modelers</a> and <a href="https://www.darpa.mil/program/automating-scientific-knowledge-extraction-and-modeling" style={{color: linkColor}}>ASKEM</a> and with continued support from the Gates Foundation with the aim of advancing the field of machine learning. <br /><br /> Dojo standardizes machine learning models and the corresponding input/output data, allowing researchers to run their models once and have their actions captured in a centralized repository.
      <br /><br /> The ultimate goal of the project is to connect all registered models and datasets, creating a comprehensive repository of trained models and data.  <br /><br /> This framework was funded through organizations such as DARPA and continued in collaboration with the Gates Foundation, alongside top university researchers who dedicated countless hours uploading hundreds of state of the art models and datasets. <br /><br />
      The impact of Dojo was evident in the follow-up contract, ASKEM, which further solidifies its value to the research community.</p>,
    expanded: false
  }
];

const LandingPage: React.FC = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  let totalProjects = baseProjects.length.toString()
  const projectIndexStr = (projectIndex + 1).toString()
  const [projectName, setProjectName] = useState(baseProjects[0].projectName);
  const [projects, setProjects] = useState(baseProjects);

  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

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

  const badRatio = (width / height) < (16 / 9)

  return (
    <div>
        <ReactPageScroller animationTimer={800} renderAllPagesOnFirstRender={true} pageOnChange={onPageChange}>
          {projects.map((item) => {
            return <Project key={item.id} projectName={item.projectName} src={badRatio? item.mobile : item.src} />
          })}
        </ReactPageScroller>
        {Header}
        {expanded ? ProjectDescription : ExpandDescription}
      </div>
  );
};

export default LandingPage;
