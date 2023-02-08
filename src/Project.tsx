import React, { useState, useEffect } from 'react';

interface Props {
  projectName: string;
  src: string;
}

const Project: React.FC<Props> = ({ projectName, src }) => {
  return (
    <div>
      {(src.endsWith('.mov') || src.endsWith('.mp4')) ? (
        <video preload={"auto"} playsInline={true} autoPlay muted loop src={src} style={{ width: '100%', height: '100%' }} />
      ) : (
        <img src={src} alt={projectName} style={{ width: '100%' }} />
      )}
    </div>
  );
};

export default Project;
