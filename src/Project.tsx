import React, { useState, useEffect } from 'react';

interface Props {
  projectName: string;
  src: string;
}

const Project: React.FC<Props> = ({ projectName, src }) => {
  return (
    <div>
        <video preload={"auto"} playsInline={true} autoPlay muted loop src={src} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Project;
