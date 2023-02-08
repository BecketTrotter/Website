import React, { useState } from 'react';

interface Props {
  projectName: string;
  src: string;
  expanded: boolean;
}

const Project: React.FC<Props> = ({ projectName, src, expanded }) => {
  return (
    <div>
      {(src.endsWith('.mov') || src.endsWith('.mp4')) ? (
        <video preload={"auto"} autoPlay muted loop src={src} style={{ width: '100%' }} />
      ) : (
        <img src={src} alt={projectName} style={{ width: '100%' }} />
      )}
    </div>
  );
};

export default Project;
