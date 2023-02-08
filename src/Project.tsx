import React, { useState, useEffect } from 'react';

interface Props {
  projectName: string;
  src: string;
  expanded: boolean;
  mobile: string;
}

const Project: React.FC<Props> = ({ projectName, src, mobile, expanded }) => {
  
  return (
    <div>
      {(src.endsWith('.mov') || src.endsWith('.mp4')) ? (
        <video preload={"auto"}  autoPlay muted loop src={src} style={{ width: '100%' }} />
      ) : (
        <img src={src} alt={projectName} style={{ width: '100%' }} />
      )}
    </div>
  );
};

export default Project;
