import React, { useState, useEffect } from 'react';

interface Props {
  projectName: string;
  src: string;
  expanded: boolean;
  mobile: string;
}

const Project: React.FC<Props> = ({ projectName, src, mobile, expanded }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;
  return (
    <div>
      {(src.endsWith('.mov') || src.endsWith('.mp4')) ? (
        <video preload={"auto"}  autoPlay muted loop src={isMobile? mobile: src} style={{ width: '100%', height: '100%' }} />
      ) : (
        <img src={src} alt={projectName} style={{ width: '100%' }} />
      )}
    </div>
  );
};

export default Project;
